import { motion } from "framer-motion";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});
export function ServiceHero() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-justify">
        <motion.h1 variants={container(0.5)}
        initial="hidden"
        animate="visible" className="text-zinc-200 font-bold text-xl">Welcome to Our Services</motion.h1>
        <motion.p
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="text-zinc-400 font-light text-base"
        >
          Explore our wide range of digital solutions designed to help your
          business thrive online. From cutting-edge web development to robust
          cybersecurity, we offer services that cater to all your digital needs.
        </motion.p>
        <br></br>
        

        <motion.h1 variants={container(1)}
        initial="hidden"
        animate="visible" className="text-zinc-200 font-bold text-xl">Why Choose Us?</motion.h1>
        <motion.p variants={container(1)}
        initial="hidden"
        animate="visible" className="text-zinc-400 font-light text-base">
          At AJ Solution, we combine technical expertise with creative
          innovation to deliver exceptional digital solutions. Our team of
          professionals is committed to excellence, ensuring that your business
          stands out in the digital landscape.
        </motion.p>

        <br></br>
        <motion.h1 variants={container(1.5)}
        initial="hidden"
        animate="visible" className="text-zinc-200 font-bold text-xl">Proven Results</motion.h1>

        <motion.p variants={container(1.5)}
        initial="hidden"
        animate="visible" className="text-zinc-400 font-light text-base">
          We take pride in our track record of successful projects. Our clients
          have seen significant improvements in their online presence, security,
          and overall business performance.
        </motion.p>

       <br></br> 
       <motion.h1 variants={container(2)}
        initial="hidden"
        animate="visible" className="text-zinc-200 font-bold text-xl">Explore Our Services</motion.h1>
        <motion.p variants={container(2)}
        initial="hidden"
        animate="visible" className="text-zinc-400 font-light text-base">
          Scroll down to discover how our expert team can help elevate your
          business with our comprehensive range of services.
        </motion.p><br></br><br></br><br></br>
      </div>
    </div>
  );
}
