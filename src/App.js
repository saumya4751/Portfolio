import './App.css';
import styled, { ThemeProvider } from "styled-components";
import {  BrowserRouter as Router } from 'react-router-dom';
import { darkTheme, lightTheme } from './utils/Themes';
import Navbar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.app_lg};
  width: 100%;
  height: 100%;
`;

function App() {
 
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = lightTheme
  if (isDark) {
    theme = darkTheme
  } else {
    theme = lightTheme
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <Router>
          <Navbar /> 
          <Body>
            <Home />
            <Wrapper>
              <Skills />
              <Experience />
              <Education />  
              <Projects />
              <Contact />
            </Wrapper>
            <Footer />
          </Body>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
