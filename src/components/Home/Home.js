import React from 'react'
import { Bio } from '../../data/db';
import Typewriter from 'typewriter-effect';
import { HomeBg, HomeContainer, HomeInnerContainer, HomeLeft, HomeRight, Description, Image, ResumeButton, Span, TextLoop, Title } from '../StyledComponents/HomeStyledComponents';
import image from "../../images/image.jpg";
import styled from 'styled-components';

const DotPattern = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <div id='home'>
      
        <HomeContainer>
          <HomeBg>
          </HomeBg>
          <HomeInnerContainer>
            <HomeLeft>
              <Title>
                Hi, I am <br />
                {Bio.name}
              </Title>
              <TextLoop>
                I am a
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true
                    }}
                  />
                </Span>
              </TextLoop>
              <Description>{Bio.description}</Description>
              <ResumeButton href={Bio.resume} target="_blank">Check Resume</ResumeButton>
            </HomeLeft>
            <HomeRight>
              <Image src={image} alt="Hero" />
            </HomeRight>
          </HomeInnerContainer>
        </HomeContainer>
      
    </div>
  )
}

export default Home