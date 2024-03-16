import { IdlAccounts, Program } from "@coral-xyz/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { Picassol } from "../idl/picassol";
import { Color } from "../lib/colors";

type PixelAccount = IdlAccounts<Picassol>["pixel"];

interface Props {
  posX: number;
  posY: number;
  program: Program<Picassol>;
  pixelData?: PixelAccount;
  selectedColor: Color;
}

export default function Pixel({
  posX,
  posY,
  program,
  pixelData,
  selectedColor,
}: Props) {
  const { colR, colG, colB } = pixelData || {};
  const color = pixelData ? `rgb(${colR}, ${colG}, ${colB})` : "white";

  const getPixelAddress = () => {
    const [pixelPublicKey] = PublicKey.findProgramAddressSync(
      [Buffer.from("pixel"), Buffer.from([posX, posY])],
      program.programId
    );
    return pixelPublicKey;
  };

  const createPixel = async () => {
    const lastClickTime = localStorage.getItem('lastClickTime');
    const now = Date.now();

    if (lastClickTime && now - Number(lastClickTime) < 33000) {
      return;
    }

    await program.methods
      .createPixel(
        posX,
        posY,
        selectedColor.r,
        selectedColor.g,
        selectedColor.b
      )
      .accounts({
        pixel: getPixelAddress(),
        user: program.provider.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    // Set the lastClickTime after the transaction is successful
    localStorage.setItem('lastClickTime', String(now));
  };

  const updatePixel = async () => {
    const lastClickTime = localStorage.getItem('lastClickTime');
    const now = Date.now();

    if (lastClickTime && now - Number(lastClickTime) < 33000) {
      return;
    }

    await program.methods
      .updatePixel(selectedColor.r, selectedColor.g, selectedColor.b)
      .accounts({
        pixel: getPixelAddress(),
      })
      .rpc();

    // Set the lastClickTime after the transaction is successful
    localStorage.setItem('lastClickTime', String(now));
  };

  return (
    <td
      className="h-4 min-w-[1rem]"
      style={{ backgroundColor: color }}
      onClick={pixelData ? updatePixel : createPixel}
    />
  );
}
