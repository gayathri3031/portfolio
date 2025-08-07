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
    <>
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
        <div className="nav-container" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          
          {/* Unique Stylish G Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="nav-logo"
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
            {/* Modern Circular G Logo */}
            <div className="logo-circle" style={{
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
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                opacity: 0.1
              }} />
              
              {/* Inner Circle Border */}
              <div className="logo-inner" style={{
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
              
              {/* Stylish G Letter */}
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span className="logo-letter" style={{
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
            </div>
            
            {/* Brand Text */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}>
              <span className="brand-name" style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#2d3748',
                fontFamily: 'Poppins, sans-serif',
                letterSpacing: '-0.5px',
                lineHeight: '1.1'
              }}>
                Gayathri
              </span>
              <span className="brand-title" style={{
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
          <ul className="desktop-nav" style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            gap: '25px'
          }}>
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
            className="mobile-menu-btn"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.3rem',
              color: '#495057',
              cursor: 'pointer',
              padding: '8px',
              display: 'none',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
              e.target.style.color = '#667eea';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#495057';
            }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-nav" style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            borderTop: '1px solid #e9ecef',
            boxShadow: '0 4px 20px rgba(108, 117, 125, 0.15)',
            borderRadius: '0 0 10px 10px',
            zIndex: 999
          }}>
            <ul style={{
              listStyle: 'none',
              margin: 0,
              padding: '20px'
            }}>
              {navItems.map((item, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '1rem',
                      fontWeight: '500',
                      color: '#495057',
                      cursor: 'pointer',
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px 16px',
                      fontFamily: 'Poppins, sans-serif',
                      transition: 'all 0.3s ease',
                      borderRadius: '6px',
                      display: 'block'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
                      e.target.style.color = '#667eea';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
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
      </nav>

      {/* CSS for responsive design */}
      <style jsx="true">{`
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 15px !important;
          }
          
          .nav-logo {
            gap: 10px !important;
          }
          
          .logo-circle {
            width: 40px !important;
            height: 40px !important;
          }
          
          .logo-inner {
            width: 35px !important;
            height: 35px !important;
          }
          
          .logo-letter {
            font-size: 1.1rem !important;
          }
          
          .brand-name {
            font-size: 1rem !important;
          }
          
          .brand-title {
            font-size: 0.55rem !important;
            letter-spacing: 1px !important;
          }
          
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: block !important;
          }
        }
        
        @media (max-width: 480px) {
          .nav-container {
            padding: 0 10px !important;
          }
        }
      `}</style>
    </>
  );
};

export default TopNavigation; 
