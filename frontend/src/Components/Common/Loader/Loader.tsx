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

    return () => clearTimeout(timeInterval); // Clean up on unmount
  }, [time]);

  // Variants for the sliding and opacity animations
  const sideAnimation: Variants = {
    initial: { x: "-50%", opacity: 1 }, // Start from the sides
    animate: {
      x: "0%", // Move to the center
      opacity: 0, // Fade out as they approach the center
      transition: { duration: 2, ease: "easeInOut" },
    },
    exit: { opacity: 0 },
    // Fade out when done
  };

  const rightSideAnimation = {
    initial: { x: "50%", opacity: 1 }, // Start from the right side
    animate: {
      x: "0%", // Move to the center
      opacity: 0, // Fade out as they approach the center
      transition: { duration: 2, ease: "easeInOut" },
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
        className="w-1/2 h-screen bg-[var(--primary-color)]"
      ></motion.div>

      {/* Right panel sliding in and fading */}
      <div className="w-[15rem] h-[13rem] border-[1px] border-[var(--primary-color)] rounded-full">
        <img className="w-full h-full rounded-full " src={Logo} alt="logo" />
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={rightSideAnimation}
        className="w-1/2 h-screen bg-white"
      ></motion.div>
    </div>
  ) : null;
};
