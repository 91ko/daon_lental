import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa6';

const HeroSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .hero-content {
    text-align: center;
    max-width: 800px;
  }

  h2 {
    font-size: 3.5rem;
    color: #333;
    margin-bottom: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .highlight {
    font-size: 2rem;
    color: #007bff;
    font-weight: bold;
    background: linear-gradient(45deg, #007bff, #00bfff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0.5rem 0;
  }

  .hero-image {
    width: 100%;
    max-width: 1000px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 20px;
      background: rgba(0,0,0,0.1);
      filter: blur(10px);
      border-radius: 50%;
    }
    
    img {
      width: 100%;
      height: auto;
      border-radius: 16px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.15);
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
    
    h2 {
      font-size: 2.5rem;
    }
    
    .highlight {
      font-size: 1.5rem;
    }
  }
`;

const PhoneNumber = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #007bff;
  background: #e6f0ff;
  padding: 1rem 2.5rem;
  border-radius: 2rem;
  margin: 1.5rem 0 0.5rem 0;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 2px 8px rgba(0,123,255,0.08);
  white-space: nowrap;
  gap: 0.7rem;
  min-width: 0;
  max-width: 100vw;
  overflow-x: auto;

  &:hover {
    background: #007bff;
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.7rem 1rem;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <div className="container">
        <div className="hero-content">
          <h2>서울 경기 인천 다온렌탈!!</h2>
          <PhoneNumber href="tel:010-7725-0048">
            <span style={{ display: 'flex', alignItems: 'center' }}>{FaIcons.FaPhone({style: {width: '1.3em', height: '1.3em'}})}</span>
            010-7725-0048
          </PhoneNumber>
        </div>
        <div className="hero-image">
          <img src="/main.jpeg" alt="고소작업대 이미지" />
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero; 