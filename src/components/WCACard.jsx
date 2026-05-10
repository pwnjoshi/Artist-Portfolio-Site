import { motion } from 'framer-motion';
import { User, MapPin, Trophy, Timer } from 'lucide-react';
import './WCACard.css';

const WCACard = () => {
  return (
    <motion.div 
      className="wca-card"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Header Section */}
      <div className="wca-header">
        <span className="wca-label">WCA PROFILE</span>
        <div className="wca-profile-badge">
          <img src="/profile.jpg" alt="Bishal Ojha" className="profile-picture" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="wca-profile-info">
        <h3 className="wca-name gradient-text-alt">Bishal Ojha</h3>
        <div className="wca-meta">
          <span className="wca-id">
            <User className="icon" />
            2025OJHA01
          </span>
          <span className="wca-country">
            <MapPin className="icon" />
            <span className="country-name">Nepal</span>
            <span className="flag">🇳🇵</span>
          </span>
        </div>
      </div>

      {/* Stats Section */}
      <div className="wca-stats">
        <div className="stat-item">
          <span className="stat-label">Competitions</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Trophy size={16} className="icon" />
            <span className="stat-value">3</span>
          </div>
        </div>

        <div className="stat-item">
          <span className="stat-label">Total Solves</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Timer size={16} className="icon" />
            <span className="stat-value">124</span>
          </div>
        </div>
      </div>

      {/* Status Footer */}
      <div className="wca-footer">
        <span className="wca-status">Status</span>
        <span className="status-badge">
          <span className="status-dot"></span>
          Active
        </span>
      </div>
    </motion.div>
  );
};

export default WCACard;
