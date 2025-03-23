import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">My Portfolio</div>
        
        {/* Navigation links */}
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;