import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-[#111] text-center py-16 px-6 sm:px-12 md:px-16 lg:px-[10%]">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#ffcc70] mb-8 sm:mb-10">Contact Us</h2>
      <p className="text-gray-300 mb-5 sm:mb-8 text-sm sm:text-base">
        Have questions or want to work with us? Feel free to reach out!
      </p>
      <div className="mb-8 sm:mb-10">
        <p className="text-gray-300 mb-2 text-sm sm:text-base">
          Email: <a href="mailto:ic.admin@cvsu.edu.ph" className="text-[#ffcc70] hover:underline">ic.admin@cvsu.edu.ph</a>
        </p>
        <p className="text-gray-300 mb-2 text-sm sm:text-base">
          Phone: <a href="tel:+12364370" className="text-[#ffcc70] hover:underline">0912345678</a>
        </p>
      </div>

      {/* Contact Form */}
      <form className="max-w-lg mx-auto bg-[#222] p-6 sm:p-8 rounded-lg shadow-lg">
        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-300 text-left mb-2 text-sm sm:text-base">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-[#333] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#ffcc70] text-sm sm:text-base"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-300 text-left mb-2 text-sm sm:text-base">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-[#333] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#ffcc70] text-sm sm:text-base"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block text-gray-300 text-left mb-2 text-sm sm:text-base">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message"
            className="w-full p-3 rounded-lg bg-[#333] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#ffcc70] text-sm sm:text-base"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#ffcc70] text-black py-3 rounded-lg font-bold hover:bg-[#e6b85e] transition text-sm sm:text-base"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
