import React from "react";
import AboutUs from "../../Sections/HomeSections/AboutUs";
import AddressIcon from "../../../assets/icons/AddressIcon";
import EmailIcon from "../../../assets/icons/EmailIcon";
import ContactIcon from "../../../assets/icons/ContactUs";
import ServicesSection from '../../Sections/HomeSections/ServicesSection'

const ContactUs = () => {
  return (
    <>
      <div className="lg:max-w-[1120px] mx-auto p-5">
        <div>
          <h2 className="font-semibold text-3xl pr-9 pb-6 md:text-4xl md:pr-[30%]">
            We believe in sustainable decor. We’re passionate about life at home.
          </h2>
          <p className="text-md font-normal pb-8 md:pr-[20%]">
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which can be incorporated into
            any decor project. The pieces enchant for their sobriety, to last
            for generations, faithful to the shapes of each period, with a touch
            of the present.
          </p>
        </div>

        <AboutUs />

        <div className="py-7">
          <h1 className="font-semibold text-2xl text-center">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-10">
          <div className="bg-gray-100 p-6 rounded shadow">
            <div className="text-2xl mb-2 flex justify-center">
              <AddressIcon />
            </div>
            <h4 className="font-bold mb-1 text-gray-500">ADDRESS</h4>
            <p className="font-semibold">
              234 Hai Trieu, Ho Chi Minh City, <br />
              Viet Nam
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <div className="text-2xl mb-2 flex justify-center">
              <ContactIcon />
            </div>
            <h4 className="font-bold mb-1 text-gray-500">CONTACT US</h4>
            <p className="font-semibold">+84 234 567 890</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <div className="text-2xl mb-2 flex justify-center">
              <EmailIcon />
            </div>
            <h4 className="font-bold mb-1 text-gray-500">EMAIL</h4>
            <p className="font-semibold">hello@3legant.com</p>
          </div>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form className="space-y-4 w-full">
            <div>
              <label className="block mb-1 font-semibold text-sm text-gray-500">
                FULL NAME
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-400 px-4 py-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-sm text-gray-500">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border px-4 py-2 rounded border-gray-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-sm text-gray-500">
                MESSAGE
              </label>
              <textarea
                placeholder="Your message"
                className="w-full border px-4 py-2 rounded h-32 resize-none border-gray-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 px-6 rounded"
            >
              Send Message
            </button>
          </form>

          <div className="w-full h-[300px] md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.683443283368!2d72.67479447546299!3d30.160465213064406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393cdf42e978e613%3A0x876eac8feeb89753!2sZACODERS%20Education!5e0!3m2!1sen!2s!4v1746600028383!5m2!1sen!2s"
              width="100%"
              height="100%"
              className="rounded w-full h-full"
              title="Google Map"
            ></iframe>
          </div>
        </div>

      </div>
        <div className="bg-[#F3F5F7] mt-[4rem]">
          <ServicesSection/>
        </div>
    </>
  );
};

export default ContactUs;
