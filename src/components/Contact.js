import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { readCSV } from '../utils/csvReader';

const Contact = () => {
  const [personalData, setPersonalData] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const loadPersonalData = async () => {
      const data = await readCSV('/data/personal.csv');
      const personalInfo = {};
      data.forEach(row => {
        personalInfo[row.field] = row.value;
      });
      setPersonalData(personalInfo);
    };

    // Check if mobile and handle resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    loadPersonalData();

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleContactClick = (type, value) => {
    switch (type) {
      case 'phone':
        window.open(`tel:${value}`);
        break;
      case 'email':
        window.open(`mailto:${value}`);
        break;
      case 'linkedin':
        window.open(value.startsWith('http') ? value : `https://${value}`, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center', position: 'relative' }}>
        <h2 style={{ 
          fontSize: isMobile ? '1.6rem' : '2rem', 
          fontWeight: '700', 
          textAlign: 'center', 
          marginBottom: '15px', 
          color: '#495057', 
          fontFamily: 'Poppins, sans-serif',
          position: 'relative'
        }}>
          Get In Touch
          <div style={{
            content: '""',
            position: 'absolute',
            bottom: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50px',
            height: '3px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            borderRadius: '2px'
          }} />
        </h2>

        {/* Professional Message */}
        <p style={{ 
          fontSize: isMobile ? '0.9rem' : '1rem', 
          color: '#6c757d', 
          textAlign: 'center', 
          marginBottom: isMobile ? '30px' : '50px',
          fontFamily: 'Poppins, sans-serif',
          lineHeight: '1.6',
          padding: isMobile ? '0 20px' : '0'
        }}>
          Interested in working together? Let's have a conversation about how I can contribute to your team.
        </p>

        <div className="contact-cards-container" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: isMobile ? '15px' : '30px', 
          marginBottom: '30px', 
          flexWrap: 'wrap',
          maxWidth: '800px',
          margin: '0 auto',
          padding: isMobile ? '0 15px' : '0'
        }}>
          {/* Phone Card */}
          <div 
            onClick={() => handleContactClick('phone', personalData.phone)}
            className="contact-card"
            style={{
              background: '#fff',
              borderRadius: '12px',
              padding: isMobile ? '20px 15px' : '30px 25px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(108, 117, 125, 0.1)',
              border: '1px solid #e9ecef',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: isMobile ? 'calc(100% - 30px)' : '200px',
              maxWidth: isMobile ? '100%' : 'none',
              flex: isMobile ? '1 1 100%' : '1 1 auto'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 8px 30px rgba(108, 117, 125, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0px)';
              e.target.style.boxShadow = '0 4px 20px rgba(108, 117, 125, 0.1)';
            }}
          >
            <FaPhone style={{ 
              fontSize: isMobile ? '1.3rem' : '1.5rem', 
              color: '#6c757d', 
              marginBottom: isMobile ? '10px' : '12px' 
            }} />
            <h4 style={{ 
              fontSize: isMobile ? '0.9rem' : '0.95rem', 
              fontWeight: '600', 
              color: '#495057', 
              marginBottom: '4px' 
            }}>Phone</h4>
            <span style={{ 
              color: '#666', 
              fontSize: isMobile ? '0.75rem' : '0.8rem' 
            }}>{personalData.phone}</span>
            <p style={{ 
              color: '#999', 
              fontSize: isMobile ? '0.65rem' : '0.7rem', 
              marginTop: '8px', 
              fontStyle: 'italic' 
            }}>Call for immediate assistance</p>
          </div>

          {/* Email Card */}
          <div 
            onClick={() => handleContactClick('email', personalData.email)}
            className="contact-card"
            style={{
              background: '#fff',
              borderRadius: '12px',
              padding: isMobile ? '20px 15px' : '30px 25px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(108, 117, 125, 0.1)',
              border: '1px solid #e9ecef',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: isMobile ? 'calc(100% - 30px)' : '200px',
              maxWidth: isMobile ? '100%' : 'none',
              flex: isMobile ? '1 1 100%' : '1 1 auto'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 8px 30px rgba(108, 117, 125, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0px)';
              e.target.style.boxShadow = '0 4px 20px rgba(108, 117, 125, 0.1)';
            }}
          >
            <FaEnvelope style={{ 
              fontSize: isMobile ? '1.3rem' : '1.5rem', 
              color: '#6c757d', 
              marginBottom: isMobile ? '10px' : '12px' 
            }} />
            <h4 style={{ 
              fontSize: isMobile ? '0.9rem' : '0.95rem', 
              fontWeight: '600', 
              color: '#495057', 
              marginBottom: '4px' 
            }}>Email</h4>
            <span style={{ 
              color: '#666', 
              fontSize: isMobile ? '0.75rem' : '0.8rem', 
              wordBreak: 'break-word' 
            }}>{personalData.email}</span>
            <p style={{ 
              color: '#999', 
              fontSize: isMobile ? '0.65rem' : '0.7rem', 
              marginTop: '8px', 
              fontStyle: 'italic' 
            }}>Send detailed inquiries</p>
          </div>

          {/* LinkedIn Card */}
          <div 
            onClick={() => handleContactClick('linkedin', personalData.linkedin)}
            className="contact-card"
            style={{
              background: '#fff',
              borderRadius: '12px',
              padding: isMobile ? '20px 15px' : '30px 25px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(108, 117, 125, 0.1)',
              border: '1px solid #e9ecef',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: isMobile ? 'calc(100% - 30px)' : '200px',
              maxWidth: isMobile ? '100%' : 'none',
              flex: isMobile ? '1 1 100%' : '1 1 auto'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 8px 30px rgba(108, 117, 125, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0px)';
              e.target.style.boxShadow = '0 4px 20px rgba(108, 117, 125, 0.1)';
            }}
          >
            <FaLinkedin style={{ 
              fontSize: isMobile ? '1.3rem' : '1.5rem', 
              color: '#6c757d', 
              marginBottom: isMobile ? '10px' : '12px' 
            }} />
            <h4 style={{ 
              fontSize: isMobile ? '0.9rem' : '0.95rem', 
              fontWeight: '600', 
              color: '#495057', 
              marginBottom: '4px' 
            }}>LinkedIn</h4>
            <span style={{ 
              color: '#666', 
              fontSize: isMobile ? '0.75rem' : '0.8rem' 
            }}>Professional Profile</span>
            <p style={{ 
              color: '#999', 
              fontSize: isMobile ? '0.65rem' : '0.7rem', 
              marginTop: '8px', 
              fontStyle: 'italic' 
            }}>Connect & network professionally</p>
          </div>
        </div>

        {/* Professional Availability Info */}
        <div style={{
          maxWidth: '600px',
          margin: '40px auto 0',
          padding: isMobile ? '15px' : '20px',
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
          borderRadius: '12px',
          border: '1px solid rgba(102, 126, 234, 0.2)',
          marginLeft: isMobile ? '15px' : 'auto',
          marginRight: isMobile ? '15px' : 'auto'
        }}>
          <p style={{ 
            fontSize: isMobile ? '0.85rem' : '0.9rem', 
            color: '#495057', 
            textAlign: 'center',
            margin: '0 0 8px 0',
            fontWeight: '500'
          }}>
            📍 <strong>Available:</strong> Mon-Fri, 9:00 AM - 6:00 PM (IST)
          </p>
          <p style={{ 
            fontSize: isMobile ? '0.75rem' : '0.8rem', 
            color: '#6c757d', 
            textAlign: 'center',
            margin: '0'
          }}>
            Open to freelance projects and full-time opportunities
          </p>
        </div>
      </div>

      {/* Mobile-specific CSS */}
      <style jsx="true">{`
        @media (max-width: 768px) {
          .contact-cards-container {
            flex-direction: column !important;
            gap: 15px !important;
            padding: 0 15px !important;
            margin: 0 auto 30px auto !important;
          }
          
          .contact-card {
            width: 100% !important;
            min-width: unset !important;
            max-width: unset !important;
            flex: 1 1 100% !important;
            margin: 0 !important;
          }
        }
        
        @media (max-width: 480px) {
          .contact-cards-container {
            padding: 0 10px !important;
          }
          
          .contact-card {
            padding: 18px 12px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Contact; 
