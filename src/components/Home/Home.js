import React from 'react'
import { Bio } from '../../data/db';
import Typewriter from 'typewriter-effect';
import TypeIt from "typeit-react";
import { HomeBg, HomeContainer, HomeInnerContainer, HomeLeft, HomeRight, Description, Image, ResumeButton, Span, TextLoop, Title } from '../StyledComponents/HomeStyledComponents';
import image from "../../images/image.jpg";
import image1 from "../../images/image1.png";

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
              <Image src={image1} alt="Hero" />
            </HomeRight>
          </HomeInnerContainer>
        </HomeContainer>
      
    </div>
  )
}

export default Home