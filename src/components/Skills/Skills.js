import React from 'react'
import { Container, Desc, Title, Wrapper } from "../StyledComponents/StyledComponents"
import { Skill, SkillImage, SkillItem, SkillList, SkillTitle, SkillsContainer } from '../StyledComponents/SkillsStyledComponents'
import { skills } from '../../data/db';

const Skills = () => {

  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some skills</Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item) => (
                    <SkillItem>
                      <SkillImage src={item.image}/>
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
            </Skill>
            ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills