import { motion } from 'framer-motion';
import { useState } from 'react';

const RocketAchievementCard = ({
  title = "High Performance APIs",
  description = "Built APIs serving 1,000+ users with 99.9% uptime"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    console.log('🚀 HOVER START - Rocket should launch!');
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    console.log('🛬 HOVER END - Rocket should return');
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto p-8 rounded-3xl cursor-pointer group"
      style={{
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.15))',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(168, 85, 247, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        overflow: 'visible',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={isHovered ? {
        opacity: 1,
        y: 0,
        x: [0, -2, 2, -2, 2, 0],
      } : {
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={isHovered ? {
        x: { duration: 0.3, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
        default: { duration: 0.6, ease: "easeOut" }
      } : {
        duration: 0.6,
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.03,
        borderColor: 'rgba(168, 85, 247, 0.6)',
        boxShadow: '0 20px 60px rgba(168, 85, 247, 0.5)',
      }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(236, 72, 153, 0.25))',
        }}
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full"
          style={{
            top: `${20 + i * 15}%`,
            right: `${10 + i * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{ 
            duration: 2 + i * 0.3, 
            repeat: Infinity, 
            delay: i * 0.2 
          }}
        />
      ))}

      {/* Spark particles during hover */}
      {isHovered && [...Array(8)].map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full"
          style={{
            left: '50%',
            top: '50%',
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: Math.cos((i * Math.PI * 2) / 8) * 60,
            y: Math.sin((i * Math.PI * 2) / 8) * 60,
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Speed lines effect */}
      {isHovered && [...Array(5)].map((_, i) => (
        <motion.div
          key={`speed-${i}`}
          className="absolute left-8 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-transparent rounded-full"
          style={{
            top: `${30 + i * 15}%`,
          }}
          initial={{
            x: 0,
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            x: -80,
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0.5],
          }}
          transition={{
            duration: 0.6,
            delay: i * 0.05,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="flex items-start gap-6 relative z-10">
        {/* Launch text */}
        {isHovered && (
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-yellow-400 z-50"
            style={{
              textShadow: '0 0 20px rgba(251, 191, 36, 0.8), 0 0 40px rgba(251, 191, 36, 0.5)',
            }}
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1.2, 1.2, 0.8],
              y: [0, -20, -40, -60],
            }}
            transition={{
              duration: 1,
              times: [0, 0.2, 0.6, 1],
              ease: "easeOut"
            }}
          >
            LAUNCH! 🔥
          </motion.div>
        )}

        {/* Rocket Icon Container */}
        <motion.div
          className="relative flex-shrink-0 z-50"
          style={{
            backgroundColor: isHovered ? 'rgba(255, 0, 0, 0.2)' : 'transparent',
          }}
          animate={isHovered ? {
            y: -300,
            x: 50,
            rotate: -15,
            scale: 0.5,
            opacity: 0,
          } : {
            y: 0,
            x: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.34, 1.56, 0.64, 1],
            type: "tween",
          }}
        >
          {/* Rocket glow */}
          <motion.div
            className="absolute inset-0 blur-2xl opacity-60 rounded-full"
            animate={isHovered ? {
              scale: [1, 1.5, 1.3],
              opacity: [0.6, 0.9, 0.7],
            } : {
              scale: 1,
              opacity: 0.4,
            }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.6))',
            }}
          />

          {/* Rocket emoji */}
          <motion.div
            className="text-7xl relative z-10"
            animate={isHovered ? {
              scale: [1, 1.1, 1.05],
            } : {
              scale: 1,
            }}
            transition={{ duration: 0.6 }}
          >
            🚀
          </motion.div>

          {/* Glowing trail */}
          {isHovered && (
            <motion.div
              className="absolute left-1/2 top-full w-3 rounded-full"
              style={{
                background: 'linear-gradient(to bottom, rgba(168, 85, 247, 0.9), rgba(236, 72, 153, 0.6), transparent)',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)',
              }}
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: 350,
                opacity: [0, 1, 0.8, 0.3],
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          )}

          {/* Fire trail particles */}
          {isHovered && [...Array(6)].map((_, i) => (
            <motion.div
              key={`fire-${i}`}
              className="absolute left-1/2 top-full rounded-full"
              style={{
                background: i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#f97316' : '#ef4444',
                transform: 'translateX(-50%)',
                width: `${12 - i}px`,
                height: `${12 - i}px`,
                boxShadow: `0 0 ${10 + i * 2}px ${i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#f97316' : '#ef4444'}`,
              }}
              initial={{ y: 0, opacity: 1, scale: 1 }}
              animate={{
                y: 60 + i * 30,
                opacity: 0,
                scale: 0.3,
              }}
              transition={{
                duration: 0.8 + i * 0.1,
                delay: i * 0.08,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Smoke/Exhaust clouds */}
          {isHovered && [...Array(4)].map((_, i) => (
            <motion.div
              key={`smoke-${i}`}
              className="absolute left-1/2 top-full rounded-full blur-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                transform: 'translateX(-50%)',
                width: `${20 + i * 5}px`,
                height: `${20 + i * 5}px`,
              }}
              initial={{ y: 0, opacity: 0.6, scale: 0.5 }}
              animate={{
                y: 40 + i * 20,
                x: (i % 2 === 0 ? 1 : -1) * (10 + i * 5),
                opacity: 0,
                scale: 1.5,
              }}
              transition={{
                duration: 1 + i * 0.15,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <motion.h4 
            className="text-2xl md:text-3xl font-bold text-white mb-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block"
              whileHover={{ 
                scale: 1.05,
                color: '#e879f9',
              }}
            >
              {title}
            </motion.span>
          </motion.h4>
          
          <motion.p 
            className="text-purple-100 text-base md:text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            {description}
          </motion.p>

          {/* Decorative animated line */}
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full mt-4"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl overflow-hidden pointer-events-none"
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: '200%' } : { x: '-100%' }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default RocketAchievementCard;

