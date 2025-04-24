import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-[#111] text-center py-20 px-[10%]">
      <h2 className="text-4xl text-[#ffcc70] mb-10">Contact Us</h2>
      <p className="text-gray-300 mb-5">
        Have questions or want to work with us? Feel free to reach out!
      </p>

      {/* Contact Details */}
      <div className="mb-10">
        <p className="text-gray-300 mb-2">
          Email: <a href="mailto:ic.admin@cvsu.edu.ph" className="text-[#ffcc70] hover:underline">ic.admin@cvsu.edu.ph</a>
        </p>
        <p className="text-gray-300 mb-2">
          Phone: <a href="tel:+12364370" className="text-[#ffcc70] hover:underline">0912345678</a>
        </p>
        <p className="text-gray-300">
          Follow us on <a href="#" className="text-[#ffcc70] hover:underline">LinkedIn</a> | <a href="#" className="text-[#ffcc70] hover:underline">GitHub</a>
        </p>
      </div>

      {/* Contact Form */}
      <form className="max-w-lg mx-auto">
        <div className="mb-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-[#222] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#ffcc70]"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-[#222] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#ffcc70]"
            required
          />
        </div>
        <div className="mb-5">
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 rounded-lg bg-[#222] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#ffcc70]"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#ffcc70] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#e6b85e] transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;