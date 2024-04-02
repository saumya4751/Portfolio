import React from 'react';
import { Card, Top, Logo, Body, Description, Span, Role, Company, Duration } from '../StyledComponents/Card';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ExperienceCard = ({ experience, idx }) => {
  const isEven = (idx % 2 === 0)
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  let variants = {
    hidden: { opacity: 1, x:'-50%' },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' }}
  }

  if (isEven || window.innerWidth <= 940) {
    variants.hidden.x = '50%'
  } 

  if (inView) {
    controls.start('visible');
  }
  
  return (
    <Card isEven={isEven} ref={ref} animate={controls} initial="hidden" variants={variants}> 
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