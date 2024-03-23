import './App.css';
import styled, { ThemeProvider } from "styled-components";
import {  BrowserRouter as Router } from 'react-router-dom';
import { darkTheme, lightTheme } from './utils/Themes';
import { motion, useScroll } from "framer-motion";
import Navbar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background:linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  /* background:linear-gradient(0.73deg, #cce6ff 0%, #fff 70%); */
  width: 100%;
  height: 100%;
  /* clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%); */
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme} >
        <Router>
          <Navbar /> 
          <Body>
            {/* <Wrapper>
              <Home />
            </Wrapper> */}
            <Wrapper>
            <Home />
              <Skills />
              <Experience />
              <Education />  
              <Projects openModal={openModal} setOpenModal={setOpenModal} />          
              <Footer />
            </Wrapper>
          </Body>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
