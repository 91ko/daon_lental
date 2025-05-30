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

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CardGrid>
          <Card>
            <h3>다온렌탈</h3>
            <p>고소작업대 전문 렌탈 서비스</p>
            <p>서울 · 경기 · 인천 지역</p>
            <p>지게차 불필요, 상하차 무료</p>
          </Card>
          <Card>
            <h3>연락처</h3>
            <p>대표: 김효정</p>
            <p>전화: 010-7725-0048</p>
            <p>이메일: hyo1511@naver.com</p>
          </Card>
          <Card>
            <h3>주소</h3>
            <p>경기도 파주시</p>
            <p>소라지로97번길 45</p>
            <p>사업자등록번호: 491-01-01954</p>
          </Card>
        </CardGrid>
        <BottomBar>
          <p>© 2024 다온렌탈. All rights reserved.</p>
        </BottomBar>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 