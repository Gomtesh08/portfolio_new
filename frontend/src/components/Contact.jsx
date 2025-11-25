import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <FiPhone />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <FiMapPin />, label: 'Location', value: personalInfo.location, href: null },
  ];

  const socialIcons = {
    github: <FiGithub size={24} />,
    linkedin: <FiLinkedin size={24} />,
    leetcode: <SiLeetcode size={24} />,
    email: <FiMail size={24} />,
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-black">
      {/* Modern Dark Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dark Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}></div>
        </div>

        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}></div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Modern Section Title */}
          <div className="text-center mb-16">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-2 border-cyan-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <FiMail className="text-cyan-400" size={20} />
              <span className="text-cyan-200 font-semibold">Let's Connect</span>
            </motion.div>

            <h2 className="text-6xl md:text-8xl font-black mb-6">
              <motion.span
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent relative inline-block"
                style={{ backgroundSize: '200% auto' }}
                animate={{
                  backgroundPosition: ['0% center', '200% center', '0% center'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Get In Touch

                {/* Glowing Shadow */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent blur-2xl opacity-60"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  Get In Touch
                </motion.span>
              </motion.span>
            </h2>

            <motion.div
              className="h-1.5 w-48 mx-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            />

            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-800/80 transition-all"
                  >
                    <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-200 font-semibold hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-200 font-semibold">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Connect with me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700/50 rounded-xl hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] text-gray-300 hover:text-cyan-400 transition-all"
                    >
                      {socialIcons[social.icon]}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900/95 via-gray-800/80 to-gray-900/95 border-2 border-cyan-500/30 rounded-3xl p-8 overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.3)]">
                {/* Animated Border Shimmer */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-30"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.5), transparent)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['-200% 0%', '200% 0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Floating Particles in Form */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                <div className="mb-6 relative z-10">
                  <motion.label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-bold text-cyan-300 mb-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-cyan-400">👤</span> Your Name
                  </motion.label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02, borderColor: 'rgba(34, 211, 238, 0.8)' }}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-700/50 bg-gray-800/70 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>

                <div className="mb-6 relative z-10">
                  <motion.label
                    htmlFor="email"
                    className="flex items-center gap-2 text-sm font-bold text-cyan-300 mb-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-cyan-400">📧</span> Your Email
                  </motion.label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02, borderColor: 'rgba(34, 211, 238, 0.8)' }}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-700/50 bg-gray-800/70 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="mb-6 relative z-10">
                  <motion.label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-bold text-cyan-300 mb-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-cyan-400">💬</span> Message
                  </motion.label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    whileFocus={{ scale: 1.02, borderColor: 'rgba(34, 211, 238, 0.8)' }}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-700/50 bg-gray-800/70 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all resize-none font-medium"
                    placeholder="Your message here..."
                  ></motion.textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(34, 211, 238, 0.8)' }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-full px-8 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-black text-lg rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all flex items-center justify-center gap-3 overflow-hidden group"
                >
                  {/* Button Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Rotating Icon */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="relative z-10"
                  >
                    <FiSend className="text-xl" />
                  </motion.div>

                  <span className="relative z-10">
                    Send Message
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

