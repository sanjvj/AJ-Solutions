import { MdLocationPin } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
export function Map() {
  return (
    <div className="mx-auto max-w-4xl md:flex flex-col md:flex-row gap-10 mt-24">
      <div className="rounded-xl bg-white p-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.681598814142!2d77.79597303789545!3d9.449293540868693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cee391f85515%3A0xf563f0e2e597fc63!2s34%2C%20S%20Car%20Rd%2C%20Parasakthi%20Colony%2C%20Sivakasi%2C%20Tamil%20Nadu%20626123!5e0!3m2!1sen!2sin!4v1718622409203!5m2!1sen!2sin"
          width="450"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
      <div className="">
        <h1 className="text-3xl font-medium text-zinc-200 pt-10 md:pt-0 mb-5">
          GET IN TOUCH WITH US
        </h1>

        <div className="mt-10">
          <div className="flex gap-5 mb-5">
            <MdLocationPin className="text-5xl text-zinc-200"></MdLocationPin>
            <a
              href="https://www.google.com/maps/place/34,+S+Car+Rd,+Parasakthi+Colony,+Sivakasi,+Tamil+Nadu+626123/@9.4492935,77.795973,17z/data=!4m6!3m5!1s0x3b06cee391f85515:0xf563f0e2e597fc63!8m2!3d9.4493723!4d77.7959537!16s%2Fg%2F11p0_g3gyc?entry=ttu"
              target="blank"
            >
              <p className="text-lg font-light text-zinc-400">
                34, SOUTH CAR STREET Basement, Sivakasi, Virudhunagar, Tamil
                Nadu, 626123
              </p>
            </a>
          </div>
          <div className="flex gap-6 mb-5">
            <MdOutlinePhone className="text-2xl text-zinc-200"></MdOutlinePhone>
            <p className="text-lg font-light text-zinc-400">90255 29802</p>
          </div>
          <div className="flex gap-6 mb-5">
            <IoIosMail size={25} className="text-2xl text-zinc-200"></IoIosMail>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMGJVkCBHxRwVHQfFCdbrJvKpmKRhzXVrXfqFlCXLgLXdsPfnhBDfMHKmZMwTCLQGBlvCQ"
              target="blank"
              className="hover:underline"
            ><p className="text-lg font-light text-zinc-400">
              ajsolutionsmd@gmail.com
            </p></a>
          </div>
        </div>
      </div>
    </div>
  );
}