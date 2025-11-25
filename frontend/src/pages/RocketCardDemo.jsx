import { motion } from 'framer-motion';
import RocketAchievementCard from '../components/RocketAchievementCard';
import RocketAchievementCardSimple from '../components/RocketAchievementCardSimple';

const RocketCardDemo = () => {
  const achievements = [
    {
      title: "High Performance APIs",
      description: "Built APIs serving 1,000+ users with 99.9% uptime and lightning-fast response times"
    },
    {
      title: "Scalable Architecture",
      description: "Designed microservices handling 10M+ requests daily with auto-scaling capabilities"
    },
    {
      title: "Cloud Infrastructure",
      description: "Deployed production systems on AWS with CI/CD pipelines and zero-downtime deployments"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 px-4">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          animate={{
            backgroundImage: [
              'linear-gradient(to right, #a855f7, #ec4899)',
              'linear-gradient(to right, #ec4899, #a855f7)',
              'linear-gradient(to right, #a855f7, #ec4899)',
            ],
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🚀 Rocket Achievement Cards
        </motion.h1>
        <motion.p
          className="text-2xl text-yellow-300 font-bold mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            textShadow: '0 0 20px rgba(251, 191, 36, 0.5)',
          }}
        >
          ⚡ HOVER TO LAUNCH THE ROCKET! ⚡
        </motion.p>
        <motion.p
          className="text-lg text-purple-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Watch the rocket fly completely off the screen with trails, sparks & smoke! 🔥
        </motion.p>
      </motion.div>

      {/* Cards Grid - Simple Version (Hover directly on rocket) */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          ✨ Simple Version - Hover the Rocket Directly ✨
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              style={{ overflow: 'visible' }}
            >
              <RocketAchievementCardSimple
                title={achievement.title}
                description={achievement.description}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cards Grid - Advanced Version (Hover on card) */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          🚀 Advanced Version - Hover the Card 🚀
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              style={{ overflow: 'visible' }}
            >
              <RocketAchievementCard
                title={achievement.title}
                description={achievement.description}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <motion.div
        className="max-w-2xl mx-auto mt-20 p-8 rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(34, 211, 238, 0.15))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">✨ Animation Features</h2>
        <ul className="space-y-3 text-blue-100">
          <li className="flex items-start gap-3">
            <span className="text-2xl">🚀</span>
            <span><strong>Rocket Flies Away:</strong> Flies 300px upward completely off screen with 15° tilt!</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">📢</span>
            <span><strong>"LAUNCH!" Text:</strong> Glowing yellow text appears and flies upward</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✨</span>
            <span><strong>Extended Trail:</strong> 350px gradient trail follows the rocket all the way up</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">💥</span>
            <span><strong>Spark Burst:</strong> 8 sparks explode outward in all directions</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🔥</span>
            <span><strong>Fire Trail:</strong> 6 glowing fire particles (yellow, orange, red)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">💨</span>
            <span><strong>Smoke Clouds:</strong> 4 exhaust clouds that expand and fade</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">⚡</span>
            <span><strong>Speed Lines:</strong> 5 motion lines create "whoosh" effect</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">📳</span>
            <span><strong>Card Shake:</strong> Subtle vibration when rocket launches</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🌟</span>
            <span><strong>Glassmorphism:</strong> Modern frosted glass with neon gradient borders</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">📱</span>
            <span><strong>Fully Responsive:</strong> Works perfectly on all screen sizes</span>
          </li>
        </ul>
      </motion.div>

      {/* Code Usage Example */}
      <motion.div
        className="max-w-4xl mx-auto mt-12 p-8 rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(59, 130, 246, 0.15))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">📦 Usage</h2>
        <pre className="bg-gray-900/50 p-6 rounded-xl overflow-x-auto">
          <code className="text-green-300 text-sm">
{`import RocketAchievementCard from './components/RocketAchievementCard';

<RocketAchievementCard
  title="High Performance APIs"
  description="Built APIs serving 1,000+ users"
/>`}
          </code>
        </pre>
      </motion.div>
    </div>
  );
};

export default RocketCardDemo;

