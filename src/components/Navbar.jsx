import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import { Sun, Moon, Menu, X, GraduationCap } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); 

  const navLinks = [
    { name: 'Home', type: 'scroll', path: 'home' },
    { name: 'About', type: 'scroll', path: 'about' },
    { name: 'Problem Statements', type: 'route', path: '/problems' },
    { name: 'Contribute', type: 'scroll', path: 'contribute' },
    { name: 'Guidelines', type: 'scroll', path: 'guidelines' },
    { name: 'Timeline', type: 'scroll', path: 'timeline' },
  ];

  const handleNavigation = (link) => {
    setIsMenuOpen(false); 
    if (link.type === 'route') {
      navigate(link.path);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(link.path);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(link.path);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <Link to="/" className="nav-logo">
        <GraduationCap size={32} color="#FFD700" strokeWidth={1.5} />
      </Link>

      {/* Center: Links (Hidden on Mobile) */}
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <div
            key={link.name}
            className={`nav-link ${location.pathname === link.path ? 'active-link' : ''}`}
            onClick={() => handleNavigation(link)}
            style={{ cursor: 'pointer' }}
          >
            {link.name}
          </div>
        ))}
        {/* REMOVED the "mobile-theme-toggle" text button here */}
      </div>

      {/* Right: Actions (Theme Icon + Hamburger) */}
      <div className="nav-actions">
        {/* 1. Theme Toggle (Always Visible now) */}
        <div onClick={toggleTheme} className="nav-icon">
          {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </div>

        {/* 2. Hamburger Menu (Mobile Only) */}
        <div className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;