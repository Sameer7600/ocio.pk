import { Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="mt-6">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* Left: Search */}
        <Search className="h-6 w-6 text-black cursor-pointer" />

        {/* Center: Logo */}
        <Image
          src="/images/Ocio-Logo-01.png"
          height={55}
          width={80}
          alt="Logo"
          className="object-contain"
        />

        {/* Right: User & Bag */}
        <div className="flex items-center gap-6">
          <User className="h-6 w-6 text-black cursor-pointer" />
          <ShoppingBag className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </nav>

      {/* Bottom Navigation Links */}
      <div className="border-b border-black">
        <ul className="flex justify-center flex-wrap gap-6 py-4 text-sm text-gray-800">
          <li><a href="/" className="hover:text-black hover:underline hover:font-semibold">Home</a></li>
          <li><a href="/fabric" className="hover:text-black hover:underline hover:font-semibold">Fabric Masks Deals</a></li>
          <li><a href="/co-ord" className="hover:text-black hover:underline hover:font-semibold">Co-ord sets</a></li>
          <li><a href="/nightSuits" className="hover:text-black hover:underline hover:font-semibold">Night Suits</a></li>
          <li><a href="/silkScrunchies" className="hover:text-black hover:underline hover:font-semibold">Silk Scrunchies Deals</a></li>
          <li><a href="/kidsNight-Suits" className="hover:text-black hover:underline hover:font-semibold">Kids Night-Suits</a></li>
          <li><a href="/trousers" className="hover:text-black hover:underline hover:font-semibold">Trousers</a></li>  
          <li><a href="/kidsMask" className="hover:text-black hover:underline hover:font-semibold">Kids Mask</a></li>
          <li><a href="/contact" className="hover:text-black hover:underline hover:font-semibold">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
