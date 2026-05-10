import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronDown } from 'lucide-react';
import WCACard from './WCACard';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  return (
    <section className="hero">
      <div className="hero-bg-glow" />
      <div className="hero-bg-glow-2" />
      
      <div className="container">
        <div className="hero-container">
          {/* Left Side */}
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants} className="hero-label">
              Precision & Artistry
            </motion.span>
            
            <motion.h1 variants={itemVariants} className="hero-title">
              Engineering Speed,<br />
              <span className="gradient-text">Crafting Art</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="hero-description">
              Discover a portfolio where the high-speed precision of competitive WCA cubing meets the meticulous detail of fine portrait art.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-buttons">
              <Link to="/gallery" className="btn btn-primary">
                View Sketches <ArrowRight size={18} />
              </Link>
              <a
                href="https://www.worldcubeassociation.org/persons/2025OJHA01"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                WCA Profile <ExternalLink size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div 
            className="hero-card-container"
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring', bounce: 0.4 }}
            style={{ y }}
          >
            <WCACard />
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="scroll-indicator"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span>SCROLL</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
