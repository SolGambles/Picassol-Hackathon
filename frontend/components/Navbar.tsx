import React from 'react';
import Link from 'next/link';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div>
            <div className="text-white font-bold text-xl">Picassol.art</div>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <Link href="/">
                <a className="text-white hover:text-gray-300">Canvas</a>
              </Link>
            </div>
            <div>
              <Link href="/mint">
                <a className="text-white hover:text-gray-300">Mint</a>
              </Link>
            </div>
            <div>
              <Link href="https://picassol.gitbook.io/picassol">
                <a className="text-white hover:text-gray-300">Docs</a>
              </Link>
            </div>
          </div>
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="https://twitter.com/PicassolCanvas" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
          <li>
            <a href="https://discord.gg/M7XQuDB59y" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">Discord</a>
          </li>
          <li>
            <a href="https://t.me/picassol" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">Telegram</a>
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
