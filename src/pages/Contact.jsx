// src/pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  // State for the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // For form submission status

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can implement your form submission logic (e.g., sending data to an API or email service)
    // For demonstration, we'll just log the form data and set the success message.

    console.log(formData);
    setStatus('Form submitted successfully!'); // You can replace this with actual submission logic
    setFormData({ name: '', email: '', message: '' }); // Clear form after submission
  };

  return (
    <div className="p-8 bg-gray-900 text-white">
      <h2 className="text-3xl mb-8">Contact Me</h2>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 focus:outline-none"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <div className="mt-6 text-center text-green-500 font-semibold">
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
