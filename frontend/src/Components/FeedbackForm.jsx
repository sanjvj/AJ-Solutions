import { motion } from "framer-motion";
import React, { useState } from "react";
import axios from "axios";

export function Feedbackform() {
  const [formData, setFormData] = useState({
    customerName: "",
    whatsappNumber: "",
    emailId: "",
    feedback: "", // Ensure this matches the key in your backend
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = { ...formData };

    try {
      await axios.post("http://localhost:5000/send-feedback", data);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error sending feedback", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      customerName: "",
      whatsappNumber: "",
      emailId: "",
      feedback: "",
    });
    setIsSuccess(false);
    setIsError(false);
  };

  return (
    <div>
      <h1 className="max-w-4xl mx-auto text-center font-semibold text-3xl  text-white mt-16 md:text-4xl md:leading-normal ">
        Leave your Feedback 
      </h1>
      <div className="flex items-center justify-center min-h-screen">
        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="border border-gray-300 rounded-lg p-6 shadow-lg max-w-xl w-full"
        >
          <h2 className="text-lg font-semibold mb-4">Feedback Form</h2>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="customerName"
              >
                Your Name
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
          <div className="grid grid-cols-1 gap-4 mb-4">
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
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="feedback"
            >
              Share your feedback with us
            </label>
            <textarea
              className="w-full text-black border bg-gray-200 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="feedback"
              name="feedback"
              rows="4"
              value={formData.feedback}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-full bg-purple-500 text-white rounded-md p-2 hover:bg-purple-700"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Send Feedback"}
          </motion.button>
          {isSuccess && (
            <p className="text-green-600 mt-2">Form submitted successfully!</p>
          )}
          {isError && (
            <p className="text-red-600 mt-2">
              Error submitting form. Please try again later.
            </p>
          )}
          <button
            className="mt-4 text-sm text-purple-500 underline focus:outline-none"
            type="button"
            onClick={handleReset}
          >
            Reset Form
          </button>
        </motion.form>
      </div>
    </div>
  );
}
