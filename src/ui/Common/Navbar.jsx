// import React from "react";
// import Logo from "../../assets/icons/NavLogo.jsx";
// import UserCircle from "../../assets/icons/UserCircle";
// import ShoppingIcon from "../../assets/icons/ShoppingIcon";
// import SearchIcon from "../../assets/icons/SearchIcon";
// import TicketPercent from "../../assets/icons/TicketPercent.jsx";
// import CrossIcon from "../../assets/icons/CrossIcon.jsx";
// const Navbar = () => {
//   return (
//     <>
//       <div>
//         <div className="bg-[#F3F5F7] relative flex justify-center items-center h-[40px] text-[14px] font-semibold gap-5 text-[#141718]">
//           <TicketPercent />
//           30% off storewide — Limited time!
//           <button className="text-blue-500 underline">Shop now!</button>
//           <div className="absolute right-4 md:right-8">
//             <CrossIcon />
//           </div>
//         </div>

//         <nav className="lg:max-w-[1120px] mx-auto h-[80px] bg-white flex justify-between items-center">
//           <Logo />
//           <div>
//             <ul className=" md:flex gap-10 text-[16px] text-[#6C7275] font-normal ">
//               <li>Home</li>
//               <li>Shop</li>
//               <li>Product</li>
//               <li>Contact us</li>
//             </ul>
//           </div>
//           <div className=" md:flex gap-4 text-[16px]">
//             <input type="text" placeholder="" />
//             <button>
//               <SearchIcon />
//             </button>
//             <UserCircle />
//             <ShoppingIcon />
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;

// import React from "react";
// import Logo from "../../assets/icons/NavLogo.jsx";
// import UserCircle from "../../assets/icons/UserCircle";
// import ShoppingIcon from "../../assets/icons/ShoppingIcon";
// import SearchIcon from "../../assets/icons/SearchIcon";
// import TicketPercent from "../../assets/icons/TicketPercent.jsx";
// import CrossIcon from "../../assets/icons/CrossIcon.jsx";

// const Navbar = () => {
//   return (
//     <>
//       {/* Top Banner */}
//       <div className="relative bg-[#F3F5F7] flex justify-center items-center h-[40px] text-[14px] font-semibold gap-5 text-[#141718]">
//         <TicketPercent />
//         30% off storewide — Limited time!
//         <div className="absolute right-4">
//           <CrossIcon />
//         </div>
//       </div>

//       {/* Navbar Section */}
//       <nav className="bg-white w-full px-4 py-4 md:py-0">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:max-w-[1120px] mx-auto gap-4">

//           {/* Logo */}
//           <div className="flex justify-between items-center">
//             <Logo />
//           </div>

//           {/* Search bar (full width on mobile) */}
//           <div className="flex items-center gap-2 w-full md:w-auto">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="border px-2 py-1 w-full md:w-auto rounded"
//             />
//             <button>
//               <SearchIcon />
//             </button>
//           </div>

//           {/* Menu Links */}
//           <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-[16px] text-[#6C7275] font-normal">
//             <li>Home</li>
//             <li>Shop</li>
//             <li>Product</li>
//             <li>Contact us</li>
//           </ul>

//           {/* Icons */}
//           <div className="flex justify-center md:justify-end items-center gap-4 text-[16px]">
//             <UserCircle />
//             <ShoppingIcon />
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// import React from "react";
// import Logo from "../../assets/icons/NavLogo.jsx";
// import UserCircle from "../../assets/icons/UserCircle";
// import ShoppingIcon from "../../assets/icons/ShoppingIcon";
// import SearchIcon from "../../assets/icons/SearchIcon";
// import TicketPercent from "../../assets/icons/TicketPercent.jsx";
// import CrossIcon from "../../assets/icons/CrossIcon.jsx";

// const Navbar = () => {
//   return (
//     <>
//       <div className="relative bg-[#F3F5F7] flex justify-center items-center h-[40px] text-[14px] font-semibold gap-5 text-[#141718]">
//         <TicketPercent />
//         30% off storewide — Limited time!
//         <div className="absolute right-4">
//           <CrossIcon />
//         </div>
//       </div>

//       <nav className="bg-white w-full px-4 py-4 md:py-0">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:max-w-[1120px] mx-auto gap-4">

//           <div className="flex justify-between items-center">
//             <Logo />
//           </div>

//           <div className="flex md:hidden items-center gap-2 w-full">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="border px-2 py-1 w-full rounded"
//             />
//             <button>
//               <SearchIcon />
//             </button>
//           </div>

//           <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-[16px] text-[#6C7275] font-normal">
//             <li>Home</li>
//             <li>Shop</li>
//             <li>Product</li>
//             <li>Contact us</li>
//           </ul>

//           <div className="flex justify-center md:justify-end items-center gap-4 text-[16px]">
//             <div className="hidden md:flex">
//               <button>
//                 <SearchIcon />
//               </button>
//             </div>
//             <UserCircle />
//             <ShoppingIcon />
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import Logo from "../../assets/icons/NavLogo.jsx";
// import UserCircle from "../../assets/icons/UserCircle";
// import ShoppingIcon from "../../assets/icons/ShoppingIcon";
// import SearchIcon from "../../assets/icons/SearchIcon";
// import TicketPercent from "../../assets/icons/TicketPercent.jsx";
// import CrossIcon from "../../assets/icons/CrossIcon.jsx";
// import MenuIcon from "../../assets/icons/MenuIcon.jsx";

