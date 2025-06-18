import React from 'react';
import logo from '../assets/logo.png';
import banner from '../components/Banner'; // 1. Import the banner
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header style={{ backgroundColor: 'white', padding: '1rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo + Site Name */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: '121px', height: 'auto', marginRight: '1rem' }}
            />
          </div>

          {/* Navigation */}
          <nav>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/service" style={linkStyle}>Services</Link>
            <Link to="/contact" style={linkStyle}>Contact Us</Link>
            
          </nav>
        </div>
      </header>

    
    </>
  );
}

const linkStyle = {
  color: 'black',
  marginLeft: '1rem',
  textDecoration: 'none',
  fontWeight: '500',
  marginRight: '2rem'
};

export default Header;
