import { motion, useReducedMotion } from "framer-motion";
import type { ComponentType } from "react";

const transition = (Component: ComponentType) => {
  const Wrapped = () => {
    const shouldReduce = useReducedMotion();

    if (shouldReduce) {
      return <Component />;
    }

    return (
      <>
        <Component />
        <motion.div
          className="pointer-events-none fixed inset-0 z-20 origin-bottom bg-[#072416]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="pointer-events-none fixed inset-0 z-20 origin-top bg-[#072416]"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
  };

  Wrapped.displayName = `Transition(${Component.displayName || Component.name || "Component"})`;
  return Wrapped;
};

export default transition;
