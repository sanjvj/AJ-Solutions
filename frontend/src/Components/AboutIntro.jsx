import { motion } from "framer-motion";
export function AboutIntro() {
  return (
    <div>
      <div className=" text-center flex flex-col items-center justify-center mt-20 mb-5">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          className="max-w-4xl mx-auto text-center font-semibold text-5xl  text-white mb-5 md:text-6xl lg:7xl md:leading-normal "
        >
          "Transform Your Online Presence with Our{" "}
          <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-blue-700 bg-clip-text text-transparent">
            Expert Web Solutions{" "}
          </span>
          "
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-md mx-auto text-center text-xl font-light leading-10 text-gray-300 mb-9"
        >
          - Design, Develop, and Market Your Brand to Success!.
        </motion.p>
      </div>
    </div>
  );
}
