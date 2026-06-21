import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Code, Sparkles } from 'lucide-react';

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smooth cursor following
  const springX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  // Transform values for 3D tilt effect
  const rotateX = useTransform(springY, [-300, 300], [15, -15]);
  const rotateY = useTransform(springX, [-300, 300], [-15, 15]);

  // For glow effect that follows cursor
  const glowX = useTransform(springX, [-300, 300], ['-50%', '50%']);
  const glowY = useTransform(springY, [-300, 300], ['-50%', '50%']);

  // For floating glass particles that follow cursor
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 8,
      speed: 0.5 + Math.random() * 1.5,
      delay: Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.3,
    }));
    setParticles(newParticles);
  }, []);

  // Mouse move handler
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <section 
      className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-12 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor-following glow effect */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79, 140, 247, 0.15) 0%, rgba(124, 58, 237, 0.05) 50%, transparent 70%)',
          x: glowX,
          y: glowY,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Floating glass particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full glass-particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.speed * 2,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glass Morphism Overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Glass Morphism Cards */}
      <div className="absolute top-20 right-20 z-[2] hidden lg:block">
        <motion.div 
          className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/60 border border-white/80 shadow-xl"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-gray-700 font-medium">Active Now</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-20 z-[2] hidden lg:block">
        <motion.div 
          className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/60 border border-white/80 shadow-xl"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Projects</span>
            <span className="text-gray-800 text-2xl font-bold">15+</span>
          </div>
        </motion.div>
      </div>
      
      {/* Content */}
      <motion.div 
        className="md:w-1/2 mb-12 md:mb-0 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="relative"
          style={{
            perspective: 1000,
          }}
        >
          <motion.div
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div variants={itemVariants}>
              <motion.div 
                className="inline-block glass-card px-4 py-1.5 rounded-full mb-4 backdrop-blur-xl bg-white/60 border border-white/80"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <span className="text-gray-700 text-sm font-medium flex items-center gap-2">
                  <Sparkles size={14} className="text-blue-500" />
                  Available for projects
                </span>
              </motion.div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
            >
              Hi, I'm{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Sami Khan
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl text-gray-700 mb-6 flex items-center gap-2"
            >
              <Code size={28} className="text-blue-500" />
              Full Stack Developer & UI/UX Designer
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-8 max-w-lg text-lg leading-relaxed"
            >
              I create beautiful, functional web applications with modern technologies.
              Passionate about clean code, responsive design, and great user experiences.
            </motion.p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href="./Work"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.button 
              className="glass-card px-8 py-3 rounded-lg font-medium flex items-center gap-2 backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-200/50 text-gray-800 hover:border-blue-400/70 transition-all duration-300"
              whileHover={{ 
                boxShadow: "0 10px 30px -10px rgba(79, 140, 247, 0.3)",
              }}
            >
              View My Work
              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </motion.a>
          
          <motion.a
            href="/Sami-khan-new-resume1 (3).pdf"
            download="Sami_CV.pdf"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <button className="glass-card px-8 py-3 rounded-lg font-medium backdrop-blur-xl bg-white/60 border border-gray-200/80 text-gray-700 hover:bg-white/80 transition-all duration-300">
              Download CV
            </button>
          </motion.a>
        </motion.div>
        
        {/* Social Links */}
        <motion.div 
          variants={itemVariants}
          className="flex gap-4 mt-8"
        >
          {[
            { icon: Github, href: "https://github.com/Sami-khan222/", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/sami-khana8b591292", label: "LinkedIn" },
            { icon: Mail, href: "mailto:your.email@example.com", label: "Email" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full backdrop-blur-xl bg-white/60 border border-gray-200/80 hover:bg-white/80 transition-all duration-300"
              variants={socialVariants}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon size={22} className="text-gray-600 hover:text-blue-600 transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Profile Image with Glass Effect */}
      <motion.div 
        className="md:w-1/2 flex justify-center relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.5
        }}
      >
        <motion.div 
          className="relative"
          style={{
            perspective: 1000,
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            style={{
              rotateX: isHovering ? rotateX : 0,
              rotateY: isHovering ? rotateY : 0,
              transformStyle: "preserve-3d",
            }}
            animate={{
              scale: isHovering ? 1.05 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glass Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-full p-[3px] glass-card"
                animate={{
                  background: [
                    "conic-gradient(from 0deg, rgba(79,140,247,0.6), rgba(124,58,237,0.6), rgba(79,140,247,0.6))",
                    "conic-gradient(from 360deg, rgba(79,140,247,0.6), rgba(124,58,237,0.6), rgba(79,140,247,0.6))",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden backdrop-blur-xl bg-white/40">
                  <img 
                    src='/image.jpg.jpeg' 
                    alt="Sami Khan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating Glass Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 glass-card rounded-full backdrop-blur-xl bg-blue-400/30 border border-blue-300/30"
                  style={{
                    top: `${50 + 50 * Math.cos(i * Math.PI / 6 + Math.PI / 2)}%`,
                    left: `${50 + 50 * Math.sin(i * Math.PI / 6 + Math.PI / 2)}%`,
                  }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Glass Badges */}
          <motion.div
            className="absolute -top-2 -right-2 glass-card px-4 py-2 rounded-full backdrop-blur-xl bg-white/70 border border-white/80 shadow-lg"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-sm font-medium text-gray-700">✨ 5+ Projects</span>
          </motion.div>

          <motion.div
            className="absolute -bottom-2 -left-2 glass-card px-4 py-2 rounded-full backdrop-blur-xl bg-white/70 border border-white/80 shadow-lg"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-sm font-medium text-gray-700">⚡ Available</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        /* Glass Morphism Base */
        .glass-card {
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }

        /* Glass particles */
        .glass-particle {
          background: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          box-shadow: 0 4px 16px rgba(79, 140, 247, 0.1);
          border-radius: 50%;
          pointer-events: none;
        }

        /* Floating animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .floating {
          animation: float 3s ease-in-out infinite;
        }

        /* Glass shimmer animation */
        @keyframes glassShimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .glass-shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: glassShimmer 3s infinite;
        }

        /* Custom scrollbar - Light theme */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, rgba(79,140,247,0.3), rgba(124,58,237,0.3));
          border-radius: 5px;
          backdrop-filter: blur(10px);
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, rgba(79,140,247,0.5), rgba(124,58,237,0.5));
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .glass-card {
            backdrop-filter: blur(12px) saturate(150%);
            -webkit-backdrop-filter: blur(12px) saturate(150%);
          }
        }
      `}</style>
    </section>
  );
};

export default Home;