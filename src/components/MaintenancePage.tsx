import {motion} from "framer-motion";

export const MaintenancePage = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                className="max-w-md w-full space-y-8 text-center"
            >
                {/* Icon */}
                <motion.div
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{delay: 0.2, type: "spring", stiffness: 200}}
                    className="flex justify-center"
                >
                    <div className="rounded-full bg-green-100 p-6">
                        <motion.svg
                            animate={{rotate: 360}}
                            transition={{duration: 20, repeat: Infinity, ease: "linear"}}
                            className="h-16 w-16 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </motion.svg>
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.3, duration: 0.6}}
                    className="space-y-3"
                >
                    <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                        We'll be back soon!
                    </h1>
                    <p className="text-lg text-gray-600">
                        We're currently performing scheduled maintenance to improve your experience.
                    </p>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.4, duration: 0.6}}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4"
                >
                    <div className="flex items-start space-x-3">
                        <svg
                            className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <div className="text-left">
                            <p className="text-sm font-medium text-gray-900">
                                Expected duration
                            </p>
                            <p className="text-sm text-gray-600">
                                We're working as quickly as possible
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3">
                        <svg
                            className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <div className="text-left">
                            <p className="text-sm font-medium text-gray-900">
                                What's happening?
                            </p>
                            <p className="text-sm text-gray-600">
                                We're upgrading our systems to serve you better
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Contact */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.5, duration: 0.6}}
                    className="pt-4"
                >
                    <p className="text-sm text-gray-500">
                        Need immediate assistance?{' '}

                        <a href="mailto:support@yourcompany.com" className="font-medium text-green-600 hover:text-green-500 transition-colors">
                            Contact support
                        </a>
                    </p>
                </motion.div>

                {/* Progress Animation */}
                <motion.div
                    initial={{opacity: 0, scaleX: 0}}
                    animate={{opacity: 1, scaleX: 1}}
                    transition={{delay: 0.6, duration: 0.8}}
                    className="pt-2"
                >
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                            initial={{width: "0%"}}
                            animate={{width: "60%"}}
                            transition={{delay: 0.8, duration: 1.5, ease: "easeOut"}}
                            className="bg-green-600 h-2 rounded-full"
                        >
                            <motion.div
                                animate={{opacity: [0.5, 1, 0.5]}}
                                transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
                                className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}