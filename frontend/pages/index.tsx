import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import ColorSelector from "../components/ColorSelector";
import Title from "../components/Title";
import { Color, colors } from "../lib/colors";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {
  AnchorWallet,
  useAnchorWallet,
  useConnection,
} from "@solana/wallet-adapter-react";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { Picassol, IDL } from "../idl/picassol";
import { PublicKey } from "@solana/web3.js";
import Canvas from "../components/Canvas";
import Footer from "../components/Footer";

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<Color>(colors[0]);

  const { connection } = useConnection();

  const anchorWallet: AnchorWallet | undefined = useAnchorWallet();

  const anchorProvider: AnchorProvider | undefined = useMemo(() => {
    if (anchorWallet) {
      return new AnchorProvider(connection, anchorWallet, {
        commitment: "confirmed",
      });
    } else {
      return undefined;
    }
  }, [connection, anchorWallet]);

  // Make sure you use your program ID!
  const programId = new PublicKey(
    "p1Z5CJa9U1e3XU9Uq9zhCQArD19MidRfBdMHPowtoim"
  );

  const anchorProgram: Program<Picassol> | undefined = useMemo(() => {
    if (anchorProvider) {
      return new Program(IDL, programId, anchorProvider);
    } else {
      return undefined;
    }
  }, [anchorProvider]);

  return (
    <div
      style={{
        width: "100vw",
        maxWidth: "100%",
        overflowX: "hidden",
        backgroundColor: "rgb(32,44,52)",
      }}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <ColorSelector
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Canvas program={anchorProgram} selectedColor={selectedColor} />
      </div>
      <Footer />
    </div>
  );
}
