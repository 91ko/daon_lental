import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa6';
import * as SiIcons from 'react-icons/si';

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
`;

const FloatingButton = styled.a`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  text-decoration: none;
  color: #333;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
  }

  &.phone {
    background: #007bff;
    color: #fff;
  }

  &.kakao {
    background: #FEE500;
    color: #3C1E1E;
  }

  svg {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

const FloatingButtons: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingButton 
        href="tel:010-7725-0048" 
        className="phone"
        aria-label="전화하기"
      >
        {FaIcons.FaPhone({})}
      </FloatingButton>
      <FloatingButton 
        href="https://open.kakao.com/your-kakao-id" 
        target="_blank" 
        rel="noopener noreferrer"
        className="kakao"
        aria-label="카카오톡 문의하기"
      >
        {SiIcons.SiKakaotalk({})}
      </FloatingButton>
    </FloatingContainer>
  );
};

export default FloatingButtons; 