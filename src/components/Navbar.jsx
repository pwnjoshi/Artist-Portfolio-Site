import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar glass">
      <div className="container">
        <div className="navbar-content flex-between">
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">
              <span className="logo-text gradient-text">Bishal</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="navbar-links">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/gallery" className={`nav-link ${isActive('/gallery')}`}>
              Gallery
            </Link>
            <Link to="/dueling" className={`nav-link ${isActive('/dueling')}`}>
              Dueling
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
