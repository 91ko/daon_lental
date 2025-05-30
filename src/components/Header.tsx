import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa6';
import * as SiIcons from 'react-icons/si';

const HeaderContainer = styled.header`
  .header-top {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }

  .main-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .nav-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    
    &:hover {
      color: #007bff;
      background-color: #f8f9fa;
    }

    &.phone {
      color: #007bff;
      &:hover {
        background-color: #e6f0ff;
      }
    }

    &.kakao {
      color: #3C1E1E;
      background-color: #FEE500;
      &:hover {
        background-color: #FFE100;
      }
    }

    svg {
      width: 1.2em;
      height: 1.2em;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }

    .logo h1 {
      font-size: 1.2rem;
    }

    .main-nav ul {
      gap: 1rem;
    }

    .nav-link {
      padding: 0.4rem 0.8rem;
      font-size: 0.9rem;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="header-top">
        <div className="container">
          <div className="logo">
            <h1>고소작업대 다온렌탈</h1>
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="#home" className="nav-link">홈</a>
              </li>
              <li>
                <a href="tel:010-7725-0048" className="nav-link phone">
                  {FaIcons.FaPhone({})}
                  전화문의
                </a>
              </li>
              <li>
                <a 
                  href="https://open.kakao.com/your-kakao-id" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nav-link kakao"
                >
                  {SiIcons.SiKakaotalk({})}
                  카카오톡
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header; 