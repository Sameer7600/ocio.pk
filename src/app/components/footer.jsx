import { Facebook, Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-700">

      <hr className="border-t border-gray-300" />

      {/* Information Links */}
      <div className="w-full py-10">
        <h2 className="text-lg font-semibold text-center tracking-wide mb-6">
          Information
        </h2>
        <ul className="flex flex-wrap justify-center gap-6 text-sm mb-10">
          <li><a href="#" className="hover:underline text-black">Size Guide</a></li>
          <li><a href="#" className="hover:underline text-black">Shipping Policy</a></li>
          <li><a href="#" className="hover:underline text-black">Return & Exchange</a></li>
          <li><a href="#" className="hover:underline text-black">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline text-black">About Us</a></li>
          <li><a href="#" className="hover:underline text-black">Terms Of Services</a></li>
          <li><a href="#" className="hover:underline text-black">Contact Us</a></li>
        </ul>

        {/* Contact + Email (Left) and Icons (Right) */}
            <p className="ml-52 text-1xl font-bold mb-5 text-black">Contact Us At 0328-0572497</p>
        <div className="flex flex-col md:flex-row  items-center gap-8">
          {/* Email Input Section */}
          <div className="flex items-center w-auto max-w-lg border border-gray-300 rounded overflow-hidden px-2 ml-52">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 outline-none font-semibold"
            />
            <button className="px-4 py-2">
              →
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl ml-[490px]">
            <Facebook className="cursor-pointer hover:text-blue-600" />
            <Instagram className="cursor-pointer hover:text-pink-500" />
          </div>
        </div>
      </div>
      <hr className="mb-5" />
      {/* Bottom Bar */}
      <div className="flex flex-col mb-5 ml-52 text-black">
      {/* Selector */}
      <div className="mb-4">
        <label className="text-sm  mb-2 block">Country/region</label>
        <select className="w-64 rounded-md border border-gray-400 px-4 py-2 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-black">
          <option>PKR Rs | Pakistan</option>
          <option>USD $ | United States</option>
          <option>INR ₹ | India</option>
          <option>GBP £ | United Kingdom</option>
          <option>EUR € | Europe</option>
        </select>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-500">
        © 2025, Ocio Pakistan Powered by Shopify
      </p>
    </div>
    </footer>
  );
};

export default Footer;

