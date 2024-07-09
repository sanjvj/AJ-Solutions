import { testimonials } from "../constants";
import { motion } from "framer-motion";
export const Testimonials = () => {
  return (
    <div className="">
      <motion.h2
        
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl lg:text-4xl text-center my-10 lg:my-10"
      >
        What People are saying
      </motion.h2>
      <motion.div
       
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div  whileHover={{scale:1.05}} key={index} className="w-full lg:w-1/2 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
