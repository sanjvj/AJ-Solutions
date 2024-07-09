import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios';
import { RiArrowDropDownLine } from "react-icons/ri";
export function Form() {
  const [selectedService, setSelectedService] = useState("Web Development");
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    whatsappNumber: '',
    emailId: '',
    city: '',
    shortNote: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const services = [
    "Web Design",
    "Web Development",
    "Mobile App Development",
    "Branding Designs",
    "Digital Marketing",
    "Logo Design",
    "Brochure Design",
    "SEO",
  ];

  const handleSelect = (service) => {
    setSelectedService(service);
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = { ...formData, preferredService: selectedService };

    try {
      await axios.post('http://localhost:5000/send-email', data);
      setIsSuccess(true);
      setIsLoading(false);
    } catch (error) {
      console.error('Error sending email', error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      customerName: '',
      whatsappNumber: '',
      emailId: '',
      city: '',
      shortNote: ''
    });
    setSelectedService("Web Development");
    setIsSuccess(false);
    setIsError(false);
  };

  return (
    <div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <div className="grid grid-cols-12 gap-4 mt-8">
        <div className="col-span-12 lg:col-span-6 text-left">
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-xl font-semibold"
          >
            Why Choose AJ Solutions Website Design Company Coimbatore?
          </motion.h1>
          <br></br>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-gray-400 font-medium text-sm"
          >
            Customer-Centric Approach: We prioritize your needs and work
            collaboratively to ensure your success. Our solutions are designed
            with your business goals in mind.
          </motion.p>
          <br></br>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-gray-400 font-medium text-sm"
          >
            Innovative Technology: We leverage the latest technologies and
            industry best practices to deliver solutions that are not only
            effective but also future-proof.
          </motion.p>
          <br></br>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-gray-400 font-medium text-sm"
          >
            Experienced Team: Our team of IT professionals brings a wealth of
            knowledge and expertise to every project. We are committed to
            delivering excellence in everything we do.
          </motion.p>
          <br></br>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-gray-400 font-medium text-sm"
          >
            Reliability and Security: Trust and security are at the core of our
            services. We implement rigorous security measures to protect your
            data and ensure the reliability of our solutions
          </motion.p>
          <br></br>{" "}
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-gray-400 font-medium text-sm"
          >
            At AJ SOLUTIONS, we believe in the power of technology to transform
            businesses. Our mission is to help you navigate the digital
            landscape with confidence and achieve your strategic objectives.
            Partner with us to unlock the full potential of your business
            through innovative IT solutions.
          </motion.p>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <motion.form
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="border border-gray-300 rounded-lg p-6 shadow-lg"
            onSubmit={handleSubmit}
          >
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="customerName"
                >
                  Customer Name
                </label>
                <input
                  className="w-full text-black border bg-gray-200 border-slate-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="whatsappNumber"
                >
                  Whatsapp Number
                </label>
                <input
                  className="w-full text-black border bg-gray-200 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  type="text"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <motion.div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="emailId"
                >
                  Email Id
                </label>
                <input
                  className="w-full text-black border bg-gray-200 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  type="email"
                  id="emailId"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className="w-full text-black border bg-gray-200 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </motion.div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="shortNote"
              >
                Short Note
              </label>
              <textarea
                className="w-full text-black border bg-gray-200 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="shortNote"
                name="shortNote"
                rows="4"
                value={formData.shortNote}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="relative mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="preferredService"
              >
                Preferred Service
              </label>
              <button
                type="button"
                className="w-full flex justify-between text-left text-black border bg-gray-200 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedService}
                <RiArrowDropDownLine size={30} />
              </button>
              {isOpen && (
                <ul className="absolute left-0 w-full bg-gray-700 border border-gray-300 rounded-md mt-1 z-10">
                  {services.map((service) => (
                    <li
                      key={service}
                      className="p-2 cursor-pointer hover:bg-gray-100 hover:text-black"
                      onClick={() => handleSelect(service)}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-purple-500 text-white p-2 rounded-md"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </motion.button>
            {isSuccess && (
              <p className="text-green-600 mt-2">Form submitted successfully!</p>
            )}
            {isError && (
              <p className="text-red-600 mt-2">Error submitting form. Please try again later.</p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}
