import { motion } from 'framer-motion';

const RocketAchievementCardSimple = ({ 
  title = "High Performance APIs", 
  description = "Built APIs serving 1,000+ users with 99.9% uptime" 
}) => {
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: '0 20px 60px rgba(168, 85, 247, 0.5)',
      }}
    >
      <div className="flex items-start gap-6 relative z-10">
        {/* Rocket Icon Container - Flies on hover */}
        <motion.div 
          className="relative flex-shrink-0 text-7xl"
          whileHover={{
            y: -400,
            x: 100,
            rotate: -20,
            scale: 0.3,
            opacity: 0,
            transition: {
              duration: 1.5,
              ease: "easeOut",
            }
          }}
        >
          🚀
          
          {/* Glowing trail on hover */}
          <motion.div
            className="absolute left-1/2 top-full w-3 h-0 rounded-full group-hover:h-96"
            style={{
              background: 'linear-gradient(to bottom, rgba(168, 85, 247, 0.9), rgba(236, 72, 153, 0.6), transparent)',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)',
              transition: 'height 1.5s ease-out',
            }}
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {title}
          </h4>
          
          <p className="text-purple-100 text-base md:text-lg">
            {description}
          </p>

          {/* Decorative line */}
          <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full mt-4" />
        </div>
      </div>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl pointer-events-none"
        style={{
          transition: 'opacity 0.5s',
        }}
      />
    </motion.div>
  );
};

export default RocketAchievementCardSimple;

