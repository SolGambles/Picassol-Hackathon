// Footer.tsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 Picassol.art, All rights reserved.</p>
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
