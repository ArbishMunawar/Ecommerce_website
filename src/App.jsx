import { Outlet } from "react-router-dom";
import Navbar from "./ui/common/Navbar.jsx";
import Footer from "./ui/Common/Footer.jsx"
import NewsletterSection from "./ui/Sections/HomeSections/NewsLetterSection.jsx";
export default function Root() {
  return (
    <>
    <div className="layout">
      <Navbar/>
      <main >
        <Outlet/>
      </main>
      <NewsletterSection />
      <Footer />
      </div>
    </>
  );
}


// pnpx json-server --watch db.json --port 3000