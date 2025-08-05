import React, { useState, useEffect } from 'react';
import { FaCertificate, FaCheckCircle, FaClock, FaUniversity, FaAward, FaStar, FaTrophy } from 'react-icons/fa';
import { readCSV } from '../utils/csvReader';

const Certifications = () => {
  const [certificationsData, setCertificationsData] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const loadCertificationsData = async () => {
      const data = await readCSV('/data/certifications.csv');
      setCertificationsData(data);
    };

    loadCertificationsData();
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <FaCheckCircle style={{ color: '#20c997' }} />;
      case 'In Progress':
        return <FaClock style={{ color: '#ffc107' }} />;
      default:
        return <FaCheckCircle style={{ color: '#20c997' }} />;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Course':
        return <FaUniversity style={{ color: '#6c757d' }} />;
      case 'Certification':
        return <FaTrophy style={{ color: '#6c757d' }} />;
      case 'Training':
        return <FaAward style={{ color: '#6c757d' }} />;
      default:
        return <FaCertificate style={{ color: '#6c757d' }} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Course':
        return '#6c757d';
      case 'Certification':
        return '#20c997';
      case 'Training':
        return '#495057';
      default:
        return '#6c757d';
    }
  };

  const getProviderIcon = (provider) => {
    if (provider && provider.toLowerCase().includes('cambridge')) return '🎓';
    if (provider && provider.toLowerCase().includes('udemy')) return '📚';
    if (provider && provider.toLowerCase().includes('csc')) return '🏆';
    if (provider && provider.toLowerCase().includes('nptel')) return '🔬';
    if (provider && provider.toLowerCase().includes('aws')) return '☁️';
    if (provider && provider.toLowerCase().includes('google')) return '🌐';
    return '📜';
  };

  // Fix duplicate filter issue by cleaning and filtering unique types
  const cleanTypes = certificationsData
    .map(cert => cert.type ? cert.type.trim() : '')
    .filter(type => type !== '');
  
  const types = ['All', ...new Set(cleanTypes)];
  
  const filteredCertifications = filter === 'All' 
    ? certificationsData 
    : certificationsData.filter(cert => cert.type && cert.type.trim() === filter);

  return (
    <div>
      {/* Modern Filter Buttons */}
      <div style={{ 
        marginBottom: '40px', 
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
        {types.map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            style={{
              padding: '10px 20px',
              borderRadius: '20px',
              backgroundColor: filter === type ? '#6c757d' : 'transparent',
              color: filter === type ? '#fff' : '#6c757d',
              border: `2px solid ${filter === type ? '#6c757d' : '#e9ecef'}`,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: '600',
              fontSize: '0.8rem',
              fontFamily: 'Poppins, sans-serif',
              textTransform: 'capitalize',
              boxShadow: filter === type ? '0 4px 15px rgba(108, 117, 125, 0.2)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (filter !== type) {
                e.target.style.backgroundColor = '#f8f9fa';
                e.target.style.borderColor = '#6c757d';
                e.target.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== type) {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = '#e9ecef';
                e.target.style.transform = 'translateY(0)';
              }
            }}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Modern Certification Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '25px'
      }}>
        {filteredCertifications.map((cert, index) => (
          <div 
            key={index} 
            style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '25px',
              boxShadow: '0 5px 25px rgba(108, 117, 125, 0.08)',
              border: '1px solid #f8f9fa',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 10px 30px rgba(108, 117, 125, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 5px 25px rgba(108, 117, 125, 0.08)';
            }}
          >
            {/* Modern Header */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              marginBottom: '20px',
              position: 'relative'
            }}>
              <div style={{ 
                fontSize: '2rem',
                marginRight: '15px',
                opacity: 0.8
              }}>
                {getProviderIcon(cert.provider)}
              </div>
              
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: '1rem', 
                  fontWeight: '700', 
                  color: '#495057', 
                  marginBottom: '6px',
                  lineHeight: '1.3',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {cert.title}
                </h3>
                
                {cert.provider && (
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    color: '#6c757d', 
                    fontWeight: '500', 
                    marginBottom: '12px',
                    fontSize: '0.85rem'
                  }}>
                    <span style={{ marginRight: '6px' }}>{getTypeIcon(cert.type)}</span>
                    {cert.provider}
                  </div>
                )}
              </div>
              
              {/* Status Icon in top right */}
              <div style={{ 
                position: 'absolute',
                top: '0',
                right: '0',
                fontSize: '1.2rem'
              }}>
                {getStatusIcon(cert.status)}
              </div>
            </div>

            {/* Modern Badges Row */}
            <div style={{ 
              display: 'flex', 
              gap: '10px', 
              marginBottom: '15px',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <span style={{ 
                padding: '6px 12px',
                backgroundColor: getTypeColor(cert.type),
                color: '#fff',
                borderRadius: '15px',
                fontSize: '0.75rem',
                fontWeight: '600',
                fontFamily: 'Poppins, sans-serif',
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                {cert.type}
              </span>
              
              {cert.year && (
                <span style={{ 
                  padding: '6px 12px',
                  backgroundColor: '#f8f9fa',
                  color: '#495057',
                  borderRadius: '15px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  fontFamily: 'Poppins, sans-serif',
                  border: '1px solid #e9ecef'
                }}>
                  {cert.year}
                </span>
              )}
            </div>

            {/* Status with modern styling */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ 
                  fontSize: '0.85rem',
                  color: cert.status === 'Completed' ? '#20c997' : '#ffc107',
                  fontWeight: '600',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {cert.status || 'Completed'}
                </span>
              </div>
              
              {/* Score if available */}
              {cert.status && cert.status.includes('131') && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#ffc107',
                  fontWeight: '600',
                  fontSize: '0.8rem'
                }}>
                  <FaStar />
                  <span>Score: 131</span>
                </div>
              )}
            </div>

            {/* Modern accent line */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              height: '3px',
              background: `linear-gradient(90deg, ${getTypeColor(cert.type)}, ${getTypeColor(cert.type)}60)`,
              borderRadius: '0 0 12px 12px'
            }} />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCertifications.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '40px 20px',
          color: '#6c757d'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '15px', opacity: 0.5 }}>📜</div>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', marginBottom: '8px', fontSize: '1.1rem' }}>
            No {filter.toLowerCase()} found
          </h3>
          <p style={{ fontSize: '0.9rem' }}>Try selecting a different filter option.</p>
        </div>
      )}
    </div>
  );
};

export default Certifications; 