import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';
import { readCSV } from '../utils/csvReader';

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const loadEducationData = async () => {
      const data = await readCSV('data/education.csv');
      setEducationData(data);
    };

    loadEducationData();
  }, []);

  const getIcon = (degree) => {
    if (degree && degree.toLowerCase().includes('b.tech')) {
      return <FaUniversity />;
    } else if (degree && degree.toLowerCase().includes('hsc')) {
      return <FaSchool />;
    } else if (degree && degree.toLowerCase().includes('sslc')) {
      return <FaSchool />;
    }
    return <FaGraduationCap />;
  };

  const getScoreColor = (score) => {
    // Extract numeric value from score (handles formats like "CGPA - 8.45", "69.08%", etc.)
    const numericScore = parseFloat(score.match(/[\d.]+/)?.[0]);
    
    if (isNaN(numericScore)) {
      return '#10b981'; // Default green if can't parse
    }
    
    // Always return green for consistency
    return '#10b981';
  };

  return (
    <div className="section">
      <h2 className="section-title">Education</h2>
      
      <div className="grid grid-2">
        {educationData.map((edu, index) => (
          <div key={index} className="card clickable">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ 
                marginRight: '12px', 
                fontSize: '1.2rem', 
                color: '#667eea' 
              }}>
                {getIcon(edu.degree)}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#2d3748', marginBottom: '4px' }}>
                  {edu.degree}
                </h3>
                <p style={{ color: '#667eea', fontWeight: '500', marginBottom: '6px', fontSize: '0.8rem' }}>
                  {edu.institution}
                </p>
                <p style={{ color: '#718096', fontSize: '0.75rem', marginBottom: 0 }}>
                  {edu.duration}
                </p>
              </div>
            </div>
            
            <div style={{ marginBottom: '12px' }}>
              <span style={{
                display: 'inline-block',
                padding: '3px 10px',
                backgroundColor: getScoreColor(edu.score),
                color: 'white',
                borderRadius: '12px',
                fontSize: '0.7rem',
                fontWeight: '500'
              }}>
                {edu.score}
              </span>
            </div>
            
            {edu.details && (
              <p style={{ 
                fontSize: '0.85rem', 
                lineHeight: '1.6', 
                color: '#4a5568',
                marginBottom: 0
              }}>
                {edu.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Education; 
