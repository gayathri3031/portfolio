import React, { useState, useEffect } from 'react';
import { readCSV } from '../utils/csvReader';

const Hero = () => {
  const [personalData, setPersonalData] = useState({});

  useEffect(() => {
    const loadPersonalData = async () => {
      const data = await readCSV('data/personal.csv');
      const personalInfo = {};
      data.forEach(row => {
        personalInfo[row.field] = row.value;
      });
      setPersonalData(personalInfo);
    };

    loadPersonalData();
  }, []);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `
        linear-gradient(
          135deg, 
          rgba(102, 126, 234, 0.85) 0%, 
          rgba(118, 75, 162, 0.85) 50%, 
          rgba(240, 147, 251, 0.85) 100%
        ),
        url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white',
      textAlign: 'center',
      padding: '80px 20px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Professional Blur Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backdropFilter: 'blur(3px)',
        background: 'rgba(0, 0, 0, 0.1)',
        pointerEvents: 'none'
      }} />
      
      {/* Elegant Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        pointerEvents: 'none',
        background: `
          radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
        `
      }} />
      
      {/* Subtle Geometric Shapes */}
      <div style={{
        position: 'absolute',
        top: '12%',
        right: '10%',
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))',
        animation: 'float 6s ease-in-out infinite',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '8%',
        width: '120px',
        height: '120px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
        borderRadius: '25px',
        transform: 'rotate(45deg)',
        animation: 'float 8s ease-in-out infinite reverse',
        pointerEvents: 'none'
      }} />

      {/* Subtle Abstract Lines */}
      <div style={{
        position: 'absolute',
        top: '25%',
        left: '15%',
        width: '280px',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent)',
        transform: 'rotate(15deg)',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '30%',
        right: '20%',
        width: '230px',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
        transform: 'rotate(-15deg)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '800px', zIndex: 2, position: 'relative' }}>
        <h1 style={{ 
          fontSize: '2.8rem', 
          fontWeight: '600', 
          color: '#fff', 
          marginBottom: '12px',
          lineHeight: '1.1',
          fontFamily: 'Poppins, sans-serif',
          letterSpacing: '-0.02em'
        }}>
          {personalData.name || 'Gayathri'}
        </h1>
        
        <p style={{
          fontSize: '1rem',
          fontWeight: '300',
          marginBottom: '20px',
          opacity: 0.95,
          fontFamily: 'Poppins, sans-serif',
          color: '#fff',
          letterSpacing: '0.01em',
          textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)'
        }}>
          I'm a professional <span style={{ fontWeight: '400' }}>Backend Java Developer</span> from Chennai
        </p>
        
        <p style={{
          fontSize: '0.9rem',
          lineHeight: '1.5',
          opacity: 0.9,
          maxWidth: '580px',
          margin: '0 auto 30px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '300',
          color: '#fff',
          letterSpacing: '0.01em',
          textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)'
        }}>
          {personalData.summary}
        </p>
        
        <div style={{ marginTop: '30px' }}>
          <button
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              color: 'white',
              padding: '10px 24px',
              borderRadius: '25px',
              fontSize: '0.85rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginRight: '12px',
              fontFamily: 'Poppins, sans-serif',
              textTransform: 'none',
              backdropFilter: 'blur(10px)',
              letterSpacing: '0.02em',
              textShadow: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.35)';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Learn More
          </button>
          
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.7)',
              color: 'white',
              padding: '10px 24px',
              borderRadius: '25px',
              fontSize: '0.85rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Poppins, sans-serif',
              textTransform: 'none',
              letterSpacing: '0.02em',
              textShadow: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
              e.target.style.color = '#667eea';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Refined CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero-content {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero; 