// const Navbar = () => {
//   const [showSearch, setShowSearch] = useState(false);

//   return (
//     <>
//       <div className="relative bg-[#F3F5F7] flex justify-center items-center h-[40px] text-[14px] font-semibold gap-5 text-[#141718]">
//         <TicketPercent />
//         30% off storewide — Limited time!
//         <div className="absolute right-4">
//           <CrossIcon />
//         </div>
//       </div>

//       <nav className="bg-white w-full px-4 py-4 md:py-0">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:max-w-[1120px] mx-auto gap-4">

//           <div className="flex justify-between items-center">
//             <Logo />
//           </div>

//           <div className="flex md:hidden items-center gap-2 w-full">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="border px-2 py-1 w-full rounded"
//             />
//             <button>
//               <SearchIcon />
//             </button>
//           </div>

//           <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-[16px] text-[#6C7275] font-normal">
//             <li>Home</li>
//             <li>Shop</li>
//             <li>Product</li>
//             <li>Contact us</li>
//           </ul>

//           <div className="flex justify-center md:justify-end items-center gap-4 text-[16px]">
//             <div className="hidden md:flex items-center gap-2">
//               <button onClick={() => setShowSearch(!showSearch)}>
//                 <SearchIcon />
//               </button>

//               {showSearch && (
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="border px-2 py-1 rounded"
//                 />
//               )}
//             </div>
//             <UserCircle />
//             <ShoppingIcon />
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;





// import React, { useState } from "react";
// import Logo from "../../assets/icons/NavLogo.jsx";
// import UserCircle from "../../assets/icons/UserCircle";
// import ShoppingIcon from "../../assets/icons/ShoppingIcon";
// import SearchIcon from "../../assets/icons/SearchIcon";
// import TicketPercent from "../../assets/icons/TicketPercent.jsx";
// import CrossIcon from "../../assets/icons/CrossIcon.jsx";
// import MenuIcon from "../../assets/icons/MenuIcon.jsx";
// const Navbar = () => {
//   const [showSearch, setShowSearch] = useState(false);
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <>
//       <div className="relative bg-[#F3F5F7] flex justify-center items-center h-[40px] text-[14px] font-semibold gap-5 text-[#141718]">
//         <TicketPercent />
//         30% off storewide — Limited time!
//         <div className="absolute right-4">
//           <CrossIcon />
//         </div>
//       </div>

//       <nav className="bg-white w-full px-4 py-4 md:py-0">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:max-w-[1120px] mx-auto gap-4">
//           <div className="flex gap-5">
//             <div className="md:hidden flex items-center">
//               <button onClick={() => setShowMenu(!showMenu)}>
//                 <MenuIcon size={24} />
//               </button>
//             </div>

//             <div className="flex justify-between items-center">
//               <Logo />
//             </div>
//           </div>
//           <div
//             className={`flex flex-col md:flex-row gap-4 md:gap-10 text-[16px] text-[#6C7275] font-normal ${
//               showMenu ? "block" : "hidden"
//             } md:flex`}
//           >
//             <div className="flex gap-2 w-full justify-center md:hidden mt-4 relative">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="border px-2 py-1 w-full rounded pl-10"
//               />
//               <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
//                 <SearchIcon />
//               </button>
//             </div>

//             <ul className="flex flex-col gap-4 w-full text-center md:flex-row md:gap-10">
//               <li>Home</li>
//               <li>Shop</li>
//               <li>Product</li>
//               <li>Contact us</li>
//             </ul>

//             <div className="flex justify-center gap-4 text-[16px] w-full mt-4 md:hidden">
//               <UserCircle />
//               <ShoppingIcon />
//             </div>
//           </div>

//           <div className="hidden md:flex justify-center md:justify-end items-center gap-4 text-[16px]">
//             <div className="hidden md:flex items-center gap-2">
//               <button onClick={() => setShowSearch(!showSearch)}>
//                 <SearchIcon />
//               </button>

//               {showSearch && (
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="border px-2 py-1 rounded"
//                 />
//               )}
//             </div>
//             <div className="md:flex items-center gap-2 ">  
//             <div className="">
//             <UserCircle />
//             </div>
//             <ShoppingIcon />
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;






import React, { useState } from "react";
import Logo from "../../assets/icons/NavLogo.jsx";
import UserCircle from "../../assets/icons/UserCircle";
import ShoppingIcon from "../../assets/icons/ShoppingIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
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

      <nav className="bg-white w-full px-4 md:p-0 py-4 md:py-0 md:my-5 lg:max-w-[1100px] mx-auto">
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
            className={`flex flex-col md:flex-row gap-4 md:gap-10 text-[16px] text-[#6C7275] font-normal ${showMenu ? "block" : "hidden"} md:flex`}
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

            <ul className="flex flex-col gap-4 w-full text-center md:flex-row md:gap-10">
            <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="">Products</Link>
              <li>Contact us</li>
            </ul>

            <div className="flex justify-center gap-4 text-[16px] w-full mt-4 md:hidden">
              <UserCircle />
              <ShoppingIcon />
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
              <UserCircle />
              <ShoppingIcon />
            </div>
          </div>

          {/* <div className="flex flex-col md:hidden items-center gap-4 w-full mt-4">
            <button className="flex items-center gap-2">
              <UserCircle />
              <span>Sign In</span>
            </button>
            <button className="flex items-center gap-2">
              <ShoppingIcon />
              <span>Cart</span>
            </button>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
