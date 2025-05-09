import React, { useState } from "react";
import Logo from "../../assets/icons/NavLogo.jsx";
import UserCircle from "../../assets/icons/UserCircle.jsx";
import ShoppingIcon from "../../assets/icons/ShoppingIcon.jsx";
import SearchIcon from "../../assets/icons/SearchIcon.jsx";
import TicketPercent from "../../assets/icons/TicketPercent.jsx";
import CrossIcon from "../../assets/icons/CrossIcon.jsx";
import MenuIcon from "../../assets/icons/MenuIcon.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="relative bg-[#F3F5F7] flex justify-center items-center h-[40px] text-[14px] font-semibold gap-5 text-[#141718]">
        <TicketPercent />
        30% off storewide — Limited time!
        <div className="absolute right-4">
          <CrossIcon />
        </div>
      </div>

      <nav className="bg-white w-full px-4 md:px-5 py-4 md:py-0 md:my-5 lg:max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:max-w-[1120px] mx-auto gap-4">
          <div className="flex gap-5">
            <div className="md:hidden flex items-center">
              <button onClick={() => setShowMenu(!showMenu)}>
                <MenuIcon size={24} />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <Logo />
            </div>
          </div>
          <div
            className={`flex flex-col md:flex-row gap-4 md:gap-10 text-[16px] text-[#6C7275] font-normal ${
              showMenu ? "block" : "hidden"
            } md:flex`}
          >
            <div className="flex gap-2 w-full justify-center md:hidden mt-4 relative">
              <input
                type="text"
                placeholder="Search..."
                className="border px-2 py-1 w-full rounded pl-10"
              />
              <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <SearchIcon />
              </button>
            </div>

            <ul className="flex flex-col gap-4 w-full  md:flex-row md:gap-10">
              <Link to="/">Home</Link>
              <hr className="text-gray-400" />
              <Link to="/shop">Shop</Link>
              <hr className="text-gray-400" />
              <Link to="/blog">Blog</Link>
              <hr className="text-gray-400" />
              <Link to="/contact">Contact Us</Link>
              <hr className="text-gray-400" />
            </ul>

            <div className="pt-[6rem] md:p-0 ">
              <div className="flex justify-center gap-4 text-[16px] w-full mt-4 md:hidden">
              <Link to="/account">
                <UserCircle />
              </Link>

              <Link to="/cart">
                <ShoppingIcon />
              </Link>
              </div>
              <div>
                <button className="text-white bg-black w-full p-3 rounded-lg md:mt-5 md:hidden">
                  Sign In
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-center md:justify-end items-center gap-4 text-[16px]">
            <div className="hidden md:flex items-center gap-2">
              <button onClick={() => setShowSearch(!showSearch)}>
                <SearchIcon />
              </button>

              {showSearch && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="border px-2 py-1 rounded"
                />
              )}
            </div>
            <div className="hidden md:flex items-center gap-2 ">
              <Link to="/account">
                <UserCircle />
              </Link>

              <Link to="/cart">
                <ShoppingIcon />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
