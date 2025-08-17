import React, { useState, useEffect } from 'react';
import { readCSV } from '../utils/csvReader';
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaAws, FaDatabase, FaServer, FaCode, FaMicrochip,
  FaCloud
} from 'react-icons/fa';
import { 
  SiSpring, SiMongodb, SiPostgresql, SiJunit5,
  SiMicrosoftoffice, SiGooglecloud
} from 'react-icons/si';

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const loadSkillsData = async () => {
      try {
        const data = await readCSV('data/skills.csv');
        setSkillsData(data);
      } catch (error) {
        console.error('Failed to load skills:', error);
      }
    };

    loadSkillsData();
  }, []);

  const getSkillIcon = (skillName) => {
    const iconProps = {
      size: 32,
      style: { 
        transition: 'all 0.3s ease',
        transform: 'scale(1)',
        animation: 'none'
      }
    };

    switch (skillName.toLowerCase()) {
      case 'java':
        return <FaJava {...iconProps} color="#007396" />;
      case 'python':
        return <FaPython {...iconProps} color="#3776AB" />;
      case 'html & css':
        return (
          <div style={{ 
            display: 'flex', 
            gap: '4px',
            transition: 'all 0.3s ease'
          }}>
            <FaHtml5 {...iconProps} color="#E34F26" />
            <FaCss3Alt {...iconProps} color="#1572B6" />
          </div>
        );
      case 'javascript':
        return <FaJs {...iconProps} color="#F7DF1E" />;
      case 'react js':
        return <FaReact {...iconProps} color="#61DAFB" style={{ ...iconProps.style, animation: 'spin 10s linear infinite' }} />;
      case 'spring boot':
        return <SiSpring {...iconProps} color="#6DB33F" />;
      case 'aws':
        return <FaAws {...iconProps} color="#232F3E" />;
      case 'gcp':
        return <SiGooglecloud {...iconProps} color="#4285F4" />;
      case 'sql':
        return <FaDatabase {...iconProps} color="#336791" />;
      case 'mongodb':
        return <SiMongodb {...iconProps} color="#47A248" />;
      case 'postgresql':
        return <SiPostgresql {...iconProps} color="#336791" />;
      case 'junit':
        return <SiJunit5 {...iconProps} color="#25A162" />;
      case 'api integration':
        return <FaServer {...iconProps} color="#6C757D" />;
      case 'ms office':
        return <SiMicrosoftoffice {...iconProps} color="#D83B01" />;
      case 'iot':
        return <FaMicrochip {...iconProps} color="#00979D" />;
      case 'microservices':
        return <FaCloud {...iconProps} color="#1A73E8" />;
      default:
        return <FaCode {...iconProps} color="#6C757D" />;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return '#10b981';
      case 'Advanced':
        return '#3b82f6';
      case 'Intermediate':
        return '#8b5cf6';
      case 'Beginner':
        return '#f59e0b';
      default:
        return '#6C757D';
    }
  };

  return (
    <div style={{ 
      padding: '20px 10px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .skill-card {
            transition: all 0.3s ease;
          }
          .skill-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          }
          .skill-card:hover .skill-icon {
            transform: scale(1.15);
            animation: bounce 0.5s ease infinite;
          }
          .skill-card:hover .skill-name {
            color: #2563eb;
            transform: scale(1.05);
          }
          .skill-card:active {
            transform: scale(0.95);
          }
        `}
      </style>

      <p style={{
        fontSize: '0.9rem',
        color: '#6c757d',
        lineHeight: '1.6',
        marginBottom: '30px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '300',
        textAlign: 'center',
        padding: '0 15px'
      }}>
        Proficient in modern technologies and frameworks with hands-on experience in full-stack development, 
        cloud services, and enterprise-level applications.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
        gap: '12px',
        padding: '10px',
        justifyContent: 'center',
        alignItems: 'stretch',
        '@media (min-width: 768px)': {
          gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
          gap: '20px',
          padding: '20px'
        }
      }}>
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ 
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '12px 8px',
              minHeight: '90px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              '@media (min-width: 768px)': {
                padding: '16px 10px',
                minHeight: '100px',
                borderRadius: '16px'
              }
            }}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
            onClick={() => setHoveredSkill(hoveredSkill === skill ? null : skill)}
          >
            <div className="skill-icon">
              {getSkillIcon(skill.skill)}
            </div>
            <span 
              className="skill-name"
              style={{
                marginTop: '8px',
                fontSize: '0.7rem',
                fontWeight: '500',
                color: '#4b5563',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '@media (min-width: 768px)': {
                  fontSize: '0.75rem',
                  marginTop: '12px'
                }
              }}
            >
              {skill.skill}
            </span>
            {hoveredSkill === skill && (
              <div style={{
                position: 'absolute',
                top: '-35px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: getLevelColor(skill.level),
                color: 'white',
                padding: '4px 8px',
                borderRadius: '6px',
                fontSize: '0.7rem',
                whiteSpace: 'nowrap',
                zIndex: 1000,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                fontWeight: '500',
                animation: 'pulse 0.5s ease',
                '@media (min-width: 768px)': {
                  top: '-40px',
                  padding: '6px 12px',
                  fontSize: '0.75rem',
                  borderRadius: '8px'
                }
              }}>
                {skill.level}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 
