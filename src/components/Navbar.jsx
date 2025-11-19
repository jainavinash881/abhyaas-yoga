import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../index.css'; // Ensure styles are loaded

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(255, 247, 247, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(232, 167, 180, 0.2)'
  };

  return (
    <nav style={navStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '90px' }}>
        
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', letterSpacing: '1px' }}>Abhyaas Yoga</h2>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: window.innerWidth > 768 ? 'flex' : 'none', alignItems: 'center', gap: '40px' }}>
          {['About', 'Schedule', 'Online', 'Corporate'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`} 
              style={{ textDecoration: 'none', color: 'var(--primary-maroon)', fontWeight: '500' }}
            >
              {item}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary">Book Trial</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div style={{ display: window.innerWidth <= 768 ? 'block' : 'none' }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="#7A2030" /> : <Menu size={28} color="#7A2030" />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div style={{ 
          position: 'absolute', top: '90px', left: 0, width: '100%', 
          background: 'var(--cream-white)', padding: '20px', 
          boxShadow: 'var(--shadow-soft)', display: 'flex', flexDirection: 'column', gap: '20px' 
        }}>
          {['About', 'Schedule', 'Online', 'Corporate'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              style={{ textDecoration: 'none', color: 'var(--primary-maroon)', fontSize: '18px', fontWeight: '600' }}
            >
              {item}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary" style={{textAlign:'center'}}>Book Trial Class</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;