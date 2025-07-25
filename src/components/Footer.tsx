import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 4rem 0 2rem;
  color: #333;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #007bff;
  }

  p {
    margin: 0.5rem 0;
    color: #666;
    line-height: 1.6;
  }
`;

const BottomBar = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #e9ecef;
  color: #666;
  font-size: 0.9rem;
`;

const CompanyInfo = styled.div`
  margin-top: 0.5rem;
  font-size: 0.65rem;
  color: #aaa;
  text-align: center;
  line-height: 1.4;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <BottomBar>
          <p>© 2024 다온렌탈. All rights reserved.</p>
          <CompanyInfo>
            대표: 김효정 | 사업자등록번호: 491-01-01954<br/>
            경기도 파주시 소라지로97번길 45 | 이메일: hyo1511@naver.com
          </CompanyInfo>
        </BottomBar>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 