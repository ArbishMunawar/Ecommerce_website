import React from 'react';
import Facebook from '../../assets/icons/Facebook'; 
import Instagram from '../../assets/icons/Instagram';
import Youtube from '../../assets/icons/Youtube';
import Logo from '../../assets/icons/Footerlogo';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold pb-3"><Logo/></h1>
          <p className="text-sm text-gray-400">Gift & Decoration Store</p>
        </div>

        <ul className="flex flex-col md:flex-row gap-4 text-sm text-gray-300">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">Shop</a></li>
          <li><a href="#" className="hover:text-white">Product</a></li>
          <li><a href="#" className="hover:text-white">Blog</a></li>
          <li><a href="#" className="hover:text-white">Contact Us</a></li>
        </ul>
      </div>

      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-700 pt-4 text-sm text-gray-400">
        <p>Copyright © 2023 3legant. All rights reserved</p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
        </div>

        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-white"><Facebook /></a>
          <a href="#" className="hover:text-white"><Instagram /></a>
          <a href="#" className="hover:text-white"><Youtube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
