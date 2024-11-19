import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { LoaderTypes } from "../../../types/loader.types";
import Logo from "../../../assets/logo/pingputali.jpg";

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
    exit: { opacity: 0, },
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
    <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-between">
      {/* Left panel sliding in and fading */}
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={sideAnimation}
        className="w-1/2 h-screen bg-gradient-to-l from-purple-400 to-[var(--primary-color)]   "
      ></motion.div>
      <div className="sm:w-[8rem] w-[7.7rem] h-[6rem] sm:h-[7.7rem] border-[5px] border-[var(--primary-color)] rounded-full flex items-center justify-center">
        <motion.img
          className="w-full h-full rounded-full"
          
          src={Logo}
          alt="logo"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear",bounce : 1, }}
        />
      </div>

      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={rightSideAnimation}
        className="w-1/2 h-screen bg-gradient-to-l from-[var(--secondary-color)] to-blue-400 "
      ></motion.div>
    </div>
  ) : null;
};
