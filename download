import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "Board Coaching (6-12th)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "917053353757";
    const text = `Student Name - ${formData.name}
Course - ${formData.course}
${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-12 max-w-md">
              Have questions about our courses or scheduling? reach out to us and we'll get back to you shortly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue/10 p-3 rounded-xl mt-1">
                  <Phone className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <span className="block text-gray-500 text-sm mb-1">Call Us</span>
                  <a href="tel:+919310882016" className="text-xl font-bold text-gray-900 hover:text-brand-blue transition-colors">
                    +91 9310882016
                  </a>
                  <span className="mx-2 text-gray-300">|</span>
                  <a href="tel:+917053353757" className="text-xl font-bold text-gray-900 hover:text-brand-blue transition-colors">
                    +91 7053353757
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue/10 p-3 rounded-xl mt-1">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <span className="block text-gray-500 text-sm mb-1">Visit Us</span>
                  <address className="not-italic text-lg font-bold text-gray-900 max-w-xs">
                    BR Complex Sirsa
                  </address>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue/10 p-3 rounded-xl mt-1">
                  <Mail className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <span className="block text-gray-500 text-sm mb-1">Email Us</span>
                  <a href="mailto:sharmajugendra5@gmail.com" className="text-lg font-bold text-gray-900 hover:text-brand-blue transition-colors">
                    sharmajugendra5@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 relative"
          >
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">FullName</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-hidden focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">PhoneNumber</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-hidden focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <select 
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-hidden focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                >
                  <option>Board Coaching (6-12th)</option>
                  <option>English Speaking Course</option>
                  <option>Career Guidance</option>
                  <option>Other Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-hidden focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-blue text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-opacity-90 hover:shadow-lg transition-all"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-yellow/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
