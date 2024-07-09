import React, { useState } from "react";
import { Cardgrid } from "./Cardgrid";
import { Form } from "./Form";
import { Testimonials } from "./Testimonials";
import { motion } from "framer-motion";
import { FooterAnimation } from "./FooterAnimation";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});
export function Main() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
        className=" text-2xl md:text-4xl lg:text-6xl mt-10 text-center font-normal"
      >
        Best{" "}
        <span className="bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text">
          {" "}
          Website Designing Company
        </span>{" "}
        in Coimbatore
      </motion.h1>
      <br></br>
      <motion.p
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className=" text-zinc-400 font-lg text-lg"
      >
        Welcome to AJ Solutions
      </motion.p>
      <br></br>
      <motion.p
        variants={container(1)}
        initial="hidden"
        animate="visible"
        className="text-zinc-400 font-light text-base"
      >
        At AJ Solutions, we specialize in a diverse range of digital services
        tailored to meet the dynamic needs of modern businesses. With expertise
        spanning multiple domains, we ensure your business not only survives but
        thrives in today's competitive landscape. Our focus includes crafting
        visually striking and functional websites through web designing, while
        our UI design team creates intuitive interfaces that reflect your brand
        identity.
      </motion.p>
      <br></br>
    
      <motion.p
        variants={container(1.5)}
        initial="hidden"
        animate="visible"
        className="text-zinc-400 font-light text-base pb-4"
      >
        In addition to strong web and UI design capabilities, we excel in
        developing cohesive branding strategies to enhance and establish your
        brand's market presence. Our expertise extends to building robust
        ecommerce platforms that drive sales and deliver seamless shopping
        experiences. Whether you need native or hybrid mobile applications, our
        mobile app development team delivers solutions tailored to various
        platforms and user preferences.
      </motion.p>
      
      <motion.p
        variants={container(2)}
        initial="hidden"
        animate="visible"
        className="text-zinc-400 font-light text-base pb-4"
      >
        Furthermore, we specialize in developing custom web applications that
        streamline operations and enhance efficiency, along with implementing
        strategic digital marketing campaigns to increase your online visibility
        and engage your target audience effectively. At AJ Solutions, we
        prioritize cybersecurity with robust solutions to safeguard your digital
        assets. We also harness data analytics to provide actionable insights
        that drive informed business decisions and foster growth.
      </motion.p>

      <motion.p
        variants={container(2.5)}
        initial="hidden"
        animate="visible"
        className="text-zinc-400 font-light text-base pb-4"
      >
        Committed to excellence through innovation and dedication, AJ Solutions
        is your partner in achieving digital success. Contact us today to
        explore how we can collaborate on campaigns to propel your business
        forward and turn your vision into reality.
      </motion.p>

      <hr className="w-48 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-normal"
      >
        Our{" "}
        <span className="bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text">
          Service
        </span>
      </motion.h1>
      <br></br>
      <motion.p
        
        className="text-center mb-10 text-gray-300 text-lg font-light"
      >
        With latest technology we are offering service such as Web Design, Web
        Development, Mobile App Development, Branding Designs & Digital
        Marketing
      </motion.p>

      <Cardgrid />
      <Form />

      <motion.hr
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="w-48 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700"
      ></motion.hr>

      
      <Testimonials></Testimonials>
      <FooterAnimation></FooterAnimation>
    </div>
  );
}
