import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiCode, FiArrowDown, FiDatabase, FiServer, FiCpu, FiBox, FiLayers } from 'react-icons/fi';
import { SiLeetcode, SiSpringboot, SiMysql, SiPostgresql, SiDocker, SiGit, SiJavascript } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedCode, setTypedCode] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showRunButton, setShowRunButton] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [outputName, setOutputName] = useState('');
  const [showClickMe, setShowClickMe] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Full code to type
  const fullCode = `System.out.println("${personalInfo.name}");`;

  // Typing animation for the code
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullCode.length) {
        setTypedCode(fullCode.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
        // Show run button after typing completes
        setTimeout(() => {
          setShowRunButton(true);
        }, 500);
      }
    }, 80); // Typing speed

    return () => clearInterval(typingInterval);
  }, []);

  // Handle Run Code button click
  const handleRunCode = () => {
    setHasRun(true);
    setOutputName(''); // Reset output name
    // Animate the output name typing
    let index = 0;
    const outputInterval = setInterval(() => {
      if (index <= personalInfo.name.length) {
        setOutputName(personalInfo.name.slice(0, index));
        index++;
      } else {
        clearInterval(outputInterval);
      }
    }, 60);
  };

  // Handle Retry - Reset everything to initial state
  const handleRetry = () => {
    setHasRun(false);
    setOutputName('');
    setTypedCode('');
    setIsTypingComplete(false);
    setShowRunButton(false);

    // Restart typing animation
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullCode.length) {
        setTypedCode(fullCode.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
        setTimeout(() => {
          setShowRunButton(true);
        }, 500);
      }
    }, 80);
  };

  // Show "Click me!" tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowClickMe(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Gomtesh_Kote_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-black">

      {/* Modern Dark Grid Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Hexagon Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%2322d3ee' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }}></div>

      {/* Floating Orbs - Dark Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 120 + 60,
              height: Math.random() * 120 + 60,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(34, 211, 238, 0.15)' :
                i % 3 === 1 ? 'rgba(59, 130, 246, 0.15)' :
                'rgba(139, 92, 246, 0.15)'
              }, transparent)`,
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Floating Orbs with Mouse Parallax - Dark Theme */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, transparent 70%)',
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        animate={{
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [-100, 100, -100],
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Floating Tech Icons - Background */}
      {[
        { Icon: FiCode, color: 'text-orange-400', bgColor: 'bg-orange-500', size: 20, delay: 0, label: 'Java' },
        { Icon: SiSpringboot, color: 'text-green-400', bgColor: 'bg-green-500', size: 18, delay: 0.5, label: 'Spring Boot' },
        { Icon: SiMysql, color: 'text-blue-400', bgColor: 'bg-blue-500', size: 18, delay: 1, label: 'MySQL' },
        { Icon: SiPostgresql, color: 'text-blue-400', bgColor: 'bg-blue-600', size: 18, delay: 1.5, label: 'PostgreSQL' },
        { Icon: SiDocker, color: 'text-sky-400', bgColor: 'bg-blue-400', size: 20, delay: 2, label: 'Docker' },
        { Icon: SiGit, color: 'text-orange-400', bgColor: 'bg-orange-600', size: 18, delay: 2.5, label: 'Git' },
        { Icon: FiDatabase, color: 'text-purple-400', bgColor: 'bg-purple-500', size: 18, delay: 3, label: 'Database' },
        { Icon: FiServer, color: 'text-cyan-400', bgColor: 'bg-cyan-500', size: 16, delay: 3.5, label: 'REST API' },
        { Icon: FiCpu, color: 'text-pink-400', bgColor: 'bg-pink-500', size: 18, delay: 4, label: 'Backend' },
        { Icon: FiLayers, color: 'text-indigo-400', bgColor: 'bg-indigo-500', size: 16, delay: 4.5, label: 'Microservices' },
      ].map((tech, i) => (
        <motion.div
          key={i}
          drag
          dragConstraints={{
            top: -30,
            left: -30,
            right: 30,
            bottom: 30,
          }}
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          whileHover={{
            scale: 1.3,
            opacity: 0.6,
            transition: { duration: 0.2 }
          }}
          whileTap={{
            scale: 1.5,
            rotate: 180,
            transition: { duration: 0.3 }
          }}
          className={`absolute ${tech.color} opacity-15 dark:opacity-20 cursor-grab active:cursor-grabbing group`}
          style={{
            left: `${10 + (i * 9)}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.sin(i) * 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12 + i,
            repeat: Infinity,
            delay: tech.delay,
            ease: "easeInOut",
          }}
        >
          {/* Icon with Subtle Glow */}
          <motion.div className="relative">
            <tech.Icon size={tech.size} />

            {/* Glow on Hover */}
            <motion.div
              className={`absolute inset-0 ${tech.bgColor} rounded-full blur-md opacity-0 group-hover:opacity-30 -z-10`}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Subtle Code Snippets */}
      {[
        { text: '@SpringBoot', left: '5%', top: '15%', color: 'text-green-400' },
        { text: '@REST', left: '85%', top: '20%', color: 'text-blue-400' },
        { text: '@Service', left: '10%', top: '70%', color: 'text-purple-400' },
        { text: '@Auto', left: '80%', top: '65%', color: 'text-orange-400' },
        { text: 'class', left: '15%', top: '45%', color: 'text-cyan-400' },
        { text: 'JPA', left: '75%', top: '40%', color: 'text-pink-400' },
      ].map((code, i) => (
        <motion.div
          key={i}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          dragElastic={0.3}
          whileHover={{
            scale: 1.2,
            opacity: 0.5,
            transition: { duration: 0.2 }
          }}
          whileTap={{
            scale: 1.3,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
          }}
          className={`absolute text-[10px] font-mono ${code.color} opacity-10 dark:opacity-15 font-semibold cursor-grab active:cursor-grabbing hover:opacity-40 transition-opacity px-2 py-1 rounded bg-white/5 dark:bg-black/10 backdrop-blur-sm border border-current/20`}
          style={{
            left: code.left,
            top: code.top,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          {code.text}
        </motion.div>
      ))}

      {/* Floating Social Media Icons */}
      {[
        { Icon: FiGithub, href: personalInfo.github, left: '8%', top: '30%', color: 'text-gray-700 dark:text-gray-300', bgColor: 'bg-gray-800', label: 'GitHub', delay: 0 },
        { Icon: FiLinkedin, href: personalInfo.linkedin, left: '88%', top: '55%', color: 'text-blue-500', bgColor: 'bg-blue-600', label: 'LinkedIn', delay: 1 },
        { Icon: SiLeetcode, href: personalInfo.leetcode, left: '12%', top: '85%', color: 'text-orange-500', bgColor: 'bg-orange-600', label: 'LeetCode', delay: 2 },
      ].map((social, i) => (
        <motion.a
          key={i}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute ${social.color} opacity-40 dark:opacity-50 hover:opacity-100 cursor-pointer group z-20`}
          style={{
            left: social.left,
            top: social.top,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: social.delay,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.4,
            opacity: 1,
            rotate: 0,
            transition: { duration: 0.3 }
          }}
          whileTap={{
            scale: 1.2,
            transition: { duration: 0.2 }
          }}
          onClick={() => setShowClickMe(false)}
        >
          <motion.div className="relative">
            <social.Icon size={36} />

            {/* "Click me!" Tooltip */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: showClickMe ? [0, 1, 1, 0] : 0,
                scale: showClickMe ? [0, 1.2, 1, 0.8] : 0,
                y: showClickMe ? [0, -5, -5, 0] : 0,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                delay: i * 0.5,
              }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
            >
              <div className="relative">
                <div className={`px-3 py-1.5 ${social.bgColor} text-white text-xs font-bold rounded-lg shadow-lg`}>
                  Click me! 👆
                </div>
                {/* Arrow pointing down */}
                <div className={`absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 ${social.bgColor} rotate-45`} />
              </div>
            </motion.div>

            {/* Platform Label on Hover */}
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            >
              <div className={`px-2 py-1 ${social.bgColor} text-white text-xs font-semibold rounded shadow-lg`}>
                {social.label}
              </div>
            </motion.div>

            {/* Glow Effect on Hover */}
            <motion.div
              className={`absolute inset-0 ${social.bgColor} rounded-full blur-xl opacity-0 group-hover:opacity-60 -z-10`}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.a>
      ))}

      <motion.div
        className="container-custom relative z-10"
        style={{ opacity, scale }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Retry Button - Top Left Corner */}
          {hasRun && outputName === personalInfo.name && (
            <motion.button
              onClick={handleRetry}
              className="fixed top-24 left-6 z-50 px-6 py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_40px_rgba(34,211,238,0.5)] flex items-center gap-3 group overflow-hidden"
              initial={{ opacity: 0, x: -100, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 1.5,
                duration: 0.8,
                type: "spring",
                stiffness: 150,
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 60px rgba(34, 211, 238, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="relative z-10"
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <FiCode className="text-xl" />
              </motion.div>
              <span className="relative z-10 text-sm md:text-base">Retry Run</span>
            </motion.button>
          )}

          {/* Java Code Editor or Name Display */}
          <motion.div
            variants={itemVariants}
            className="mb-12 relative max-w-4xl mx-auto"
          >
            {/* Code Editor Window - Hide when code runs */}
            {!hasRun && (
              <motion.div
                className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 rounded-3xl shadow-[0_0_80px_rgba(34,211,238,0.3)] border-2 border-cyan-500/30 overflow-hidden"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Animated Border Shimmer */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-50"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.4), transparent)',
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

                {/* Editor Header */}
                <div className="relative bg-gradient-to-r from-gray-800/90 via-gray-900/90 to-gray-800/90 px-6 py-4 flex items-center justify-between border-b-2 border-cyan-500/20">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]"
                      whileHover={{ scale: 1.3 }}
                    ></motion.div>
                    <motion.div
                      className="w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.6)]"
                      whileHover={{ scale: 1.3 }}
                    ></motion.div>
                    <motion.div
                      className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"
                      whileHover={{ scale: 1.3 }}
                    ></motion.div>
                  </div>
                  <motion.div
                    className="text-cyan-400 text-base font-mono font-bold flex items-center gap-2"
                    animate={{
                      textShadow: ['0 0 10px rgba(34,211,238,0.5)', '0 0 20px rgba(34,211,238,0.8)', '0 0 10px rgba(34,211,238,0.5)'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <FiCode className="text-cyan-400" />
                    Main.java
                  </motion.div>
                  <div className="w-16"></div>
                </div>

                {/* Code Area */}
                <div className="relative p-8 font-mono text-xl md:text-2xl">
                  {/* Glowing Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>

                  {/* Line Number */}
                  <div className="flex gap-6 relative z-10">
                    <motion.span
                      className="text-cyan-500/60 select-none font-bold"
                      animate={{
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      1
                    </motion.span>
                    <div className="flex-1">
                      {/* Typed Code with Enhanced Syntax Highlighting */}
                      <div className="text-left">
                        {typedCode.split('').map((char, i) => {
                          let color = 'text-gray-300';
                          let glow = '';
                          const beforeText = typedCode.slice(0, i + 1);

                          // Enhanced syntax highlighting with glow
                          if (beforeText.match(/System$/)) {
                            color = 'text-orange-400';
                            glow = 'drop-shadow-[0_0_8px_rgba(251,146,60,0.6)]';
                          }
                          else if (beforeText.match(/out$/)) {
                            color = 'text-blue-400';
                            glow = 'drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]';
                          }
                          else if (beforeText.match(/println$/)) {
                            color = 'text-purple-400';
                            glow = 'drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]';
                          }
                          else if (char === '(' || char === ')' || char === ';') {
                            color = 'text-cyan-400';
                            glow = 'drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]';
                          }
                          else if (char === '"') {
                            color = 'text-green-400';
                            glow = 'drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]';
                          }
                          else if (beforeText.match(/"[^"]*$/)) {
                            color = 'text-green-400';
                            glow = 'drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]';
                          }

                          return (
                            <motion.span
                              key={i}
                              className={`${color} ${glow} font-bold`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.1 }}
                            >
                              {char}
                            </motion.span>
                          );
                        })}

                        {/* Enhanced Blinking Cursor */}
                        {!isTypingComplete && (
                          <motion.span
                            className="inline-block w-3 h-7 bg-gradient-to-r from-cyan-400 to-blue-500 ml-1 rounded-sm shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Run Button */}
                {showRunButton && (
                  <motion.div
                    className="px-8 pb-8 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.button
                      onClick={handleRunCode}
                      className="relative px-10 py-4 rounded-2xl font-black text-white text-xl bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 shadow-[0_0_40px_rgba(34,197,94,0.6)] flex items-center gap-4 mx-auto overflow-hidden group"
                      whileHover={{
                        scale: 1.08,
                        boxShadow: "0 0 60px rgba(34, 197, 94, 0.9)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <FiCode className="text-3xl relative z-10" />
                      </motion.div>
                      <span className="relative z-10">Run Code ▶</span>
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Name Display - Show when code runs with EPIC ANIMATIONS */}
            {hasRun && (
              <motion.div
                className="text-center py-8 relative"
                initial={{ opacity: 0, scale: 0.3, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.34, 1.56, 0.64, 1],
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {/* Explosion Particles */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${
                        i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#3b82f6' : '#8b5cf6'
                      }, transparent)`,
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                    animate={{
                      scale: [0, 1.5, 0],
                      x: Math.cos((i / 20) * Math.PI * 2) * 200,
                      y: Math.sin((i / 20) * Math.PI * 2) * 200,
                      opacity: [1, 0.8, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* Glowing Ring Effect */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <div className="w-32 h-32 rounded-full border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.8)]"></div>
                </motion.div>

                <motion.h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 relative z-10"
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
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
                    {outputName}

                    {/* Glowing Shadow */}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent blur-2xl opacity-60"
                      animate={{
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      {outputName}
                    </motion.span>
                  </motion.span>

                  {outputName.length < personalInfo.name.length && (
                    <motion.span
                      className="inline-block w-2 h-10 md:h-14 lg:h-16 bg-gradient-to-b from-cyan-400 to-blue-500 ml-2 rounded-sm shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    />
                  )}
                </motion.h1>
              </motion.div>
            )}
          </motion.div>

          {/* Content - Only show after code runs */}
          {hasRun && outputName === personalInfo.name && (
            <>
              {/* Role with Enhanced Gradient Underline */}
              <motion.div
                variants={itemVariants}
                className="mb-6 text-center"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-200 inline-block relative pb-6"
                >
                  <span className="relative inline-block pb-3">
                    {personalInfo.role}

                    {/* Animated Gradient Underline */}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-2 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6, #22d3ee)',
                        backgroundSize: '200% 100%',
                      }}
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{
                        scaleX: 1,
                        backgroundPosition: ['0% 0%', '200% 0%'],
                      }}
                      transition={{
                        scaleX: { delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                        backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                      }}
                    />

                    {/* Glow Effect */}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-2 rounded-full blur-md"
                      style={{
                        background: 'linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6)',
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 0.6 }}
                      transition={{ delay: 0.6, duration: 1.2 }}
                    />
                  </span>
                </motion.h2>
              </motion.div>

              {/* Enhanced Status Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-2xl bg-green-500/20 border-2 border-green-500/50 backdrop-blur-xl shadow-[0_0_40px_rgba(34,197,94,0.4)] mx-auto relative overflow-hidden"
                initial={{ opacity: 0, y: 30, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/30 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="w-4 h-4 bg-green-400 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.8)] relative z-10"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.6, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="text-base md:text-lg font-black text-green-300 tracking-wide relative z-10">
                  Available for Opportunities
                </span>
              </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed font-medium text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons with Enhanced Animations */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <motion.button
              onClick={handleDownloadResume}
              className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold text-sm overflow-hidden shadow-lg shadow-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              <motion.span
                className="relative flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FiDownload size={16} />
                </motion.div>
                Download Resume
              </motion.span>
            </motion.button>

            <motion.a
              href="#contact"
              className="group relative px-6 py-2.5 bg-transparent text-gray-800 dark:text-white rounded-xl font-semibold text-sm border-2 border-gray-800 dark:border-white overflow-hidden backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                borderColor: "#3b82f6",
                y: -5
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="relative flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiMail size={16} />
                </motion.div>
                Contact Me
              </motion.span>
            </motion.a>

            <motion.a
              href="#projects"
              className="group relative px-6 py-2.5 bg-white/5 dark:bg-white/10 text-gray-800 dark:text-white rounded-xl font-semibold text-sm border-2 border-purple-500/50 overflow-hidden backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(168, 85, 247, 0.2)",
                borderColor: "#a855f7",
                y: -5
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="relative flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FiCode size={16} />
                </motion.div>
                View Projects
              </motion.span>
            </motion.a>
          </motion.div>
            </>
          )}

          {/* Scroll Indicator */}
          <motion.a
            href="#about"
            variants={itemVariants}
            className="inline-flex cursor-pointer group"
          >
            <motion.div
              className="flex flex-col items-center gap-3"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-10 h-16 border-3 border-gray-400 dark:border-gray-500 group-hover:border-blue-500 dark:group-hover:border-blue-400 rounded-full flex justify-center p-2 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="w-2 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                  animate={{
                    y: [0, 20, 0],
                    opacity: [1, 0.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiArrowDown className="text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors" size={24} />
              </motion.div>
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

