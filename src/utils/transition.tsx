import {motion} from "framer-motion";
import type {ComponentType} from "react";

const transition = (Component: ComponentType) => {
    const WrappedComponent = () => (
        <>
            <Component />
            <motion.div
                className="fixed top-0 left-0 w-full h-full bg-primary-foreground origin-bottom z-20"
                initial={{scaleY: 0}}
                animate={{scaleY: 0}}
                exit={{scaleY: 1}}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
            />
            <motion.div
                className="fixed top-0 left-0 w-full h-full bg-primary-foreground origin-top z-20"
                initial={{scaleY: 1}}
                animate={{scaleY: 0}}
                exit={{scaleY: 0}}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
            />
        </>
    );

    WrappedComponent.displayName = `Transition(${Component.displayName || Component.name || 'Component'})`;

    return WrappedComponent;
}

export default transition;