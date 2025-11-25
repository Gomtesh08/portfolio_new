import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiAward, FiBookOpen, FiStar, FiDatabase, FiGitBranch, FiLayers, FiServer, FiTerminal, FiBox, FiCpu, FiZap } from 'react-icons/fi';
import { personalInfo, education, achievements } from '../data/portfolioData';

const About = () => {
  // 12 Technical Skills with Icons and Colors
  const technicalSkills = [
    { name: 'Java', icon: FiCode, gradient: 'from-orange-500 to-red-600', glow: 'rgba(249, 115, 22, 0.6)' },
    { name: 'Spring Boot', icon: FiLayers, gradient: 'from-green-500 to-emerald-600', glow: 'rgba(34, 197, 94, 0.6)' },
    { name: 'Node.js', icon: FiServer, gradient: 'from-green-400 to-lime-500', glow: 'rgba(132, 204, 22, 0.6)' },
    { name: 'Express', icon: FiZap, gradient: 'from-gray-400 to-gray-600', glow: 'rgba(156, 163, 175, 0.6)' },
    { name: 'React', icon: FiBox, gradient: 'from-cyan-400 to-blue-500', glow: 'rgba(59, 130, 246, 0.6)' },
    { name: 'JavaScript', icon: FiTerminal, gradient: 'from-yellow-400 to-orange-500', glow: 'rgba(251, 191, 36, 0.6)' },
    { name: 'SQL', icon: FiDatabase, gradient: 'from-blue-500 to-indigo-600', glow: 'rgba(79, 70, 229, 0.6)' },
    { name: 'MongoDB', icon: FiDatabase, gradient: 'from-green-600 to-teal-600', glow: 'rgba(20, 184, 166, 0.6)' },
    { name: 'Git', icon: FiGitBranch, gradient: 'from-orange-600 to-red-700', glow: 'rgba(239, 68, 68, 0.6)' },
    { name: 'Postman', icon: FiCpu, gradient: 'from-orange-500 to-orange-600', glow: 'rgba(249, 115, 22, 0.6)' },
    { name: 'Python', icon: FiCode, gradient: 'from-blue-400 to-yellow-400', glow: 'rgba(59, 130, 246, 0.6)' },
    { name: 'Tailwind CSS', icon: FiLayers, gradient: 'from-cyan-400 to-blue-600', glow: 'rgba(6, 182, 212, 0.6)' },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden bg-black">
      {/* Modern Dark Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dark Animated Grid */}
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

        {/* Floating Orbs - Darker */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glowing Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Modern Title */}
        <motion.div
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-2 border-cyan-500/30 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.3), transparent)',
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
            <FiStar className="text-cyan-400 relative z-10" size={20} />
            <span className="text-cyan-200 font-semibold relative z-10">Get To Know Me</span>
          </motion.div>

          <motion.h2
            className="text-6xl md:text-8xl font-black mb-6 relative"
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
              About Me

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
                About Me
              </motion.span>
            </motion.span>
          </motion.h2>

          {/* Animated Underline */}
          <motion.div
            className="h-1.5 w-48 mx-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full relative overflow-hidden"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Modern Summary Card */}
        <motion.div
          className="max-w-6xl mx-auto mb-24 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative p-10 md:p-16 rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-gray-900/95 via-gray-800/80 to-gray-900/95 border-2 border-gray-700/30"
            whileHover={{
              scale: 1.02,
              borderColor: 'rgba(34, 211, 238, 0.4)',
              boxShadow: '0 0 60px rgba(34, 211, 238, 0.3)',
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Border Shimmer */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.2), transparent)',
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

            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed text-center relative z-10 font-light">
              {personalInfo.summary}
            </p>
          </motion.div>
        </motion.div>

        {/* Technical Skills - Split Cards Animation */}
        <motion.div
          className="mb-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className="text-5xl md:text-7xl font-black text-center mb-16 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
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
              Technical Skills

              {/* Glowing Shadow */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent blur-xl opacity-50"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Technical Skills
              </motion.span>
            </motion.span>
          </motion.h3>

          {/* 3x4 Grid of Split Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technicalSkills.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={idx}
                  className="relative h-40 perspective-1000"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  {/* Card Container */}
                  <div className="relative w-full h-full">
                    {/* Glowing Background (revealed during split) */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0"
                      style={{
                        background: `radial-gradient(circle, ${skill.glow}, transparent)`,
                        filter: 'blur(20px)',
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{
                        opacity: [0, 1, 0.3],
                      }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 1.2,
                        times: [0, 0.5, 1],
                        delay: idx * 0.05,
                      }}
                    />

                    {/* Left Half */}
                    <motion.div
                      className="absolute top-0 left-0 w-1/2 h-full overflow-hidden"
                      initial={{ x: 0 }}
                      whileInView={{
                        x: [0, -30, 0],
                      }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 1.2,
                        times: [0, 0.5, 1],
                        delay: idx * 0.05,
                        ease: [0.43, 0.13, 0.23, 0.96]
                      }}
                    >
                      <div
                        className="w-[200%] h-full rounded-2xl border-2 backdrop-blur-md"
                        style={{
                          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.8))',
                          borderImage: `linear-gradient(135deg, ${skill.glow}, transparent) 1`,
                          borderColor: skill.glow,
                        }}
                      />
                    </motion.div>

                    {/* Right Half */}
                    <motion.div
                      className="absolute top-0 right-0 w-1/2 h-full overflow-hidden"
                      initial={{ x: 0 }}
                      whileInView={{
                        x: [0, 30, 0],
                      }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 1.2,
                        times: [0, 0.5, 1],
                        delay: idx * 0.05,
                        ease: [0.43, 0.13, 0.23, 0.96]
                      }}
                    >
                      <div
                        className="w-[200%] h-full rounded-2xl border-2 backdrop-blur-md -ml-[100%]"
                        style={{
                          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.8))',
                          borderImage: `linear-gradient(135deg, ${skill.glow}, transparent) 1`,
                          borderColor: skill.glow,
                        }}
                      />
                    </motion.div>

                    {/* Content (Icon + Name) - Fades in after split */}
                    <motion.div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{
                        opacity: [0, 0, 1],
                        scale: [0.8, 0.8, 1],
                      }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 1.2,
                        times: [0, 0.6, 1],
                        delay: idx * 0.05,
                      }}
                    >
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent className="text-white text-3xl" />
                      </motion.div>
                      <h4 className="text-lg font-bold text-white text-center px-2">
                        {skill.name}
                      </h4>
                    </motion.div>

                    {/* Hover Effect on Entire Card */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-auto cursor-pointer"
                      whileHover={{
                        scale: 1.05,
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        boxShadow: `0 0 0 rgba(0,0,0,0)`,
                      }}
                      whileHoverStyle={{
                        boxShadow: `0 0 40px ${skill.glow}`,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Education & Achievements - Ultra Modern Design */}
        <motion.div
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative background grid */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }} />
          </div>

          {/* Floating orbs */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              y: [0, 30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              y: [0, -30, 0],
              x: [0, -20, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateX: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, type: "spring", stiffness: 60 }}
          >
            <motion.h3
              className="text-4xl md:text-6xl font-black mb-8 flex items-center gap-4"
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="relative"
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.3, rotate: 360 }}
              >
                <FiBookOpen className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" size={40} />
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 blur-xl bg-cyan-400 opacity-50"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <motion.span
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
              >
                Education
              </motion.span>
            </motion.h3>

            <motion.div
              className="relative p-8 rounded-3xl overflow-hidden group cursor-pointer backdrop-blur-xl bg-gradient-to-br from-gray-900/95 via-gray-800/80 to-gray-900/95 border-2 border-gray-700/30"
              initial={{ scale: 0.85, opacity: 0, y: 50 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.7, type: "spring", stiffness: 80 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                borderColor: 'rgba(34, 211, 238, 0.6)',
                boxShadow: '0 20px 60px rgba(34, 211, 238, 0.4)',
              }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(34, 211, 238, 0.2))',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              />

              {/* Floating particles */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="absolute top-10 right-10 w-1.5 h-1.5 bg-cyan-400 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute bottom-8 left-8 w-2 h-2 bg-blue-300 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />

              {/* Animated Icon with 3D effect */}
              <motion.div
                className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 flex items-center justify-center mb-6 shadow-2xl"
                initial={{ scale: 0, rotate: -180, y: -50 }}
                whileInView={{ scale: 1, rotate: 0, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5, type: "spring", stiffness: 150, damping: 10 }}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                  boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)',
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    boxShadow: [
                      '0 10px 30px rgba(59, 130, 246, 0.3)',
                      '0 10px 40px rgba(59, 130, 246, 0.5)',
                      '0 10px 30px rgba(59, 130, 246, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative z-10"
                >
                  <FiCode className="text-white text-4xl drop-shadow-lg" />
                </motion.div>

                {/* Icon glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 blur-xl opacity-50"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <motion.h4
                className="text-2xl md:text-3xl font-bold text-white mb-3 relative z-10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                {education.degree}
              </motion.h4>

              <motion.p
                className="text-blue-100 mb-6 text-lg relative z-10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                {education.institution}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.8 }}
              >
                <motion.span
                  className="px-5 py-2.5 bg-white/20 backdrop-blur-md text-white rounded-xl border border-white/30 font-medium shadow-lg"
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                  }}
                >
                  {education.period}
                </motion.span>

                <motion.span
                  className="relative px-5 py-2.5 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white rounded-xl font-bold shadow-2xl overflow-hidden"
                  initial={{ scale: 0, rotate: 10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: '0 0 30px rgba(34, 197, 94, 0.6)',
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      boxShadow: [
                        '0 0 10px rgba(34, 197, 94, 0.3)',
                        '0 0 25px rgba(34, 197, 94, 0.6)',
                        '0 0 10px rgba(34, 197, 94, 0.3)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <span className="relative z-10">CGPA: {education.cgpa}</span>
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateX: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, type: "spring", stiffness: 60 }}
          >
            <motion.h3
              className="text-4xl md:text-6xl font-black mb-8 flex items-center gap-4"
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="relative"
                animate={{
                  rotate: [0, -15, 15, 0],
                  scale: [1, 1.15, 1.15, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.4, rotate: 360 }}
              >
                <FiAward className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" size={40} />
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 blur-xl bg-purple-400 opacity-50"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <motion.span
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
              >
                Achievements
              </motion.span>
            </motion.h3>

            <div className="space-y-5">
              {achievements.slice(0, 2).map((achievement, idx) => (
                <motion.div
                  key={achievement.id}
                  className="relative p-6 rounded-2xl overflow-hidden group cursor-pointer backdrop-blur-xl bg-gradient-to-br from-gray-900/95 via-purple-900/60 to-gray-900/95 border-2 border-gray-700/30"
                  initial={{ opacity: 0, x: 60, scale: 0.85, rotateY: 15 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + (idx * 0.2),
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    borderColor: 'rgba(168, 85, 247, 0.6)',
                    boxShadow: '0 20px 60px rgba(168, 85, 247, 0.4)',
                  }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
                    }}
                  />

                  {/* Floating particles */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full"
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.3 }}
                  />
                  <motion.div
                    className="absolute top-10 right-10 w-1.5 h-1.5 bg-pink-400 rounded-full"
                    animate={{
                      y: [0, -15, 0],
                      x: [0, -10, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 + idx * 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-8 w-2 h-2 bg-purple-300 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 + idx * 0.3 }}
                  />

                  <div className="flex items-start gap-5 relative z-10">
                    {/* Animated Icon Container */}
                    <motion.div
                      className="relative flex-shrink-0"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        delay: 0.5 + (idx * 0.2),
                        type: "spring",
                        stiffness: 150,
                        damping: 10
                      }}
                      whileHover={{
                        scale: 1.3,
                        rotate: 15,
                      }}
                    >
                      <motion.div
                        className="text-6xl relative"
                        animate={{
                          y: [0, -8, 0],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: idx * 0.5,
                          ease: "easeInOut"
                        }}
                      >
                        {/* Glow behind emoji */}
                        <motion.div
                          className="absolute inset-0 blur-2xl opacity-60"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.4, 0.7, 0.4],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          style={{
                            background: achievement.icon === 'code' ? 'rgba(59, 130, 246, 0.5)' :
                                       achievement.icon === 'server' ? 'rgba(168, 85, 247, 0.5)' :
                                       achievement.icon === 'award' ? 'rgba(234, 179, 8, 0.5)' :
                                       'rgba(236, 72, 153, 0.5)'
                          }}
                        />
                        <span className="relative z-10">
                          {achievement.icon === 'code' && '💻'}
                          {achievement.icon === 'server' && '🚀'}
                          {achievement.icon === 'award' && '🏆'}
                          {achievement.icon === 'stack' && '⚡'}
                        </span>
                      </motion.div>
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <motion.h4
                        className="text-xl md:text-2xl font-bold text-white mb-2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.6 + (idx * 0.2), type: "spring" }}
                      >
                        <motion.span
                          className="inline-block"
                          whileHover={{
                            scale: 1.05,
                            color: '#e879f9',
                          }}
                        >
                          {achievement.title}
                        </motion.span>
                      </motion.h4>

                      <motion.p
                        className="text-purple-100 text-base"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.7 + (idx * 0.2), type: "spring" }}
                      >
                        {achievement.description}
                      </motion.p>

                      {/* Decorative line */}
                      <motion.div
                        className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.8 + (idx * 0.2), duration: 0.8 }}
                      />
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>



      </div>
    </section>
  );
};

export default About;

