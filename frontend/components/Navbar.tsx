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
                            <a className="py-3 rounded-full border-2 bg-black px-6 text-xs hover:bg-white hover:text-black hover:border-2 hover:border-black font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg">
                                Canvas
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/mint">
                            <a className="py-3 rounded-full border-2 bg-black px-6 text-xs hover:bg-white hover:text-black hover:border-2 hover:border-black font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg">
                                Mint
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://picassol.gitbook.io/picassol">
                            <a className="py-3 rounded-full border-2 bg-black px-6 text-xs hover:bg-white hover:text-black hover:border-2 hover:border-black font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg">
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
