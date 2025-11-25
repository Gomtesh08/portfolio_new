import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

const Projects = () => {
  // Get all unique tech stacks
  const allTechStacks = ['All', ...new Set(projects.flatMap(p => p.techStack))];

  // Cursor follower state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      {/* Java "{ }" Symbol Cursor Follower - Follows with Distance */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          left: mousePosition.x + 40,
          top: mousePosition.y + 40,
        }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 150,
          mass: 0.8,
        }}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 w-16 h-16"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.6) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 70%)',
            filter: 'blur(20px)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Java Curly Braces Symbol */}
        <motion.div
          className="relative w-16 h-16 flex items-center justify-center"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Background Circle */}
          <motion.div
            className="absolute inset-2 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)',
              boxShadow: '0 0 30px rgba(34, 211, 238, 0.6), 0 0 50px rgba(59, 130, 246, 0.4)',
            }}
            animate={{
              boxShadow: [
                '0 0 30px rgba(34, 211, 238, 0.6), 0 0 50px rgba(59, 130, 246, 0.4)',
                '0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(236, 72, 153, 0.6)',
                '0 0 30px rgba(34, 211, 238, 0.6), 0 0 50px rgba(59, 130, 246, 0.4)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Inner Dark Circle */}
          <div className="absolute inset-3 rounded-full bg-black/90 backdrop-blur-sm border border-cyan-400/30" />

          {/* Curly Braces { } */}
          <motion.div
            className="relative text-2xl font-black flex items-center gap-0.5"
            style={{
              transform: 'rotate(0deg)',
            }}
            animate={{
              rotate: [0, -360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.span
              className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              style={{ backgroundSize: '200% auto' }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {'{'}
            </motion.span>
            <motion.span
              className="bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              style={{ backgroundSize: '200% auto' }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {'}'}
            </motion.span>
          </motion.div>

          {/* Orbiting Dots */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                background: i % 2 === 0 ? '#06b6d4' : '#8b5cf6',
                boxShadow: i % 2 === 0 ? '0 0 8px rgba(34, 211, 238, 1)' : '0 0 8px rgba(168, 85, 247, 1)',
              }}
              animate={{
                x: [
                  Math.cos((i / 4) * Math.PI * 2) * 28,
                  Math.cos((i / 4) * Math.PI * 2 + Math.PI * 2) * 28,
                ],
                y: [
                  Math.sin((i / 4) * Math.PI * 2) * 28,
                  Math.sin((i / 4) * Math.PI * 2 + Math.PI * 2) * 28,
                ],
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      <section
        id="projects"
        className="section-padding relative overflow-hidden bg-black"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >

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
          className="absolute top-20 left-10 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 100, 0],
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
              <span className="text-cyan-200 font-semibold">My Work</span>
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
                Featured Projects

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
                  Featured Projects
                </motion.span>
              </motion.span>
            </h2>

            <motion.div
              className="h-1.5 w-48 mx-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Simple Tech Stack Display */}
          <div className="mb-16">
            <motion.p
              className="text-center text-gray-400 text-lg mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Built with: <span className="text-cyan-400 font-semibold">{allTechStacks.slice(1).join(' • ')}</span>
            </motion.p>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900/95 via-gray-800/80 to-gray-900/95 border-2 border-gray-700/30 rounded-3xl p-6 group overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_60px_rgba(34,211,238,0.3)] transition-all duration-300"
              >
                {/* Animated Border Shimmer */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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

                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-2xl mb-6 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-7xl font-black opacity-20">
                    {project.title.charAt(0)}
                  </div>

                  {/* Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4 pointer-events-none"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all pointer-events-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub size={28} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-gray-200 mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-800/80 border border-cyan-500/30 text-cyan-300 rounded-lg text-xs font-semibold hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Code Button */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/50 rounded-xl text-cyan-300 hover:text-cyan-200 font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub /> View Code
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>



          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Want to see more? Check out my GitHub profile!
            </p>
            <motion.a
              href="https://github.com/Gomtesh08"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <FiGithub /> Visit GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Projects;

