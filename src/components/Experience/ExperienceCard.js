import React from 'react';
import { Card, Top, Logo, Body, Description, Span, Role, Company, Duration } from '../StyledComponents/Card';

const ExperienceCard = ({ experience, idx }) => {
  const isEven = (idx % 2 === 0)
  
  return (
    <Card isEven={isEven}>
        <Top>
            <Logo src={experience.img} />
            <Body>
                <Role>{experience.role}</Role>
                <Company>{experience.company}</Company>
                <Duration>{experience.date}</Duration>
            </Body>
        </Top>
        <Description>
            <Span>{experience.desc}</Span> <br/>
            <Span><b>Technologies:</b> {experience.skills}</Span>
        </Description>
    </Card>
  )
}

export default ExperienceCard