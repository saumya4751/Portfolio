import React from 'react'
import { Card, Top, Logo, Body, Description, Span, Role, Company, Duration, Grade } from '../StyledComponents/Card';

const EducationCard = ({education, idx}) => {
  const isEven = (idx % 2 !== 0)
  
  return (
    <Card isEven={isEven}>
        <Top>
            <Logo src={education.img} />
            <Body>
                <Role>{education.school}</Role>
                <Company>{education.degree}</Company>
                <Duration>{education.date}</Duration>
            </Body>
        </Top>
        <Grade><b>Grade: </b>{education.grade}</Grade>
        <Description>
            <Span><b>Relevant Coursework: </b>{education.desc}</Span>
        </Description>
    </Card>
  )
}

export default EducationCard