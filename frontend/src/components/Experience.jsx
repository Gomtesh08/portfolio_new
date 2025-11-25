import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCheckCircle, FiZap, FiCpu } from 'react-icons/fi';
import { experience } from '../data/portfolioData';

// Plane SVG Component
const PlaneSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="planeBody" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="planeWindow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#dbeafe" />
        <stop offset="100%" stopColor="#93c5fd" />
      </linearGradient>
      <filter id="planeGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Plane Body (Fuselage) */}
    <ellipse cx="100" cy="50" rx="60" ry="12" fill="url(#planeBody)" filter="url(#planeGlow)" />

    {/* Plane Nose */}
    <path d="M160 50 L180 48 L180 52 Z" fill="#1d4ed8" filter="url(#planeGlow)" />

    {/* Main Wings */}
    <path d="M90 50 L70 30 L75 50 L70 70 L90 50 Z" fill="#60a5fa" filter="url(#planeGlow)" />
    <path d="M90 50 L70 35 L72 50 L70 65 L90 50 Z" fill="#3b82f6" opacity="0.8" />

    {/* Tail Wing */}
    <path d="M45 50 L30 35 L35 50 L30 65 L45 50 Z" fill="#60a5fa" filter="url(#planeGlow)" />

    {/* Vertical Stabilizer (Tail Fin) */}
    <path d="M40 50 L35 30 L45 50 Z" fill="#93c5fd" filter="url(#planeGlow)" />

    {/* Windows */}
    <circle cx="120" cy="50" r="4" fill="url(#planeWindow)" opacity="0.9" />
    <circle cx="110" cy="50" r="4" fill="url(#planeWindow)" opacity="0.9" />
    <circle cx="100" cy="50" r="4" fill="url(#planeWindow)" opacity="0.9" />
    <circle cx="90" cy="50" r="4" fill="url(#planeWindow)" opacity="0.9" />
    <circle cx="80" cy="50" r="4" fill="url(#planeWindow)" opacity="0.9" />

    {/* Cockpit Window */}
    <ellipse cx="155" cy="50" rx="8" ry="5" fill="url(#planeWindow)" filter="url(#planeGlow)" />

    {/* Engine Glow */}
    <circle cx="175" cy="50" r="6" fill="#60a5fa" opacity="0.6" filter="url(#planeGlow)">
      <animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1s" repeatCount="indefinite" />
    </circle>

    {/* Contrail/Vapor Trail */}
    <path d="M40 50 L10 48 L10 52 Z" fill="#93c5fd" opacity="0.3" filter="url(#planeGlow)">
      <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
    </path>
  </svg>
);

