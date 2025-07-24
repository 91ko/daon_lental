import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 0;
  background-color: #fff;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .info-card {
    background-color: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    max-width: 600px;
    margin: 0 auto;
  }

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1.5rem;
  }

  p {
    margin: 0.5rem 0;
    color: #666;
    font-size: 1.1rem;
  }
`;

const ContactInfo: React.FC = () => {
  return (
    <ContactSection>
      <div className="container">
        <div className="info-card">
          {/* 정보 삭제됨 */}
        </div>
      </div>
    </ContactSection>
  );
};

export default ContactInfo; 