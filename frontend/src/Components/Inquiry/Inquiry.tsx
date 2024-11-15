import { FaFacebookMessenger, FaWhatsapp, FaViber } from "react-icons/fa";

export const Inquiry = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between py-16 px-6 lg:px-16 ">
      {/* Google Map iframe */}
      <div className="relative w-full lg:w-[55%] h-[250px] lg:h-[400px] rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full rounded-lg transform transition-all duration-500 hover:scale-105"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.897405829733!2d85.33158407477636!3d27.689059176193012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e99b7e259f%3A0xe77e0b6b366f6c1c!2sDailo%20Daily%20See%20Us!5e1!3m2!1sen!2snp!4v1731576014026!5m2!1sen!2snp"
          title="Restaurant Location"
        ></iframe>
      </div>

      {/* Inquiry Form Section */}
      <div className="w-full lg:w-[40%] mt-8 lg:mt-0 flex flex-col items-center justify-start gap-6 text-center">
        <h1 className="text-[28px] sm:text-[32px] font-semibold tracking-wide text-[var(--primary-text)]">
          Do you have an inquiry?
        </h1>

        {/* Social Media Links */}
        <div className="flex gap-6 justify-center mt-4">
          <a
            className="bg-[var(--primary-color)] p-4 rounded-full transition-colors duration-300 text-white hover:bg-[var(--primary-dark)]"
            href="#"
          >
            <FaFacebookMessenger className="text-3xl" />
          </a>
          <a
            className="bg-[var(--primary-color)] p-4 rounded-full transition-colors duration-300 text-white hover:bg-[var(--primary-dark)]"
            href="#"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
          <a
            className="bg-[var(--primary-color)] p-4 rounded-full transition-colors duration-300 text-white hover:bg-[var(--primary-dark)]"
            href="#"
          >
            <FaViber className="text-3xl" />
          </a>
        </div>

        {/* Subscription Form */}
        <form className="flex flex-col text-[var(--primary-text)] lg:flex-row items-center justify-center gap-4 w-full mt-8">
          <input
            id="subscribe"
            type="email"
            placeholder="Enter your email..."
            className="w-full  lg:w-[70%] p-4 rounded-lg border-2 border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          />
          <button
            type="submit"
            className="w-full lg:w-[30%] text-white py-4 rounded-lg mt-4 lg:mt-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
