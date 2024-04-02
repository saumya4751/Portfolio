import React from 'react'
import { Card, Top, Logo, Body, Description, Span, Role, Company, Duration, Grade } from '../StyledComponents/Card';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EducationCard = ({education, idx}) => {
  const isEven = (idx % 2 !== 0)
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  let variants = {
    hidden: { opacity: 0, x:'-50%' },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' }}
  }

  if (isEven || window.innerWidth <= 940) {
    variants.hidden.x = '50%'
  } 

  // if ()

  if (inView) {
    controls.start('visible');
  }
  
  return (
    <Card isEven={isEven} ref={ref} animate={controls} initial="hidden" variants={variants}>
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