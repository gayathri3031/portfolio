import React, { useState, useEffect } from 'react';
import { FaBuilding, FaCalendarAlt, FaBriefcase, FaStar, FaTools } from 'react-icons/fa';
import { readCSV } from '../utils/csvReader';

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const loadExperienceData = async () => {
      const data = await readCSV('data/experience.csv');
      setExperienceData(data);
    };

    loadExperienceData();
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'Full Time':
        return <FaBriefcase />;
      case 'Project':
        return <FaTools />;
      case 'Achievement':
        return <FaStar />;
      case 'Internship':
        return <FaBriefcase />;
      default:
        return <FaBuilding />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Full Time':
        return '#22c55e';
      case 'Project':
        return '#3b82f6';
      case 'Achievement':
        return '#f59e0b';
      case 'Internship':
        return '#8b5cf6';
      default:
        return '#667eea';
    }
  };

  return (
    <div>
      <div className="grid grid-2">
        {experienceData.map((exp, index) => (
          <div key={index} className="card clickable">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ 
                marginRight: '12px', 
                fontSize: '1.2rem', 
                color: getTypeColor(exp.type) 
              }}>
                {getIcon(exp.type)}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#2d3748', marginBottom: '4px' }}>
                  {exp.position}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.8rem', color: '#64748b' }}>
                  <FaBuilding style={{ marginRight: '4px' }} />
                  <span style={{ marginRight: '12px' }}>{exp.company}</span>
                  <FaCalendarAlt style={{ marginRight: '4px' }} />
                  <span>{exp.duration}</span>
                </div>
              </div>
            </div>
            
            <div style={{ marginBottom: '12px' }}>
              <span style={{
                display: 'inline-block',
                padding: '3px 10px',
                backgroundColor: getTypeColor(exp.type),
                color: 'white',
                borderRadius: '12px',
                fontSize: '0.7rem',
                fontWeight: '500'
              }}>
                {exp.type}
              </span>
            </div>
            
            <p style={{ 
              fontSize: '0.85rem', 
              lineHeight: '1.6', 
              color: '#4a5568',
              marginBottom: 0
            }}>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 
