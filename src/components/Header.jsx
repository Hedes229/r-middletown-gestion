import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="glass-effect fixed-nav">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <img
            src="/assets/logo.png"
            alt="R. Middleton Gestion"
            className="logo-img"
          />
          <span className="logo-text">R MIDDLETON GESTION</span>
        </Link>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/') ? 'active' : ''}>Accueil</Link></li>
          <li><Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>À Propos</Link></li>
          <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
          <li><Link to="/contact" className="cta-gradient btn-pill">Prendre rendez-vous</Link></li>
        </ul>
        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Header;
