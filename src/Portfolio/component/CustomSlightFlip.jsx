import { AnimatePresence, motion } from "framer-motion";

export function SlightFlip({ text, className, style, animate, initial }) {
  const variants1 = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  };

  return (
    <div className={`flex space-x-2 justify-center ${className}`} style={style}>
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={initial}
            animate={animate}
            exit="hidden"
            variants={variants1}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center font-display tracking-[-0.02em] drop-shadow-sm"
            style={{ transformOrigin: "50% 50%", ...style }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
