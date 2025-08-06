import React from 'react';
import { FaDownload, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import TopNavigation from './components/TopNavigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Contact from './components/Contact';

function App() {
  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
     link.href = process.env.NODE_ENV === 'production' 
      ? '/portfolio/Gayathri_Resume.pdf' 
      : '/Gayathri_Resume.pdf';
    link.download = 'Gayathri_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <TopNavigation />
      <main>
        <Hero />

        <section id="about" style={{ padding: '80px 0', backgroundColor: '#fafbff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '50px',
              color: '#495057',
              fontFamily: 'Poppins, sans-serif',
              position: 'relative'
            }}>
              Experiences
              <div style={{
                content: '',
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
            <Experience />
          </div>
        </section>

        <section id="resume" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '50px',
              color: '#495057',
              fontFamily: 'Poppins, sans-serif',
              position: 'relative'
            }}>
              Skills
              <div style={{
                content: '',
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

            <div style={{ display: 'grid', gap: '60px' }}>
              <Skills />
              <Education />
              <Certifications />
              <Languages />
            </div>
          </div>
        </section>

        <section id="portfolio" style={{ padding: '80px 0', backgroundColor: '#fcfaff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '50px',
              color: '#495057',
              fontFamily: 'Poppins, sans-serif',
              position: 'relative'
            }}>
              Projects
              <div style={{
                content: '',
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
            <Projects />
          </div>
        </section>

        <section id="contact" style={{ padding: '80px 0', backgroundColor: '#f9f8ff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px' }}>
            <Contact />
          </div>
        </section>

        {/* Copyright Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          color: '#fff',
          textAlign: 'center',
          padding: '15px 0',
          fontSize: '0.85rem'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            {/* Copyright Text */}
            <span style={{ opacity: 0.9 }}>
              © {new Date().getFullYear()} Gayathri B | Backend Java Developer | All rights reserved.
            </span>
            
            {/* Small Inline Social Icons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => window.open('https://www.linkedin.com/in/gayathri-b-648849185/', '_blank')}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.transform = 'translateY(0px)';
                }}
              >
                <FaLinkedin style={{ fontSize: '0.9rem', color: '#fff' }} />
              </button>
              
              <button
                onClick={() => window.open('mailto:gayathribalaa11@gmail.com')}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.transform = 'translateY(0px)';
                }}
              >
                <FaEnvelope style={{ fontSize: '0.9rem', color: '#fff' }} />
              </button>
              
              <button
                onClick={() => window.open('https://github.com', '_blank')}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.transform = 'translateY(0px)';
                }}
              >
                <FaGithub style={{ fontSize: '0.9rem', color: '#fff' }} />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button for Resume Download */}
      <button
        onClick={downloadResume}
        className="fab-mobile fab-animated"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          zIndex: 1000,
          backdropFilter: 'blur(10px)'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.15) translateY(-3px)';
          e.target.style.background = 'linear-gradient(135deg, #7c8eef 0%, #8659c7 50%, #f5a6fc 100%)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)';
        }}
        onMouseDown={(e) => {
          e.target.style.transform = 'scale(0.95)';
        }}
        onMouseUp={(e) => {
          e.target.style.transform = 'scale(1.15) translateY(-3px)';
        }}
        title="Download Resume"
      >
        <FaDownload style={{
          fontSize: '1.2rem',
          color: '#fff',
          filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
        }} />
      </button>
    </div>
  );
}

export default App; 
