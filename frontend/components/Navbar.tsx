import React from "react";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import twitterLogo from "../public/twitter.png";
import discordLogo from "../public/discord.png";
import telegramLogo from "../public/telegram.png";

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
            <a
              href="https://twitter.com/PicassolCanvas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterLogo.src} alt="Twitter" className="h-8 w-8" />{" "}
              {/* adjust size as needed */}
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/M7XQuDB59y"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={discordLogo.src} alt="Discord" className="h-8 w-8" />{" "}
              {/* adjust size as needed */}
            </a>
          </li>
          <li>
            <a
              href="https://t.me/picassol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={telegramLogo.src} alt="Telegram" className="h-8 w-8" />{" "}
              {/* adjust size as needed */}
            </a>
          </li>
          <li>
            <WalletMultiButton />{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
