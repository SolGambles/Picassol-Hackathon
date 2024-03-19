import React from "react";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar = () => {
    return (
        <nav className="p-4 bg-black">
            <div className="container mx-auto flex justify-between items-center">
                <div className="rainbow-text">PICASSOL.ART</div>
                <div className="flex items-center space-x-4">
                    <div>
                        <Link href="/">
                            <a className="yourClassName">
                                Canvas
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/mint">
                            <a className="yourClassName">
                                Mint
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://picassol.gitbook.io/picassol">
                            <a className="yourClassName" target="blank">
                                Docs
                            </a>
                        </Link>
                    </div>
                </div>
                <div>
                    <WalletMultiButton />{" "}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
