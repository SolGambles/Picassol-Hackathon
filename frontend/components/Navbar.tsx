import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const Navbar = () => {
  const { publicKey } = useWallet();
  const [points, setPoints] = useState(0);
  useEffect(() => {
    if (publicKey) {
      fetch(`/api/getUserPoints?walletAddress=${publicKey.toString()}`)
        .then((response) => response.json())
        .then((data) => setPoints(data.points));
    }
  }, [publicKey]);
return (
    <nav className="p-4 bg-transparent">
        <div className="container mx-auto flex justify-between items-center">
            <div className="rainbow-text flex-1 text-left">PICASSOL.ART</div>
            <div className="flex-1 text-center">
                <div className="flex justify-center space-x-4">
                    <Link href="/">
                        <a className="yourClassName">Canvas</a>
                    </Link>
                    <Link href="/mint">
                        <a className="yourClassName">Mint</a>
                    </Link>
                    <Link href="https://picassol.gitbook.io/picassol">
                        <a className="yourClassName" target="blank">
                            Docs
                        </a>
                    </Link>
                    <Link href="https://faucet.solana.com/">
                        <a className="yourClassName" target="blank">
                            Get Devnet SOL
                        </a>
                    </Link>
                </div>
            </div>
            <div className="flex-1 text-right">
                <div className="flex justify-end items-center space-x-4">
                    <div className="border-yellow-500 border-2 rounded-md p-2 text-white">
                        Points: {points}
                    </div>
                    <WalletMultiButton />
                </div>
            </div>
        </div>
    </nav>
);
};

export default Navbar;
