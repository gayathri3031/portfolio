import React, { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { readCSV } from '../utils/csvReader';

const Languages = () => {
  const [languagesData, setLanguagesData] = useState([]);

  useEffect(() => {
    const loadLanguagesData = async () => {
      const data = await readCSV('/data/languages.csv');
      setLanguagesData(data);
    };

    loadLanguagesData();
  }, []);

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case 'Native':
      case 'Fluent':
        return '#10b981';
      case 'Conversational':
      case 'Intermediate':
        return '#3b82f6';
      case 'Basic':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="section">
      <h2 className="section-title">Languages</h2>
      
      <div className="grid grid-3">
        {languagesData.map((lang, index) => (
          <div key={index} className="card clickable text-center">
            <div style={{ marginBottom: '12px' }}>
              <FaGlobe style={{ 
                fontSize: '1.5rem', 
                color: '#667eea', 
                marginBottom: '8px' 
              }} />
              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#2d3748', marginBottom: '6px' }}>
                {lang.language}
              </h3>
              <span style={{
                display: 'inline-block',
                padding: '3px 10px',
                backgroundColor: getProficiencyColor(lang.proficiency),
                color: 'white',
                borderRadius: '12px',
                fontSize: '0.7rem',
                fontWeight: '500'
              }}>
                {lang.proficiency}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages; 