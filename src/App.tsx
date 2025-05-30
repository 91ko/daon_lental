import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Main>
        <Hero />
        <ContactInfo />
      </Main>
      <Footer />
      <FloatingButtons />
    </AppContainer>
  );
}

export default App;
