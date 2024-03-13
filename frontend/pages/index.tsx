import Navbar from "../components/Navbar"; // Import the Navbar component
import ColorSelector from "../components/ColorSelector";
import Title from "../components/Title";
import { Color, colors } from "../lib/colors";
import { useMemo, useState } from "react";
import Canvas from "../components/Canvas";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { AnchorWallet, useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { DrawWithFrens, IDL } from "../idl/draw_with_frens";
import { PublicKey } from "@solana/web3.js";

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<Color>(colors[0])

  const { connection } = useConnection();

  const anchorWallet: AnchorWallet | undefined = useAnchorWallet()

  const anchorProvider: AnchorProvider | undefined = useMemo(() => {
    if (anchorWallet) {
      return new AnchorProvider(connection, anchorWallet, { commitment: 'confirmed' })
    } else {
      return undefined
    }
  }, [connection, anchorWallet])

  // Make sure you use your program ID!
  const programId = new PublicKey("p1Z5CJa9U1e3XU9Uq9zhCQArD19MidRfBdMHPowtoim");

  const anchorProgram: Program<DrawWithFrens> | undefined = useMemo(() => {
    if (anchorProvider) {
      return new Program(IDL, programId, anchorProvider)
    } else {
      return undefined
    }
  }, [anchorProvider])

  return (
    <div>
      <Navbar /> {/* Add the Navbar component */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Title>Picassol Canvas Season 0</Title>
        <div className="mb-8">
          <WalletMultiButton className="!bg-gray-900 hover:scale-105" />
        </div>
        <ColorSelector selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Canvas program={anchorProgram} selectedColor={selectedColor} />
      </div>
    </div>
  );
}
