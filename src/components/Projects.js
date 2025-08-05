import React, { useState, useEffect } from 'react';
import { FaProjectDiagram, FaCheckCircle, FaClock, FaCode } from 'react-icons/fa';
import { readCSV } from '../utils/csvReader';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const loadProjectsData = async () => {
      const data = await readCSV('/data/projects.csv');
      setProjectsData(data);
    };

    loadProjectsData();
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <FaCheckCircle style={{ color: '#10b981' }} />;
      case 'Ongoing':
        return <FaClock style={{ color: '#f59e0b' }} />;
      default:
        return <FaProjectDiagram style={{ color: '#667eea' }} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Professional Project':
        return '#3b82f6';
      case 'College Project':
        return '#8b5cf6';
      default:
        return '#667eea';
    }
  };

  return (
    <div>
      <div className="grid grid-2">
        {projectsData.map((project, index) => (
          <div key={index} className="card clickable">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ marginRight: '12px', fontSize: '1.2rem' }}>
                {getStatusIcon(project.status)}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#2d3748', marginBottom: '4px' }}>
                  {project.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', color: '#667eea', marginBottom: '4px' }}>
                  <FaCode style={{ marginRight: '6px', fontSize: '0.8rem' }} />
                  <span style={{ fontWeight: '500', fontSize: '0.8rem' }}>{project.technologies}</span>
                </div>
              </div>
            </div>
            
            <div style={{ marginBottom: '12px' }}>
              <span style={{
                display: 'inline-block',
                padding: '3px 10px',
                backgroundColor: getTypeColor(project.type),
                color: 'white',
                borderRadius: '12px',
                fontSize: '0.7rem',
                fontWeight: '500',
                marginRight: '8px'
              }}>
                {project.type}
              </span>
              <span style={{
                display: 'inline-block',
                padding: '3px 10px',
                backgroundColor: project.status === 'Completed' ? '#10b981' : '#f59e0b',
                color: 'white',
                borderRadius: '12px',
                fontSize: '0.7rem',
                fontWeight: '500'
              }}>
                {project.status}
              </span>
            </div>
            
            <p style={{ 
              fontSize: '0.85rem', 
              lineHeight: '1.6', 
              color: '#4a5568',
              marginBottom: 0
            }}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 