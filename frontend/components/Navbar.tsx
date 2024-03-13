// Navbar.tsx

import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Picassol.art</div>
        <ul className="flex items-center">
          <li className="mr-4">
            <a href="https://twitter.com/PicassolCanvas" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
          <li className="mr-4">
            <a href="https://discord.gg/M7XQuDB59y" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">Discord</a>
          </li>
          <li className="mr-4">
            <a href="https://picassol.gitbook.io/picassol" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">Docs</a>
          </li>
          <li>
            <WalletMultiButton className="bg-black hover:bg-black text-white" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
