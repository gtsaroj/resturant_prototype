import { useTranslation } from "react-i18next";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import ReactLoading from "react-loading";
import { useSuscribeFn } from "../../Hook/useSuscribe";

export const Inquiry = () => {
  const { t } = useTranslation();
  const { isLoading, mutate, setEmail, email } = useSuscribeFn();
  const { title, button } = t("inquiry") as any;

  return (
    <div className="flex flex-col-reverse items-start w-full h-full gap-10 py-10  lg:flex-row">
      {/* Google Map iframe */}
      <div className="relative  w-full   lg:w-[55%] h-[250px] cursor-pointer lg:h-[400px] rounded-lg overflow-hidden">
        <div className="absolute  h-[100px] bottom-0 left-0   w-full  bg-gradient-to-t from-black to-transparent"></div>

        <iframe
          allowFullScreen={true}
          className="w-full h-full transition-all duration-500 transform rounded-lg hover:scale-105"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.897405829733!2d85.33158407477636!3d27.689059176193012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e99b7e259f%3A0xe77e0b6b366f6c1c!2sDailo%20Daily%20See%20Us!5e1!3m2!1sen!2snp!4v1731576014026!5m2!1sen!2snp"
          title="Restaurant Location"
        ></iframe>
      </div>

      {/* Inquiry Form Section */}
      <div className="w-full lg:w-[40%]  h-full   flex flex-col items-center justify-start gap-6 sm:gap-14 text-center">
        <div className="flex flex-col items-center justify-center w-full gap-9">
          <h1 className="sm:text-3xl text-2xl font-semibold tracking-wider text-[var(--primary-text)]">
            {title}
          </h1>

          {/* Social Media Links */}
          <div className="flex justify-center gap-10 sm:gap-14">
            <a
              target="_blank"
              className="bg-[#0078FF] p-4 rounded-full transition-colors duration-300 text-white hover:bg-[#0061D1] "
              href="https://www.messenger.com/t/100032742726174/"
              rel="noopener noreferrer"
            >
              <FaFacebookMessenger className="text-xl sm:text-2xl" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/9779848255044`}
              className="bg-[#1a9e30] p-4 rounded-full transition-colors duration-300 text-white hover:bg-[#128c3b] "
            >
              <FaWhatsapp className="text-xl sm:text-2xl" />
            </a>
          </div>
        </div>

        {/* Subscription Form */}
        <form
          onSubmit={mutate}
          className="flex sm:flex-row flex-col  text-[var(--primary-text)] lg:flex-row items-center justify-center gap-2 sm:gap-4 w-full mt-8"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="from_email"
            required
            id="subscribe"
            type="email"
            placeholder="eg. abc@gmail.com"
            className="w-full  lg:w-[70%] sm:p-4 p-2 rounded-lg border-2 border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          />
          <button
            value={"Send"}
            type="submit"
            className="sm:w-[30%] w-full text-white  p-[0.6rem] sm:py-[1.1rem] rounded-lg  lg:mt-0"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                {button}{" "}
                <ReactLoading
                  type="spin"
                  width={"28px"}
                  height={"28px"}
                  color={"white"}
                />
              </div>
            ) : (
              button
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
