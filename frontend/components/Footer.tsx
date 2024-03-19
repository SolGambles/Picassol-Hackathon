// Footer.tsx
import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-black">
      <div className="container mx-auto px-4 flex flex-col justify-between items-start">
        <div className="flex items-center space-x-4 mb-4">
          <a
            href="https://discord.gg/M7XQuDB59y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/discord.png"
              alt="Discord"
              className="h-6 w-6 hover:scale-110"
            />
          </a>
          <a
            href="https://twitter.com/PicassolCanvas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/twitter.png"
              alt="Twitter"
              className="h-6 w-6 hover:scale-110"
            />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/telegram.png"
              alt="Telegram"
              className="h-6 w-6 hover:scale-110"
            />
          </a>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-white">
            &copy; 2024 Picassol.art, All rights reserved.
          </p>
          <div>
            <a
              href="/privacy-policy"
              className="text-gray-300 hover:text-white mr-4"
            >
              Privacy Policy
            </a>
            <a href="/terms-of-use" className="text-gray-300 hover:text-white">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