const Experience = () => {
  const visa2flyRef = useRef(null);
  const infosysRef = useRef(null);
  const timelineRef = useRef(null);
  const isVisa2flyInView = useInView(visa2flyRef, { once: true, margin: "-100px" });
  const isInfosysInView = useInView(infosysRef, { once: true, margin: "-100px" });
  const isTimelineInView = useInView(timelineRef, { once: false, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      rotateX: -90,
      rotateY: 45,
      z: -500,
      filter: "blur(20px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      z: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.34, 1.56, 0.64, 1],
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
  };

  // Plane animation for Visa2Fly - Enhanced with Curved Path
  const planeVariants = {
    hidden: {
      x: -800,
      y: 200,
      opacity: 0,
      rotate: -45,
      scale: 0.3,
      filter: "blur(20px)"
    },
    visible: {
      // Curved path: start far left-bottom, arc up and right, then settle
      x: [-800, -400, -100, 50, 20, 0],
      y: [200, 100, -20, -40, 10, 0],
      opacity: [0, 0.5, 1, 1, 1, 1],
      rotate: [-45, -20, 5, 15, -5, 0],
      scale: [0.3, 0.8, 1.2, 1.3, 0.95, 1],
      filter: ["blur(20px)", "blur(10px)", "blur(0px)", "blur(0px)", "blur(0px)", "blur(0px)"],
      transition: {
        duration: 4,
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.5,
        times: [0, 0.25, 0.5, 0.7, 0.85, 1]
      }
    }
  };

  // Visa stamp animation - Enhanced with Bounce
  const stampVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0,
      y: -300,
      x: 150,
      filter: "blur(20px)"
    },
    visible: {
      scale: [0, 2, 0.7, 1.3, 0.9, 1.05, 0.98, 1],
      rotate: [-180, -45, -25, -15, -12, -10, -12, -12],
      opacity: [0, 0.6, 0.9, 1, 1, 1, 1, 1],
      y: [-300, -50, 30, -5, 10, -2, 2, 0],
      x: [150, 50, 10, -5, 5, 0, 0, 0],
      filter: ["blur(20px)", "blur(8px)", "blur(3px)", "blur(0px)", "blur(0px)", "blur(0px)", "blur(0px)", "blur(0px)"],
      transition: {
        duration: 2.5,
        ease: [0.34, 1.56, 0.64, 1],
        delay: 4,
        times: [0, 0.2, 0.4, 0.55, 0.7, 0.82, 0.92, 1]
      }
    }
  };

  // Enhanced particle effect animation
  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: [0, 1, 0.8, 0],
      scale: [0, 1.5, 1, 0],
      x: [0, (Math.random() - 0.5) * 150],
      y: [0, (Math.random() - 0.5) * 150],
      rotate: [0, Math.random() * 360],
      transition: {
        duration: 2.5,
        delay: i * 0.08,
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-black">

      {/* Dark Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'gridMove 30s linear infinite'
        }}></div>
      </div>

      {/* Hexagon Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }}></div>

      {/* Dark Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, 150, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, -150, 0],
          y: [0, 80, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title - Dark & Crazy */}
          <div className="text-center mb-20 relative">
            {/* Glitch Effect Background */}
            <motion.div
              className="absolute inset-0 -z-10 flex items-center justify-center"
              animate={{
                opacity: [0, 0.15, 0, 0.15, 0],
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatDelay: 4,
              }}
            >
              <div className="text-5xl md:text-7xl font-black text-cyan-500/30 blur-md">
                Work Experience
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.3, y: -50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="inline-flex items-center gap-4 mb-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-2 border-cyan-500/30 relative overflow-hidden"
            >
              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.4), transparent)',
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['-200% 0%', '200% 0%'],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FiZap className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,1)] relative z-10" size={28} />
              </motion.div>
              <span className="text-cyan-300 font-black tracking-widest uppercase text-sm relative z-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
                Career Journey
              </span>
              <motion.div
                animate={{
                  rotate: [0, -360],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FiCpu className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,1)] relative z-10" size={28} />
              </motion.div>
            </motion.div>

            <motion.h2
              className="text-6xl md:text-8xl font-black mb-10 relative"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.2,
                type: "spring",
                stiffness: 120
              }}
            >
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
                Work Experience

                {/* Glowing Text Shadow */}
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
                  Work Experience
                </motion.span>
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Building <span className="text-cyan-400 font-semibold drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">innovative solutions</span> and driving{' '}
              <span className="text-purple-400 font-semibold drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">technological excellence</span>
            </motion.p>

            {/* Decorative Line with Animated Particles */}
            <motion.div
              className="flex items-center justify-center gap-6 relative"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                className="h-0.5 w-32 bg-gradient-to-r from-transparent via-cyan-500 to-blue-500 relative rounded-full"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  boxShadow: [
                    '0 0 5px rgba(34, 211, 238, 0.5)',
                    '0 0 20px rgba(34, 211, 238, 1)',
                    '0 0 5px rgba(34, 211, 238, 0.5)',
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {/* Moving Particle */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]"
                  animate={{
                    x: [0, 128, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity },
                }}
              >
                <FiCpu className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,1)]" size={32} />
              </motion.div>

              <motion.div
                className="h-0.5 w-32 bg-gradient-to-l from-transparent via-purple-500 to-pink-500 relative rounded-full"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  boxShadow: [
                    '0 0 5px rgba(168, 85, 247, 0.5)',
                    '0 0 20px rgba(168, 85, 247, 1)',
                    '0 0 5px rgba(168, 85, 247, 0.5)',
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {/* Moving Particle */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,1)]"
                  animate={{
                    x: [128, 0, 128],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline - Futuristic */}
          <motion.div
            ref={timelineRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative">
              {/* Animated Vertical Line with Glow */}
              <motion.div
                className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              >
                <div className="w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>

                {/* Flowing Light Trails */}
                <motion.div
                  className="absolute top-0 left-1/2 w-2 h-20 -translate-x-1/2 rounded-full"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.5), transparent)',
                    filter: 'blur(4px)',
                  }}
                  animate={{
                    y: [0, 800, 0],
                    opacity: [0, 1, 0.8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Second Light Trail (delayed) */}
                <motion.div
                  className="absolute top-0 left-1/2 w-2 h-20 -translate-x-1/2 rounded-full"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(236, 72, 153, 0.9), rgba(168, 85, 247, 0.5), transparent)',
                    filter: 'blur(4px)',
                  }}
                  animate={{
                    y: [0, 800, 0],
                    opacity: [0, 1, 0.8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2,
                  }}
                />
              </motion.div>

              {/* Traveling Orb Animation */}
              {isTimelineInView && (
                <motion.div
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-30 pointer-events-none"
                  initial={{ y: 0 }}
                  animate={{
                    y: [0, 400, 800],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Outer Glow */}
                  <motion.div
                    className="absolute inset-0 w-8 h-8 -translate-x-3 -translate-y-3 rounded-full bg-cyan-400/30"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Middle Glow */}
                  <motion.div
                    className="absolute inset-0 w-6 h-6 -translate-x-2 -translate-y-2 rounded-full bg-blue-400/50"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 0.3, 0.7],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Core Orb */}
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

                  {/* Trailing Particles */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                      animate={{
                        y: [-10 * (i + 1), -10 * (i + 1) - 20],
                        opacity: [0.8, 0],
                        scale: [1, 0.5],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </motion.div>
              )}

              {experience.map((exp, index) => {
                const isVisa2Fly = exp.company === "Visa2Fly";
                const isInfosys = exp.company === "Infosys";
                const isInternship = exp.type === "Internship";

                return (
                  <motion.div
                    key={exp.id}
                    ref={isVisa2Fly && exp.current ? visa2flyRef : isInfosys ? infosysRef : null}
                    variants={itemVariants}
                    onHoverStart={() => setHoveredCard(exp.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className={`relative mb-16 ${
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'
                    } md:w-1/2`}
                  >
                    {/* Animated Plane for Visa2Fly - Enhanced */}
                    {isVisa2Fly && (
                      <>
                        <motion.div
                          variants={planeVariants}
                          initial="hidden"
                          animate={isVisa2flyInView ? "visible" : "hidden"}
                          className="absolute -top-20 left-0 md:left-10 z-30 pointer-events-none"
                        >
                          <motion.div
                            animate={{
                              y: [0, -10, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <PlaneSVG className="w-32 h-16 md:w-48 md:h-24 drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]" />
                          </motion.div>
                        </motion.div>

                        {/* Enhanced Particle Trail for Plane */}
                        {isVisa2flyInView && [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                          <motion.div
                            key={i}
                            custom={i}
                            variants={particleVariants}
                            initial="hidden"
                            animate="visible"
                            className={`absolute -top-16 left-0 rounded-full ${
                              i % 4 === 0 ? 'w-3 h-3 bg-blue-400' :
                              i % 4 === 1 ? 'w-2 h-2 bg-cyan-400' :
                              i % 4 === 2 ? 'w-2.5 h-2.5 bg-purple-400' :
                              'w-1.5 h-1.5 bg-pink-400'
                            }`}
                            style={{
                              left: `${i * 12}px`,
                              filter: 'blur(1px)',
                              boxShadow: '0 0 15px currentColor'
                            }}
                          />
                        ))}

                        {/* Stamp Impact Sparks */}
                        {isVisa2flyInView && [0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                          <motion.div
                            key={`spark-${i}`}
                            className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-400"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 1.5, 0],
                              x: [0, Math.cos((i * Math.PI) / 4) * 60],
                              y: [0, Math.sin((i * Math.PI) / 4) * 60],
                            }}
                            transition={{
                              duration: 1.5,
                              delay: 4.5 + (i * 0.05),
                              ease: "easeOut",
                            }}
                            style={{
                              filter: 'blur(1px)',
                              boxShadow: '0 0 10px rgba(248, 113, 113, 0.8)',
                            }}
                          />
                        ))}
                      </>
                    )}

                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Futuristic Timeline Dot with Pulse */}
                      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 z-20">
                        <motion.div
                          whileHover={{ scale: 1.5 }}
                          className="relative"
                        >
                          {/* Outer Glow Ring */}
                          <motion.div
                            className={`absolute inset-0 w-6 h-6 -translate-x-1 -translate-y-1 rounded-full ${
                              exp.current
                                ? 'bg-green-400/30'
                                : 'bg-blue-400/30'
                            }`}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          {/* Inner Dot */}
                          <div className={`w-4 h-4 rounded-full ${
                            exp.current
                              ? 'bg-gradient-to-r from-green-400 to-emerald-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]'
                              : 'bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_20px_rgba(99,102,241,0.8)]'
                          } border-2 border-white/50`}></div>
                        </motion.div>
                      </div>

                      {/* Redesigned Modern Card */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 100,
                          rotateX: -30,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.2,
                          type: "spring",
                          stiffness: 100,
                          damping: 20
                        }}
                        whileHover={{
                          y: -10,
                          scale: 1.03,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }
                        }}
                        className={`relative ml-16 md:ml-0 flex-1 ${
                          index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                        } ${isVisa2Fly && exp.current ? 'overflow-visible' : ''}`}
                        style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
                      >
                        {/* Modern Card Background - Solid Dark */}
                        <motion.div
                          className={`relative bg-gradient-to-br ${
                            isVisa2Fly && exp.current
                              ? 'from-neutral-950 via-zinc-950 to-stone-950'
                              : isInfosys
                              ? 'from-neutral-900 via-zinc-900 to-gray-900'
                              : 'from-gray-900 via-neutral-900 to-slate-900'
                          } border ${
                            isVisa2Fly && exp.current
                              ? 'border-gray-800/30'
                              : isInfosys
                              ? 'border-orange-800/30'
                              : 'border-purple-800/30'
                          } rounded-2xl p-8 md:p-10 transition-all duration-500 overflow-hidden group shadow-2xl`}
                          animate={hoveredCard === exp.id ? {
                            boxShadow: [
                              isVisa2Fly && exp.current
                                ? '0 0 30px rgba(16,185,129,0.2), 0 0 50px rgba(16,185,129,0.1)'
                                : isInfosys
                                ? '0 0 30px rgba(249,115,22,0.2), 0 0 50px rgba(249,115,22,0.1)'
                                : '0 0 30px rgba(168,85,247,0.2), 0 0 50px rgba(168,85,247,0.1)',
                              isVisa2Fly && exp.current
                                ? '0 0 40px rgba(20,184,166,0.3), 0 0 60px rgba(20,184,166,0.15)'
                                : isInfosys
                                ? '0 0 40px rgba(251,146,60,0.3), 0 0 60px rgba(251,146,60,0.15)'
                                : '0 0 40px rgba(192,132,252,0.3), 0 0 60px rgba(192,132,252,0.15)',
                            ],
                          } : {
                            boxShadow: [
                              '0 10px 40px rgba(0,0,0,0.7)',
                              isVisa2Fly && exp.current
                                ? '0 15px 50px rgba(16,185,129,0.15)'
                                : isInfosys
                                ? '0 15px 50px rgba(249,115,22,0.15)'
                                : '0 15px 50px rgba(168,85,247,0.15)',
                              '0 10px 40px rgba(0,0,0,0.7)',
                            ]
                          }}
                          transition={{
                            boxShadow: {
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          {/* Subtle Diagonal Light Sweep */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl"
                            initial={{ x: '-200%', y: '-200%' }}
                            whileInView={{ x: '200%', y: '200%' }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 2,
                              delay: 0.3,
                              ease: "easeOut",
                            }}
                            style={{
                              background: isVisa2Fly && exp.current
                                ? 'linear-gradient(135deg, transparent 40%, rgba(16, 185, 129, 0.15) 50%, transparent 60%)'
                                : isInfosys
                                ? 'linear-gradient(135deg, transparent 40%, rgba(249, 115, 22, 0.15) 50%, transparent 60%)'
                                : 'linear-gradient(135deg, transparent 40%, rgba(168, 85, 247, 0.15) 50%, transparent 60%)',
                              width: '100%',
                              height: '100%',
                            }}
                          />

                          {/* Subtle Pulsing Glow Effect */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl"
                            animate={{
                              opacity: [0.05, 0.15, 0.05],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            style={{
                              background: isVisa2Fly && exp.current
                                ? 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1), transparent 70%)'
                                : isInfosys
                                ? 'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.1), transparent 70%)'
                                : 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1), transparent 70%)',
                            }}
                          />

                          {/* Subtle Animated Border Gradient */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl opacity-40"
                            style={{
                              background: isVisa2Fly && exp.current
                                ? 'linear-gradient(90deg, rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.2), rgba(16, 185, 129, 0.2))'
                                : isInfosys
                                ? 'linear-gradient(90deg, rgba(249, 115, 22, 0.2), rgba(251, 146, 60, 0.2), rgba(249, 115, 22, 0.2))'
                                : 'linear-gradient(90deg, rgba(168, 85, 247, 0.2), rgba(192, 132, 252, 0.2), rgba(168, 85, 247, 0.2))',
                              backgroundSize: '200% 100%',
                              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                              WebkitMaskComposite: 'xor',
                              maskComposite: 'exclude',
                              padding: '1px',
                            }}
                            animate={{
                              backgroundPosition: ['0% 0%', '200% 0%'],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />

                          {/* Subtle Hover Glow Effect */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                              background: isVisa2Fly && exp.current
                                ? `radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08), transparent 70%)`
                                : isInfosys
                                ? `radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.08), transparent 70%)`
                                : `radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.08), transparent 70%)`,
                            }}
                          />

                          {/* Subtle Floating Particles */}
                          {[0, 1, 2, 3, 4].map((i) => (
                            <motion.div
                              key={`card-particle-${i}`}
                              className={`absolute rounded-full ${
                                i % 2 === 0 ? 'w-0.5 h-0.5' : 'w-1 h-1'
                              } ${
                                isVisa2Fly && exp.current
                                  ? 'bg-emerald-600/40'
                                  : isInfosys
                                  ? 'bg-orange-600/40'
                                  : 'bg-purple-600/40'
                              }`}
                              style={{
                                left: `${15 + i * 20}%`,
                                top: `${30 + (i * 10) % 50}%`,
                                filter: 'blur(1px)',
                              }}
                              animate={{
                                y: [0, -30, 0],
                                x: [0, Math.sin(i) * 15, 0],
                                opacity: [0.1, 0.4, 0.1],
                                scale: [0.5, 1.2, 0.5],
                              }}
                              transition={{
                                duration: 4 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut",
                              }}
                            />
                          ))}

                          {/* Subtle Sparkle Effect on Hover */}
                          {hoveredCard === exp.id && [0, 1, 2].map((i) => (
                            <motion.div
                              key={`sparkle-${i}`}
                              className="absolute w-1.5 h-1.5"
                              style={{
                                left: `${30 + i * 25}%`,
                                top: `${30 + i * 20}%`,
                              }}
                              initial={{ scale: 0, rotate: 0 }}
                              animate={{
                                scale: [0, 1, 0],
                                rotate: [0, 180, 360],
                                opacity: [0, 0.5, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            >
                              <div className={`w-full h-full ${
                                isVisa2Fly && exp.current
                                  ? 'bg-emerald-500/50'
                                  : isInfosys
                                  ? 'bg-orange-500/50'
                                  : 'bg-purple-500/50'
                              } rounded-full blur-sm`} />
                            </motion.div>
                          ))}
                          {/* Infosys Circuit Board Animation */}
                          {isInfosys && (
                            <>
                              {/* Animated Circuit Lines */}
                              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3 }}>
                                {/* Horizontal Lines */}
                                <motion.line
                                  x1="0" y1="20%" x2="100%" y2="20%"
                                  stroke="url(#circuit-gradient-1)"
                                  strokeWidth="2"
                                  initial={{ pathLength: 0 }}
                                  animate={isInfosysInView ? { pathLength: 1 } : { pathLength: 0 }}
                                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.line
                                  x1="0" y1="50%" x2="100%" y2="50%"
                                  stroke="url(#circuit-gradient-2)"
                                  strokeWidth="2"
                                  initial={{ pathLength: 0 }}
                                  animate={isInfosysInView ? { pathLength: 1 } : { pathLength: 0 }}
                                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                                />
                                <motion.line
                                  x1="0" y1="80%" x2="100%" y2="80%"
                                  stroke="url(#circuit-gradient-3)"
                                  strokeWidth="2"
                                  initial={{ pathLength: 0 }}
                                  animate={isInfosysInView ? { pathLength: 1 } : { pathLength: 0 }}
                                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                                />

                                {/* Vertical Lines */}
                                <motion.line
                                  x1="30%" y1="0" x2="30%" y2="100%"
                                  stroke="url(#circuit-gradient-4)"
                                  strokeWidth="2"
                                  initial={{ pathLength: 0 }}
                                  animate={isInfosysInView ? { pathLength: 1 } : { pathLength: 0 }}
                                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.3 }}
                                />
                                <motion.line
                                  x1="70%" y1="0" x2="70%" y2="100%"
                                  stroke="url(#circuit-gradient-5)"
                                  strokeWidth="2"
                                  initial={{ pathLength: 0 }}
                                  animate={isInfosysInView ? { pathLength: 1 } : { pathLength: 0 }}
                                  transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: 0.7 }}
                                />

                                {/* Circuit Nodes */}
                                {[
                                  { x: '30%', y: '20%' },
                                  { x: '70%', y: '20%' },
                                  { x: '30%', y: '50%' },
                                  { x: '70%', y: '50%' },
                                  { x: '30%', y: '80%' },
                                  { x: '70%', y: '80%' },
                                ].map((node, i) => (
                                  <motion.circle
                                    key={i}
                                    cx={node.x}
                                    cy={node.y}
                                    r="4"
                                    fill="#f97316"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInfosysInView ? {
                                      opacity: [0, 1, 0],
                                      scale: [0, 1.5, 0],
                                    } : { opacity: 0 }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: i * 0.3,
                                    }}
                                  />
                                ))}

                                {/* Gradients for circuit lines */}
                                <defs>
                                  <linearGradient id="circuit-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                                  </linearGradient>
                                  <linearGradient id="circuit-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#fb923c" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#fb923c" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
                                  </linearGradient>
                                  <linearGradient id="circuit-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#fdba74" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#fdba74" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#fdba74" stopOpacity="0" />
                                  </linearGradient>
                                  <linearGradient id="circuit-gradient-4" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                                  </linearGradient>
                                  <linearGradient id="circuit-gradient-5" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#fb923c" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#fb923c" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
                                  </linearGradient>
                                </defs>
                              </svg>

                              {/* Electricity Pulse Effect */}
                              <motion.div
                                className="absolute inset-0 rounded-2xl"
                                style={{
                                  boxShadow: '0 0 0 2px rgba(249, 115, 22, 0.3)',
                                }}
                                animate={{
                                  boxShadow: [
                                    '0 0 0 2px rgba(249, 115, 22, 0.3)',
                                    '0 0 20px 2px rgba(249, 115, 22, 0.6)',
                                    '0 0 0 2px rgba(249, 115, 22, 0.3)',
                                  ],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                            </>
                          )}

                          {/* Animated Background Pattern */}
                          <motion.div
                            className="absolute inset-0 opacity-10"
                            animate={{
                              backgroundPosition: ['0% 0%', '100% 100%'],
                            }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            style={{
                              backgroundImage: isVisa2Fly
                                ? `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.6) 1px, transparent 0)`
                                : isInfosys
                                ? `radial-gradient(circle at 2px 2px, rgba(249, 115, 22, 0.6) 1px, transparent 0)`
                                : `radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.6) 1px, transparent 0)`,
                              backgroundSize: '40px 40px'
                            }}
                          />

                          {/* Shimmering Border Effect */}
                          <motion.div
                            className="absolute inset-0 rounded-3xl"
                            style={{
                              background: isVisa2Fly
                                ? `linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.5) 50%, transparent 100%)`
                                : isInfosys
                                ? `linear-gradient(90deg, transparent 0%, rgba(249, 115, 22, 0.5) 50%, transparent 100%)`
                                : `linear-gradient(90deg, transparent 0%, rgba(168, 85, 247, 0.5) 50%, transparent 100%)`,
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

                          {/* Corner Accents */}
                          {[
                            { top: 0, left: 0, rotate: 0 },
                            { top: 0, right: 0, rotate: 90 },
                            { bottom: 0, right: 0, rotate: 180 },
                            { bottom: 0, left: 0, rotate: 270 },
                          ].map((corner, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-8 h-8"
                              style={{
                                ...corner,
                                borderTop: isVisa2Fly
                                  ? '3px solid rgba(16, 185, 129, 0.5)'
                                  : isInfosys
                                  ? '3px solid rgba(249, 115, 22, 0.5)'
                                  : '3px solid rgba(168, 85, 247, 0.5)',
                                borderLeft: isVisa2Fly
                                  ? '3px solid rgba(16, 185, 129, 0.5)'
                                  : isInfosys
                                  ? '3px solid rgba(249, 115, 22, 0.5)'
                                  : '3px solid rgba(168, 85, 247, 0.5)',
                                borderTopLeftRadius: '0.75rem',
                                transform: `rotate(${corner.rotate}deg)`,
                              }}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 0.5 + (i * 0.1),
                                type: "spring",
                                stiffness: 200,
                              }}
                              animate={hoveredCard === exp.id ? {
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5],
                              } : {}}
                            />
                          ))}

                          {/* Visa Stamp for Visa2Fly - Enhanced */}
                          {isVisa2Fly && (
                            <motion.div
                              variants={stampVariants}
                              initial="hidden"
                              animate={isVisa2flyInView ? "visible" : "hidden"}
                              className="absolute -top-8 -right-8 md:-top-10 md:-right-10 z-30 pointer-events-none"
                            >
                              <motion.div
                                animate={{
                                  rotate: [-12, -10, -12],
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                <VisaStampSVG className="w-28 h-28 md:w-36 md:h-36 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]" />
                              </motion.div>
                            </motion.div>
                          )}

                          {/* Company & Role - Futuristic */}
                          <div className="relative flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                              {/* Icon with Subtle Glow */}
                              <motion.div
                                className={`p-4 rounded-2xl bg-gradient-to-br ${
                                  isVisa2Fly && exp.current
                                    ? 'from-emerald-900/30 to-teal-900/30 border border-emerald-700/30'
                                    : isInfosys
                                    ? 'from-orange-900/30 to-amber-900/30 border border-orange-700/30'
                                    : 'from-purple-900/30 to-pink-900/30 border border-purple-700/30'
                                } relative overflow-hidden`}
                                initial={{ rotate: -180, scale: 0 }}
                                whileInView={{ rotate: 0, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{
                                  rotate: 360,
                                  scale: 1.1,
                                  transition: {
                                    rotate: { duration: 0.6 },
                                    scale: { duration: 0.3 }
                                  }
                                }}
                                animate={{
                                  boxShadow: [
                                    `0 0 10px ${isVisa2Fly && exp.current ? 'rgba(16, 185, 129, 0.15)' : isInfosys ? 'rgba(249, 115, 22, 0.15)' : 'rgba(168, 85, 247, 0.15)'}`,
                                    `0 0 20px ${isVisa2Fly && exp.current ? 'rgba(16, 185, 129, 0.25)' : isInfosys ? 'rgba(249, 115, 22, 0.25)' : 'rgba(168, 85, 247, 0.25)'}`,
                                    `0 0 10px ${isVisa2Fly && exp.current ? 'rgba(16, 185, 129, 0.15)' : isInfosys ? 'rgba(249, 115, 22, 0.15)' : 'rgba(168, 85, 247, 0.15)'}`,
                                  ]
                                }}
                                transition={{
                                  type: "spring",
                                  stiffness: 200,
                                  delay: 0.3,
                                  boxShadow: {
                                    duration: 3,
                                    repeat: Infinity,
                                  }
                                }}
                              >
                                {/* Subtle Icon Background Pulse */}
                                <motion.div
                                  className={`absolute inset-0 ${
                                    isVisa2Fly && exp.current ? 'bg-emerald-700/10' : isInfosys ? 'bg-orange-700/10' : 'bg-purple-700/10'
                                  } rounded-2xl`}
                                  animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0, 0.3],
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                  }}
                                />
                                <FiBriefcase className={`${
                                  isVisa2Fly && exp.current ? 'text-emerald-500' : isInfosys ? 'text-orange-500' : 'text-purple-500'
                                } text-3xl relative z-10`} />
                              </motion.div>

                              <div>
                                <div className="flex items-center gap-3 mb-2">
                                  <motion.h3
                                    className="text-2xl md:text-3xl font-bold"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, type: "spring" }}
                                  >
                                    <motion.span
                                      className={`bg-gradient-to-r ${
                                        isVisa2Fly && exp.current
                                          ? 'from-gray-200 via-emerald-200 to-gray-200'
                                          : isInfosys
                                          ? 'from-gray-200 via-orange-200 to-gray-200'
                                          : 'from-gray-200 via-purple-200 to-gray-200'
                                      } bg-clip-text text-transparent`}
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
                                      {exp.role}
                                    </motion.span>
                                  </motion.h3>

                                  {/* Type Badge */}
                                  <motion.span
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                                      exp.type === "Full-time"
                                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40'
                                        : 'bg-blue-500/20 text-blue-300 border border-blue-400/40'
                                    }`}
                                  >
                                    {exp.type}
                                  </motion.span>
                                </div>
                                <motion.p
                                  className="text-lg md:text-xl font-bold"
                                  initial={{ opacity: 0, x: -50 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.5, type: "spring" }}
                                >
                                  <motion.span
                                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
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
                                    {exp.company}
                                  </motion.span>
                                </motion.p>
                              </div>
                            </div>

                            {exp.current && (
                              <motion.span
                                className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 text-green-300 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm"
                                animate={{
                                  boxShadow: [
                                    '0 0 10px rgba(34, 197, 94, 0.3)',
                                    '0 0 20px rgba(34, 197, 94, 0.5)',
                                    '0 0 10px rgba(34, 197, 94, 0.3)',
                                  ]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                ⚡ Active
                              </motion.span>
                            )}
                          </div>

                          {/* Period, Location & Total Experience - Futuristic */}
                          <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-400/30 rounded-lg backdrop-blur-sm">
                              <span className="text-cyan-400">📅</span>
                              <span className="text-sm text-cyan-200 font-medium">{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-400/30 rounded-lg backdrop-blur-sm">
                              <span className="text-purple-400">📍</span>
                              <span className="text-sm text-purple-200 font-medium">{exp.location}</span>
                            </div>
                            {exp.totalExperience && (
                              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-400/30 rounded-lg backdrop-blur-sm">
                                <span className="text-green-400">⏱️</span>
                                <span className="text-sm text-green-200 font-medium">{exp.totalExperience}</span>
                              </div>
                            )}
                          </div>

                        {/* Achievements - Futuristic */}
                        <div className="space-y-4 relative">
                          {exp.achievements.map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              initial={{
                                opacity: 0,
                                x: -100,
                                scale: 0.5,
                                rotateY: -90,
                              }}
                              whileInView={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                rotateY: 0,
                              }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 0.6 + (idx * 0.15),
                                type: "spring",
                                stiffness: 150,
                                damping: 15
                              }}
                              whileHover={{
                                x: 10,
                                scale: 1.05,
                                transition: {
                                  type: "spring",
                                  stiffness: 400,
                                }
                              }}
                              className="flex items-start gap-4 group relative p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                            >
                              {/* Hover Glow Effect */}
                              <motion.div
                                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-100"
                                initial={{ opacity: 0 }}
                                whileHover={{
                                  opacity: 0.1,
                                  background: 'linear-gradient(90deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1), rgba(236,72,153,0.1))',
                                }}
                                transition={{ duration: 0.3 }}
                              />

                              <motion.div
                                className="mt-1 flex-shrink-0 relative"
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: 0.7 + (idx * 0.15),
                                  type: "spring",
                                  stiffness: 200,
                                }}
                                whileHover={{
                                  rotate: 360,
                                  scale: 1.3,
                                  transition: { duration: 0.5 }
                                }}
                              >
                                {/* Outer Glow Ring */}
                                <motion.div
                                  className="absolute inset-0 bg-green-400/40 rounded-full blur-lg"
                                  animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.4, 0.7, 0.4],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                />

                                {/* Icon */}
                                <FiCheckCircle className="relative text-green-400 text-xl z-10" />

                                {/* Sparkle Effect on Hover */}
                                <motion.div
                                  className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                                  animate={{
                                    scale: [0, 1, 0],
                                    rotate: [0, 180, 360],
                                  }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                  }}
                                />
                              </motion.div>

                              <motion.p
                                className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-cyan-100 transition-colors relative z-10 flex-1"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 + (idx * 0.15) }}
                              >
                                {achievement}
                              </motion.p>
                            </motion.div>
                          ))}
                        </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

// Visa Stamp SVG Component
const VisaStampSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#stamp-shadow)">
      {/* Outer circle */}
      <circle cx="100" cy="100" r="80" stroke="#DC2626" strokeWidth="6" fill="none" opacity="0.8" strokeDasharray="8 4"/>
      {/* Inner circle */}
      <circle cx="100" cy="100" r="65" stroke="#DC2626" strokeWidth="4" fill="none" opacity="0.6"/>
      {/* VISA text */}
      <text x="100" y="85" textAnchor="middle" fill="#DC2626" fontSize="32" fontWeight="bold" fontFamily="Arial">VISA</text>
      {/* APPROVED text */}
      <text x="100" y="115" textAnchor="middle" fill="#DC2626" fontSize="20" fontWeight="600" fontFamily="Arial">APPROVED</text>
      {/* Date */}
      <text x="100" y="135" textAnchor="middle" fill="#DC2626" fontSize="12" fontFamily="Arial" opacity="0.7">2025</text>
      {/* Stars */}
      <path d="M 50 50 L 52 56 L 58 56 L 53 60 L 55 66 L 50 62 L 45 66 L 47 60 L 42 56 L 48 56 Z" fill="#DC2626" opacity="0.5"/>
      <path d="M 150 50 L 152 56 L 158 56 L 153 60 L 155 66 L 150 62 L 145 66 L 147 60 L 142 56 L 148 56 Z" fill="#DC2626" opacity="0.5"/>
    </g>
    <defs>
      <filter id="stamp-shadow" x="0" y="0" width="200" height="200">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.4"/>
      </filter>
    </defs>
  </svg>
);

export default Experience;
