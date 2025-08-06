import React, { useState, useEffect } from 'react';
import { readCSV } from '../utils/csvReader';

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    const loadSkillsData = async () => {
      const data = await readCSV('data/skills.csv');
      setSkillsData(data);
    };

    loadSkillsData();
  }, []);

  const getLevelPercentage = (level) => {
    switch (level) {
      case 'Expert':
        return 95;
      case 'Advanced':
        return 90;
      case 'Intermediate':
        return 75;
      case 'Beginner':
      case 'Basic':
        return 60;
      default:
        return 50;
    }
  };

  // Select key skills for display (customize as needed)
  const displaySkills = [
    'Java',
    'Spring Boot', 
    'HTML & CSS',
    'JavaScript',
    'Python',
    'AWS',
    'SQL',
    'API Integration'
  ];

  const filteredSkills = skillsData.filter(skill => 
    displaySkills.includes(skill.skill)
  );

  // Split skills into two columns
  const midpoint = Math.ceil(filteredSkills.length / 2);
  const leftColumnSkills = filteredSkills.slice(0, midpoint);
  const rightColumnSkills = filteredSkills.slice(midpoint);

  const SkillBar = ({ skill, level }) => {
    const percentage = getLevelPercentage(level);
    
    return (
      <div style={{ marginBottom: '20px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '6px'
        }}>
          <span style={{ 
            fontSize: '0.85rem',
            fontWeight: '500',
            color: '#495057',
            fontFamily: 'Poppins, sans-serif'
          }}>
            {skill.toUpperCase()}
          </span>
          <span style={{ 
            fontSize: '0.85rem',
            fontWeight: '500',
            color: '#495057',
            fontFamily: 'Poppins, sans-serif'
          }}>
            {percentage}%
          </span>
        </div>
        
        <div style={{
          width: '100%',
          height: '5px',
          backgroundColor: '#e9ecef',
          borderRadius: '3px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: '#20c997',
            borderRadius: '3px',
            transition: 'width 2s ease-in-out'
          }} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <p style={{
        fontSize: '0.9rem',
        color: '#6c757d',
        lineHeight: '1.6',
        marginBottom: '30px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '300'
      }}>
        Proficient in modern technologies and frameworks with hands-on experience in full-stack development, 
        cloud services, and enterprise-level applications.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginTop: '25px'
      }}>
        {/* Left Column */}
        <div>
          {leftColumnSkills.map((skill, index) => (
            <SkillBar 
              key={index}
              skill={skill.skill}
              level={skill.level}
            />
          ))}
        </div>

        {/* Right Column */}
        <div>
          {rightColumnSkills.map((skill, index) => (
            <SkillBar 
              key={index}
              skill={skill.skill}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 
