import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <div className="footer-logo">
              Bishal Ojha
              <span className="footer-logo-dot"></span>
            </div>
            <p className="footer-tagline">
              Exploring the intersection of logic, speed, and creative expression.
            </p>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p className="copyright">© {currentYear} Bishal Ojha. All rights reserved.</p>
          <p>Powered by <a href="https://techsangi.com.np" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Tech Sangi</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
