import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa"

export const SocialMedia = () => {
    
    return (
        <div className="  z-[1000]  fixed right-3 top-2/3">
             <div className="flex   justify-end flex-col gap-5 sm:gap-5">
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
    )
}