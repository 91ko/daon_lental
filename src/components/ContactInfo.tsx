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
          <h3>다온렌탈</h3>
          <p>김효정</p>
          <p>경기도 파주시 소라지로97번길 45</p>
          <p>사업자등록번호 : 491-01-01954</p>
          <p>전화번호 : 010-7725-0048</p>
          <p>이메일 : hyo1511@naver.com</p>
        </div>
      </div>
    </ContactSection>
  );
};

export default ContactInfo; 