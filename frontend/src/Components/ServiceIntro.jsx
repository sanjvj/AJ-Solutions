import {motion} from "framer-motion";
export function ServiceIntro(){
    return <div>
        <div className=" text-center flex flex-col items-center justify-center mb-5">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          className="max-w-4xl mx-auto text-center font-semibold text-5xl  text-white mb-5 md:text-6xl lg:7xl md:leading-normal "
        >
          Our {""}
          <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-blue-700 bg-clip-text text-transparent">
             Services
          </span>
          
        </motion.h1></div>
    </div>
}