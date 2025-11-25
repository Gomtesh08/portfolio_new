import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: personalInfo.github, label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: <SiLeetcode size={20} />, href: personalInfo.leetcode, label: 'LeetCode' },
    { icon: <FiMail size={20} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      {/* Modern Dark Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dark Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}></div>
        </div>

        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%2322d3ee' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}></div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute -bottom-20 left-10 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4), transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 right-10 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom py-16 relative z-10">
        {/* Animated Top Border */}
        <motion.div
          className="h-1 w-full mb-12 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.8), rgba(59, 130, 246, 0.8), transparent)',
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-black mb-4"
            >
              <motion.span
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                style={{ backgroundSize: '200% auto' }}
                animate={{
                  backgroundPosition: ['0% center', '200% center', '0% center'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {personalInfo.name}
              </motion.span>
            </motion.h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {personalInfo.role} passionate about building scalable backend solutions and clean code.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-cyan-500/30 rounded-xl hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-cyan-300 flex items-center gap-2">
              <span className="text-2xl">🔗</span> Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 10, color: '#22d3ee' }}
                    className="text-gray-400 hover:text-cyan-400 transition-all flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all"
                    />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-cyan-300 flex items-center gap-2">
              <span className="text-2xl">📞</span> Contact
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ x: 5, color: '#22d3ee' }}
                  className="hover:text-cyan-400 transition-all flex items-center gap-2"
                >
                  <span>📧</span> {personalInfo.email}
                </motion.a>
              </li>
              <li>
                <motion.a
                  href={`tel:${personalInfo.phone}`}
                  whileHover={{ x: 5, color: '#22d3ee' }}
                  className="hover:text-cyan-400 transition-all flex items-center gap-2"
                >
                  <span>📱</span> {personalInfo.phone}
                </motion.a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span> {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Animated Divider */}
        <motion.div
          className="h-0.5 w-full my-8 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.5), rgba(59, 130, 246, 0.5), transparent)',
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

        {/* Bottom Section */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-400 text-sm text-center md:text-left"
              whileHover={{ scale: 1.05 }}
            >
              © {currentYear} <span className="text-cyan-400 font-semibold">{personalInfo.name}</span>. All rights reserved.
            </motion.p>
            <motion.p
              className="text-gray-400 text-sm flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              Made with <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart className="text-red-500" />
              </motion.span> using <span className="text-cyan-400 font-semibold">React</span> & <span className="text-blue-400 font-semibold">Node.js</span>
            </motion.p>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.15, boxShadow: '0 0 40px rgba(34, 211, 238, 0.8)' }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all z-40 group overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: "spring" }}
      >
        {/* Button Shimmer */}
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

        <motion.svg
          className="w-6 h-6 relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{
            y: [-2, 2, -2],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </motion.svg>
      </motion.button>
    </footer>
  );
};

export default Footer;

