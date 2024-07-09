import { motion } from "framer-motion";
export function ServiceCard() {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,

              transition: {
                animate: 0.25,
                staggerChildren: 0.4,
                duration: 1.25,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
          >
            <div className="h-116 w-80">
              <img
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="./service1.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-2xl font-bold text-zinc-200">
                Web Development
              </h1>
              <p className="mb-3 text-md font-light text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Creating visually stunning and highly functional websites that
                are optimized for performance and user experience. Our web
                solutions help you establish a strong online presence.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-116 w-80">
              <img
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="./service2.jpeg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-2xl font-bold text-zinc-200">
                Software Development
              </h1>
              <p className="mb-3 text-md font-light text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Crafting bespoke software solutions tailored to meet the unique
                needs of your business. From mobile apps to enterprise systems,
                we deliver robust and scalable software products.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-116 w-80">
              <img
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="service3.jpeg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-2xl font-bold text-zinc-200">
                Cybersecurity
              </h1>
              <p className="mb-3 text-md font-light text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Protect your digital assets with our advanced cybersecurity
                solutions. We offer risk assessments, threat management, and
                security infrastructure to safeguard your business against cyber
                threats.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-116 w-80">
              <img
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="service4.jpeg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-2xl font-bold text-zinc-200">
                Mobile Application Development
              </h1>
              <p className="mb-3 text-md font-light text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Crafting bespoke software solutions tailored to meet the unique
                needs of your business. From mobile apps to enterprise systems,
                we deliver robust and scalable software products.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-116 w-80">
              <img
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="service5.jpeg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-2xl font-bold text-zinc-200">
                IT Consulting
              </h1>
              <p className="mb-3 text-md font-light text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Providing expert advice and strategic planning to help you
                navigate the complex IT landscape. Our consultants work closely
                with you to understand your goals and design solutions that
                align with your vision.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-116 w-80">
              <img
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="service6.jpeg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-2xl font-bold text-zinc-200">
                Data Analytics
              </h1>
              <p className="mb-3 text-md font-light text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Transforming data into actionable insights. Our data analytics
                services help you make informed decisions and drive business
                growth through data-driven strategies.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-116 w-80">
              <img
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="service7.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-2xl font-bold text-zinc-200">
                Web Design
              </h1>
              <p className="mb-3 text-md font-light text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Our web design services focus on creating visually stunning
                designs that reflect your ideas
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-116 w-80">
              <img
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="service8.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-2xl font-bold text-zinc-200">
                Digital Marketing
              </h1>
              <p className="mb-3 text-md font-light text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Boost your online visibility with our comprehensive SEO
                services.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-116 w-80">
              <img
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="service9.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-2xl font-bold text-zinc-200">
                E-Commerce solutions
              </h1>
              <p className="mb-3 text-md font-light text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Transform your business with a robust e-commerce platform. We
                build secure, scalable, and user-friendly online stores that
                offer a seamless shopping experience.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
