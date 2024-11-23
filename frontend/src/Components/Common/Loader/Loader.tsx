import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { LoaderTypes } from "../../../types/loader.types";
import Logo from "../../../assets/loaderLogo.png";

export const Loader: React.FC<LoaderTypes> = ({ time }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timeInterval = setTimeout(() => {
      setIsAnimating(false);
    }, time);

    return () => clearTimeout(timeInterval);
  }, [time]);

  // Variants for the sliding and opacity animations
  const sideAnimation: Variants = {
    initial: { x: "0%", opacity: 0.8 }, // Start from the sides
    animate: {
      x: "-50%", // Move to the left
      opacity: 0.1, // Fade out as they approach the center
      transition: { duration: Number(time) / 1000, ease: "easeInOut" },
    },
    exit: { opacity: 0 },
    // Fade out when done
  };

  const rightSideAnimation: Variants = {
    initial: { x: "0%", opacity: 0.8 }, // Start from the right side
    animate: {
      x: "50%", // Move to the center
      opacity: 0.1, // Fade out as they approach the center
      transition: { duration: Number(time) / 1000, ease: "easeInOut" },
    },
    exit: { opacity: 0 }, // Fade out when done
  };

  return isAnimating ? (
    <div className="w-screen bg-white h-screen fixed top-0 bottom-0 left-0 flex items-center justify-between">
      {/* Left panel sliding in and fading */}
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={sideAnimation}
        // change from-[var(--primary-color)]
        className="w-1/2 relative flex justify-end h-screen bg-gradient-to-l from-transparent to-[var(--primary-dark)]   "
      >
        {/* <div
       className={`w-1/2   absolute bg-gradient-to-l from-white  sm:rounded-l-full to-transparent h-screen`}
     ></div> */}
      </motion.div>

      <div className=" sm:w-[13rem] w-[10rem]  mb-24 sm:mb-0  flex items-center justify-center">
        <motion.img
          className="w-full h-full rounded-full"
          src={Logo}
          alt="logo"
          animate={{ rotate: 360, scale: [1, 1.5] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={rightSideAnimation}
        // change to-blue-500
        className="w-1/2 flex relative justify-start h-screen bg-gradient-to-l from-[var(--secondary-color)] to-transparent "
      >
        {/* <div
       className={`w-1/2   absolute bg-gradient-to-l from-transparent  sm:rounded-r-full to-white h-screen`}
     ></div> */}
      </motion.div>
    </div>
  ) : null;
};
