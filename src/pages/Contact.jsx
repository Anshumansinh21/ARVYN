import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [state, handleSubmit] = useForm("xldnqqrb"); // Replace with your actual Formspree form ID

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-[#f8f6f4] to-[#ece9e6] flex items-center justify-center text-center px-6">
        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl animate-fade-in">
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Thank You!
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Your message has been received. We'll get back to you within 24-48
            hours.
          </p>
          <a
            href="/"
            className="inline-block bg-black text-white uppercase tracking-wide px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Arvyn</title>
        <meta
          name="description"
          content="Get in touch with us for collaborations, inquiries, or just to say hello."
        />
      </Helmet>
      <div className="bg-gradient-to-b from-white via-[#f8f6f4] to-[#ece9e6] text-black min-h-screen font-sans">
        {/* Header */}
        <section className="text-center py-20 px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold uppercase mb-4 tracking-wide text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            We're always open to hearing from you. Let's connect and create
            something beautiful.
          </p>
        </section>

        {/* Form Section */}
        <section className="max-w-5xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl space-y-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-1"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Jane Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-200"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-200"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold mb-1"
              >
                Mobile Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold mb-1"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-200 bg-white"
              >
                <option value="">Select a subject</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Press">Press Inquiry</option>
                <option value="General">General Inquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Tell us everything..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800 resize-none transition duration-200"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className={`w-full bg-black text-white uppercase tracking-wide px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300 ${
                state.submitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {state.submitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8 text-gray-700">
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-black uppercase mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </h3>
              <a
                href="mailto:thearvynofficial@gmail.com"
                className="text-gray-600 hover:text-black transition duration-200"
              >
                thearvynofficial@gmail.com
              </a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-black uppercase mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Phone
              </h3>
              <a
                href="tel:+918980001815"
                className="text-gray-600 hover:text-black transition duration-200"
              >
                +91 89800 01815 | 
              </a>
              <a
                href="tel:+919726530406"
                className="text-gray-600 hover:text-black transition duration-200"
              >
                | +91 97265 30406 |
              </a>
               <a
                href="tel:+916353492283"
                className="text-gray-600 hover:text-black transition duration-200"
              >
                | +91 63534 92283
              </a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-black uppercase mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                Social Media
              </h3>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://instagram.com/thearvyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition duration-200"
                >
                  Instagram
                </a>
                <a
                  href="https://pinterest.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition duration-200"
                >
                  Pinterest
                </a>
              </div>
            </div>
            {/* <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-black uppercase mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Location
              </h3>
              <p className="text-gray-600">Ahmedabad, Nikol, India</p>
              <div className="mt-4 h-48 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6956393783624!2d72.67203457506894!3d23.00282331624685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e870b63c9b3e1%3A0xe4a0a8e9848500f2!2sNikol%2C%20Ahmedabad%2C%20Gujarat%20382050!5e0!3m2!1sen!2sin!4v1720779725365!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
