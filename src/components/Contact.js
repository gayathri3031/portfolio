import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { readCSV } from '../utils/csvReader';

const Contact = () => {
  const [personalData, setPersonalData] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null); // { type: 'success'|'error', message: 'text' }

  useEffect(() => {
    const loadPersonalData = async () => {
      const data = await readCSV('/data/personal.csv');
      const personalInfo = {};
      data.forEach(row => {
        personalInfo[row.field] = row.value;
      });
      setPersonalData(personalInfo);
    };

    loadPersonalData();
    
    // Initialize EmailJS
    emailjs.init("KRouJx2cIwEPl7DoF"); // Your EmailJS public key
  }, []);

  // Auto-hide notification after 4 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const showNotification = (type, message) => {
    setNotification({ type, message });
  };

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS service configuration
      const serviceID = 'service_t6bnlqe'; // Your EmailJS service ID
      const templateID = 'template_y3nzgwj'; // Your EmailJS template ID

      // Template parameters that will be sent to your email template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Gayathri', // Your name
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams);
      
      showNotification('success', 'Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('EmailJS Error:', error);
      showNotification('error', 'Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      {/* Toast Notification */}
      {notification && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: notification.type === 'success' ? 'linear-gradient(135deg, #28a745, #20c997)' : 'linear-gradient(135deg, #dc3545, #e74c3c)',
          color: '#fff',
          padding: '16px 20px',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          zIndex: 1000,
          maxWidth: '350px',
          minWidth: '300px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          animation: 'slideIn 0.3s ease-out',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {notification.type === 'success' ? (
            <FaCheckCircle style={{ fontSize: '1.2rem', flexShrink: 0 }} />
          ) : (
            <FaExclamationTriangle style={{ fontSize: '1.2rem', flexShrink: 0 }} />
          )}
          <span style={{ fontSize: '0.9rem', fontWeight: '500', lineHeight: '1.4' }}>
            {notification.message}
          </span>
          <button
            onClick={() => setNotification(null)}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: '#fff',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              flexShrink: 0,
              marginLeft: 'auto'
            }}
          >
            ×
          </button>
        </div>
      )}

      <h2 style={{ 
        fontSize: '2rem', 
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
        fontSize: '1rem', 
        color: '#6c757d', 
        textAlign: 'center', 
        marginBottom: '50px',
        fontFamily: 'Poppins, sans-serif',
        lineHeight: '1.6'
      }}>
        Interested in working together? Let's have a conversation about how I can contribute to your team.
      </p>

      <div className="contact-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '30px', 
        alignItems: 'start',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Left Side - Contact Cards */}
        <div className="contact-cards" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {/* Phone Card */}
          <div 
            onClick={() => handleContactClick('phone', personalData.phone)}
            style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(108, 117, 125, 0.1)',
              border: '1px solid #e9ecef',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 25px rgba(108, 117, 125, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0px)';
              e.target.style.boxShadow = '0 4px 20px rgba(108, 117, 125, 0.1)';
            }}
          >
            <FaPhone style={{ fontSize: '1.2rem', color: '#6c757d', marginBottom: '10px' }} />
            <h4 style={{ fontSize: '0.85rem', fontWeight: '600', color: '#495057', marginBottom: '4px' }}>Phone</h4>
            <span style={{ color: '#666', fontSize: '0.75rem' }}>{personalData.phone}</span>
            <p style={{ color: '#999', fontSize: '0.65rem', marginTop: '8px', fontStyle: 'italic' }}>Call for immediate assistance</p>
          </div>

          {/* Email Card */}
          <div 
            onClick={() => handleContactClick('email', personalData.email)}
            style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(108, 117, 125, 0.1)',
              border: '1px solid #e9ecef',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 25px rgba(108, 117, 125, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0px)';
              e.target.style.boxShadow = '0 4px 20px rgba(108, 117, 125, 0.1)';
            }}
          >
            <FaEnvelope style={{ fontSize: '1.2rem', color: '#6c757d', marginBottom: '10px' }} />
            <h4 style={{ fontSize: '0.85rem', fontWeight: '600', color: '#495057', marginBottom: '4px' }}>Email</h4>
            <span style={{ color: '#666', fontSize: '0.75rem', wordBreak: 'break-word' }}>{personalData.email}</span>
            <p style={{ color: '#999', fontSize: '0.65rem', marginTop: '8px', fontStyle: 'italic' }}>Send detailed inquiries</p>
          </div>

          {/* LinkedIn Card */}
          <div 
            onClick={() => handleContactClick('linkedin', personalData.linkedin)}
            style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(108, 117, 125, 0.1)',
              border: '1px solid #e9ecef',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 25px rgba(108, 117, 125, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0px)';
              e.target.style.boxShadow = '0 4px 20px rgba(108, 117, 125, 0.1)';
            }}
          >
            <FaLinkedin style={{ fontSize: '1.2rem', color: '#6c757d', marginBottom: '10px' }} />
            <h4 style={{ fontSize: '0.85rem', fontWeight: '600', color: '#495057', marginBottom: '4px' }}>LinkedIn</h4>
            <span style={{ color: '#666', fontSize: '0.75rem' }}>Professional Profile</span>
            <p style={{ color: '#999', fontSize: '0.65rem', marginTop: '8px', fontStyle: 'italic' }}>Connect & network professionally</p>
          </div>

          {/* Professional Availability Info */}
          <div style={{
            marginTop: '20px',
            padding: '12px',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
            borderRadius: '8px',
            border: '1px solid rgba(102, 126, 234, 0.2)'
          }}>
            <p style={{ 
              fontSize: '0.75rem', 
              color: '#495057', 
              textAlign: 'center',
              margin: '0',
              fontWeight: '500'
            }}>
              📍 <strong>Available:</strong> Mon-Fri, 9:00 AM - 6:00 PM (IST)
            </p>
            <p style={{ 
              fontSize: '0.7rem', 
              color: '#6c757d', 
              textAlign: 'center',
              margin: '4px 0 0 0'
            }}>
              Open to freelance projects and full-time opportunities
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form" style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '25px',
          boxShadow: '0 4px 20px rgba(108, 117, 125, 0.1)',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ 
            fontSize: '1.1rem', 
            fontWeight: '600', 
            color: '#495057', 
            marginBottom: '15px',
            textAlign: 'left'
          }}>
            Send a Message
          </h3>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Name Field */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '4px', 
                fontSize: '0.8rem', 
                fontWeight: '500', 
                color: '#495057',
                textAlign: 'left'
              }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isLoading}
                required
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #e9ecef',
                  background: isLoading ? '#f8f9fa' : '#fff',
                  color: '#495057',
                  fontSize: '0.8rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box',
                  opacity: isLoading ? 0.7 : 1
                }}
                onFocus={(e) => {
                  if (!isLoading) {
                    e.target.style.border = '1px solid #667eea';
                    e.target.style.boxShadow = '0 0 0 2px rgba(102, 126, 234, 0.1)';
                  }
                }}
                onBlur={(e) => {
                  e.target.style.border = '1px solid #e9ecef';
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '4px', 
                fontSize: '0.8rem', 
                fontWeight: '500', 
                color: '#495057',
                textAlign: 'left'
              }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isLoading}
                required
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #e9ecef',
                  background: isLoading ? '#f8f9fa' : '#fff',
                  color: '#495057',
                  fontSize: '0.8rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box',
                  opacity: isLoading ? 0.7 : 1
                }}
                onFocus={(e) => {
                  if (!isLoading) {
                    e.target.style.border = '1px solid #667eea';
                    e.target.style.boxShadow = '0 0 0 2px rgba(102, 126, 234, 0.1)';
                  }
                }}
                onBlur={(e) => {
                  e.target.style.border = '1px solid #e9ecef';
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '4px', 
                fontSize: '0.8rem', 
                fontWeight: '500', 
                color: '#495057',
                textAlign: 'left'
              }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                disabled={isLoading}
                required
                rows={3}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #e9ecef',
                  background: isLoading ? '#f8f9fa' : '#fff',
                  color: '#495057',
                  fontSize: '0.8rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  resize: 'vertical',
                  minHeight: '60px',
                  boxSizing: 'border-box',
                  opacity: isLoading ? 0.7 : 1
                }}
                onFocus={(e) => {
                  if (!isLoading) {
                    e.target.style.border = '1px solid #667eea';
                    e.target.style.boxShadow = '0 0 0 2px rgba(102, 126, 234, 0.1)';
                  }
                }}
                onBlur={(e) => {
                  e.target.style.border = '1px solid #e9ecef';
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="Your message..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                padding: '10px 20px',
                borderRadius: '6px',
                border: 'none',
                background: isLoading 
                  ? '#6c757d' 
                  : 'linear-gradient(135deg, #667eea, #764ba2)',
                color: '#fff',
                fontSize: '0.8rem',
                fontWeight: '600',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                alignSelf: 'flex-start',
                marginTop: '4px',
                opacity: isLoading ? 0.7 : 1
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.background = 'linear-gradient(135deg, #7c8eef, #8659c7)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(0px)';
                  e.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
                }
              }}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Add CSS Animation */}
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 0 15px !important;
          }
          
          .contact-grid > div:first-child {
            order: 2;
          }
          
          .contact-grid > div:last-child {
            order: 1;
          }
          
          .contact-cards {
            gap: 12px !important;
          }
          
          .contact-form {
            padding: 20px !important;
            margin-bottom: 20px;
          }
          
          .contact-form h3 {
            font-size: 1rem !important;
            margin-bottom: 12px !important;
          }
          
          .contact-form form {
            gap: 10px !important;
          }
          
          .contact-form input,
          .contact-form textarea {
            padding: 10px 12px !important;
            font-size: 0.85rem !important;
          }
          
          .contact-form button {
            padding: 12px 20px !important;
            font-size: 0.85rem !important;
            width: 100% !important;
            align-self: stretch !important;
          }
          
          .contact-grid h2 {
            font-size: 1.6rem !important;
          }
          
          .contact-grid p {
            font-size: 0.9rem !important;
            padding: 0 10px !important;
            margin-bottom: 35px !important;
          }
        }
        
        @media (max-width: 480px) {
          .contact-grid {
            padding: 0 10px !important;
            gap: 15px !important;
          }
          
          .contact-form {
            padding: 15px !important;
          }
          
          .contact-cards {
            gap: 10px !important;
          }
          
          .contact-grid h2 {
            font-size: 1.4rem !important;
          }
          
          .contact-grid p {
            font-size: 0.85rem !important;
            margin-bottom: 25px !important;
          }
          
          .contact-form input,
          .contact-form textarea {
            padding: 8px 10px !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact; 
