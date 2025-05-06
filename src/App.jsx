import { Outlet } from "react-router-dom";
import Navbar from "./ui/common/Navbar.jsx";
import Footer from "./ui/Common/Footer.jsx"
import NewsletterSection from "./ui/Sections/HomeSections/NewsLetterSection.jsx";
import { useState } from "react";
export default function Root() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };
  
  return (
    <>
    <div className="layout">
      <Navbar/>
      <main >
      <Outlet context={{ cartItems, addToCart,setCartItems }} />
      </main>
      <NewsletterSection />
      <Footer />
      </div>
    </>
  );
}


// pnpx json-server --watch db.json --port 3000