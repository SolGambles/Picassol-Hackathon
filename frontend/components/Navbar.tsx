import React from "react";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import twitterLogo from "../public/twitter.png";
import discordLogo from "../public/discord.png";
import telegramLogo from "../public/telegram.png";

const Navbar = () => {
  return (
    <nav className="p-4 bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div>
            <div className="rainbow-text">PICASSOL.ART</div>
          </div>
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
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <a
              href="https://twitter.com/PicassolCanvas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitterLogo.src}
                alt="Twitter"
                className="h-7 w-7 hover:scale-110"
              />{" "}
              {/* adjust size as needed */}
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/M7XQuDB59y"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={discordLogo.src}
                alt="Discord"
                className="h-7 w-7 hover:scale-110"
              />{" "}
              {/* adjust size as needed */}
            </a>
          </li>
          <li>
            <a
              href="https://t.me/picassol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={telegramLogo.src}
                alt="Telegram"
                className="h-7 w-7 hover:scale-110"
              />{" "}
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