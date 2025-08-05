import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const TopNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Experiences', id: 'about' },
    { label: 'Skills', id: 'resume' },
    { label: 'Projects', id: 'portfolio' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: '12px 0',
      zIndex: 1000,
      borderBottom: '1px solid rgba(108, 117, 125, 0.08)',
      boxShadow: '0 2px 10px rgba(108, 117, 125, 0.08)',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Unique Stylish GB Logo */}
        <div 
          onClick={() => scrollToSection('home')}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {/* Modern Circular GB Logo */}
          <div style={{
            position: 'relative',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Outer Circle */}
            <div style={{
              position: 'absolute',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              opacity: 0.1
            }} />
            
            {/* Inner Circle Border */}
            <div style={{
              position: 'absolute',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '2px solid transparent',
              background: 'linear-gradient(135deg, #667eea, #f093fb) border-box',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude'
            }} />
            
            {/* Stylish GB Letters */}
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Letter G */}
              <span style={{
                fontSize: '1.3rem',
                fontWeight: '800',
                fontFamily: 'Poppins, sans-serif',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '0px',
                lineHeight: '1',
                position: 'relative'
              }}>
                G
              </span>
            </div>
            
            {/* Accent Elements */}
            <div style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              width: '4px',
              height: '4px',
              background: 'linear-gradient(45deg, #f093fb, #667eea)',
              borderRadius: '50%',
              opacity: 0.8,
              animation: 'orbit1 4s linear infinite'
            }} />
            
            <div style={{
              position: 'absolute',
              bottom: '6px',
              left: '6px',
              width: '3px',
              height: '3px',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              borderRadius: '50%',
              opacity: 0.6,
              animation: 'orbit2 4s linear infinite'
            }} />
          </div>
          
          {/* Brand Text */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <span style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              color: '#2d3748',
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '-0.5px',
              lineHeight: '1.1'
            }}>
              Gayathri
            </span>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              lineHeight: '1'
            }}>
              Backend Dev
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          gap: '25px'
        }} className="desktop-nav">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#495057',
                  cursor: 'pointer',
                  padding: '8px 0',
                  transition: 'all 0.3s ease',
                  borderBottom: '2px solid transparent',
                  fontFamily: 'Poppins, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#667eea';
                  e.target.style.borderBottomColor = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#495057';
                  e.target.style.borderBottomColor = 'transparent';
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.3rem',
            color: '#495057',
            cursor: 'pointer',
            padding: '5px'
          }}
          className="mobile-menu-button"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          borderTop: '1px solid #e9ecef',
          boxShadow: '0 4px 20px rgba(108, 117, 125, 0.15)',
          borderRadius: '0 0 10px 10px'
        }} className="mobile-nav">
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: '15px 30px'
          }}>
            {navItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '12px' }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    color: '#495057',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 0',
                    fontFamily: 'Poppins, sans-serif',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#667eea';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#495057';
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CSS for responsive design and animations */}
      <style jsx>{`
        .desktop-nav {
          display: flex;
        }
        .mobile-menu-button {
          display: none;
        }
        
        @keyframes orbit1 {
          0% {
            transform: rotate(0deg) translateX(20px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(20px) rotate(-360deg);
          }
        }
        
        @keyframes orbit2 {
          0% {
            transform: rotate(180deg) translateX(18px) rotate(-180deg);
          }
          100% {
            transform: rotate(540deg) translateX(18px) rotate(-540deg);
          }
        }
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-button {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default TopNavigation; 