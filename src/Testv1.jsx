import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: {
      opacity: 1,
      x: 600,
      transition: { type: "spring", stiffness: 2000, damping: 100 },
    },
    hidden: { opacity: 0 },
  };

  return (
    <div className="course">
      <motion.div
        className="box"
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // transition={{ duration: 2 }}
        // whileInView={{ opacity: 1, scale: 2 }}
        // drag

        variants={variants}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 2 }}
        animate={open ? "visible" : "hidden"}
      ></motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>Click</button>
    </div>
  );
};

export default Test;
