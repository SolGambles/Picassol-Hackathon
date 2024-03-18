// Footer.tsx
import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-black">
      <div className="container mx-auto px-4 flex justify-between items-center">
      <p className="text-white">&copy; 2024 Picassol.art, All rights reserved.</p>
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
    </footer>
  );
}

export default Footer;
