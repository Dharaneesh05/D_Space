"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { RxCalendar } from "react-icons/rx";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);
  const [meetingToast, setMeetingToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    // Send email in background (don't wait for response)
    fetch('https://formsubmit.co/6d775b35ee0a7c149d0308b8bb791e08', {
      method: 'POST',
      body: formDataObj,
      headers: {
        'Accept': 'application/json'
      }
    }).catch(error => console.error('Error sending message:', error));
    
    // Show success message immediately
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
    
    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleScheduleMeeting = () => {
    window.open("https://calendly.com/dharaneeshc2006/30min", "_blank");
    setMeetingToast(true);
    setTimeout(() => setMeetingToast(false), 3000);
  };

  const recentActivity = [
    "Built an AI-powered Resume Analyzer with ATS scoring",
    "Currently exploring advanced Framer Motion & 3D UI",
    "Open to Full-Stack / AI internship opportunities",
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-16 px-5 mb-[-100px] z-20"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-[#FAFAFA] text-center mb-12"
      >
        Contact
      </motion.div>

      {/* Contact Container */}
      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Get In Touch */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start space-y-8"
          >
            {/* GET IN TOUCH */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#FAFAFA] mb-4 uppercase tracking-wide">
                GET IN TOUCH
              </h2>
              
              <p className="text-[#D4D4D8] leading-relaxed text-base font-normal">
                Open to internships, full-time roles, freelance projects, and collaborations in Full-Stack and AI development. 
                Let&apos;s build something impactful together.
              </p>
            </div>

            {/* RECENT ACTIVITY */}
            <div className="mb-12">
              <h3 className="text-xs font-semibold text-[#71717A] mb-4 uppercase tracking-widest">
                Recent Activity
              </h3>
              <div className="flex flex-col gap-3">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-[#D4D4D8] text-base font-normal group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3F3F46] mt-2 flex-shrink-0" />
                    <span className="flex-1 leading-relaxed">{activity}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="bg-[#18181B] rounded-2xl p-6 border border-[#3F3F46] relative z-30"
            >
              {/* Primary CTA - Schedule a Meeting */}
              <motion.button
                onClick={handleScheduleMeeting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-2.5 py-3 px-8 button-primary text-center cursor-pointer rounded-lg font-semibold text-sm tracking-wide mb-4"
              >
                <RxCalendar className="text-lg" />
                Schedule a Meeting
              </motion.button>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px bg-[#3F3F46]" />
                <span className="text-[#52525B] text-xs font-medium">OR</span>
                <div className="flex-1 h-px bg-[#3F3F46]" />
              </div>

              {/* Contact Form */}
              <form 
                onSubmit={handleSubmit} 
                className="flex flex-col gap-4"
              >
                {/* FormSubmit Hidden Inputs */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {/* Full Name */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full name"
                  className="w-full bg-[#18181B] border border-[#3F3F46] rounded-lg px-4 py-3 text-sm text-[#FAFAFA]
                           placeholder:text-[#52525B] focus:outline-none focus:border-[#D4D4D8]
                           transition-all duration-200"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full bg-[#18181B] border border-[#3F3F46] rounded-lg px-4 py-3 text-sm text-[#FAFAFA]
                           placeholder:text-[#52525B] focus:outline-none focus:border-[#D4D4D8]
                           transition-all duration-200"
                />

                {/* Message */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Message"
                  className="w-full bg-[#18181B] border border-[#3F3F46] rounded-lg px-4 py-3 text-sm text-[#FAFAFA]
                           placeholder:text-[#52525B] focus:outline-none focus:border-[#D4D4D8]
                           transition-all duration-200 resize-none"
                />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-3 px-8 button-primary text-center cursor-pointer rounded-lg font-semibold text-sm tracking-widest uppercase"
                >
                  SEND
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Success Toast - Message Sent */}
      {messageSent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-6 right-6 bg-[#18181B] border border-[#3F3F46] text-[#FAFAFA] px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Thanks for reaching out. I&apos;ll respond shortly.</span>
        </motion.div>
      )}

      {/* Info Toast - Meeting Scheduled */}
      {meetingToast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-6 right-6 bg-[#18181B] border border-[#3F3F46] text-[#D4D4D8] px-6 py-3 rounded-lg shadow-lg z-50"
        >
          Calendar opened in a new tab.
        </motion.div>
      )}
    </section>
  );
};
