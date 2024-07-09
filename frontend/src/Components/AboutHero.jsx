import { motion } from "framer-motion";
export function AboutHero() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-32 gap-36 mb-52">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="col-span-2 lg:col-span-1"
        >
          <img className="rounded-lg" src="aboutintro.jpeg"></img>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="col-span-2 lg:col-span-1 flex flex-col justify-center"
        >
          <h1 className="text-4xl font-semibold pb-1">About Us</h1>
          <br></br>
          <p className="font-light text-lg text-gray-300 ">
            At AJ SOLUTIONS, we are dedicated to empowering businesses through
            cutting-edge technology and customized IT solutions. As a dynamic
            and forward-thinking IT firm, we specialize in providing
            comprehensive services that optimize operations, enhance security,
            and foster innovation.
          </p>
          <br></br>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-28 gap-36 mb-52">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="col-span-2 lg:col-span-1 flex flex-col justify-center"
        >
          <h1 className="text-4xl font-semibold pb-1">
            Our Mission at AJ Solutions
          </h1>
          <br></br>
          <p className="font-light text-lg text-gray-300 ">
            At AJ SOLUTIONS, our mission is to empower businesses with advanced
            IT solutions that boost efficiency, strengthen security, and promote
            growth. We offer comprehensive services in custom software
            development, cybersecurity, cloud computing, and digital
            transformation. As a reliable partner, we navigate businesses
            through the digital landscape with dedication and excellence,
            helping them reach their objectives and succeed in the modern age.
          </p>
          <br></br>
        
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="col-span-2 lg:col-span-1"
        >
          <img className="rounded-lg" src="about2.jpeg"></img>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-32 gap-36">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="col-span-2 lg:col-span-1"
        >
          <img className="rounded-lg" src="vision.jpeg"></img>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="col-span-2 lg:col-span-1 flex flex-col justify-center"
        >
          <h1 className="text-4xl font-semibold pb-1">
            Our Vision at AJ Solutions
          </h1>
          <br></br>
          <p className="font-light text-lg text-gray-300 ">
            At AJ SOLUTIONS, our vision is to lead businesses towards
            technological excellence and innovation. We strive to be the premier
            provider of cutting-edge IT solutions, driving growth and success
            for our clients. With a relentless commitment to quality and
            customer satisfaction, we aim to transform industries and empower
            enterprises worldwide.
          </p>
          <br></br>
          <p className="font-light text-lg text-gray-300 ">
            Our vision encompasses fostering a culture of creativity,
            collaboration, and continuous improvement. We aspire to be the
            trusted partner that businesses turn to for all their technology
            needs. Together, we'll shape a future where businesses thrive in the
            digital age, powered by AJ SOLUTIONS.
          </p>
          <br></br>
        </motion.div>
      </div>
    </div>
  );
}
