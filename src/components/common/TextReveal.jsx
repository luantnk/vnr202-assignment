import { useEffect } from "react";
import { useAnimationControls, motion } from "framer-motion";

const TextReveal = ({ text }) => {
  const controls = useAnimationControls();

  const textReveal = {
    hidden: {
      clipPath: "inset(0 100% 0 0)",
      opacity: 0,
    },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    controls.start("visible");
  }, []);

  return (
    <motion.div
      className="text-lg sm:text-xl md:text-2xl text-red-100 mb-8 leading-relaxed max-w-4xl mx-auto"
      initial="hidden"
      animate={controls}
      variants={textReveal}
    >
      {text}
    </motion.div>
  );
};

export default TextReveal;
