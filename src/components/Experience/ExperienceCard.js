import React from 'react';
import { Card, Top, Logo, Body, Description, Span, Role, Company, Duration } from '../StyledComponents/Card';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ExperienceCard = ({ experience, idx }) => {
  const isEven = (idx % 2 === 0)
  // const controls = useAnimation();
  // const [ref, inView] = useInView({ threshold: 0.5 });

  // const variants = {
  //   hidden: { opacity: 0, x:'-100%' },
  //   visible: { opacity: 1, x: 0, transition: {duration: 0.1}}
  // }

  // if (inView) {
  //   controls.start('visible');
  // }
  // ref={ref}animate={controls} initial="hidden" variants={variants}
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