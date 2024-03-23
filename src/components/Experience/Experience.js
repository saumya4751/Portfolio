import React from 'react';
import { Container, Desc, Title, Wrapper, TimelineSection } from '../StyledComponents/StyledComponents';
import { experiences } from '../../data/db';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './ExperienceCard';
import LaptopTwoToneIcon from '@mui/icons-material/LaptopTwoTone';


const Experience = () => {
  const width = window.innerWidth;

  return (
    <Container id='experience'>
        <Wrapper>
            <Title>
                Experience
            </Title>
            <Desc>
                some experience
            </Desc>
            { (width > 768) ? (
                <TimelineSection>
                    <Timeline style={{ display: 'flex', justifyContent: 'center'}}>                    
                        {experiences.map((experience, idx) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant='outlined' color='secondary'><LaptopTwoToneIcon/></TimelineDot>
                                    {idx !== experiences.length - 1 && (
                                        <TimelineConnector sx={{ 
                                            background: '#854CE6',
                                            height: "210px",
                                        }}  />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <ExperienceCard experience={experience} idx={idx} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            ) : (
                <TimelineSection>
                    <Timeline style={{ display: 'flex', justifyContent: 'center'}}>                    
                        {experiences.map((experience, idx) => (
                            <TimelineItem position='right'>
                                <TimelineSeparator>
                                    <TimelineDot variant='outlined' color='secondary' />
                                    {idx !== experiences.length - 1 && (
                                        <TimelineConnector sx={{ 
                                            background: '#854CE6',
                                            height: "220px",
                                        }}  />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <ExperienceCard experience={experience} idx={idx} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
            </TimelineSection>
            )}
            
        </Wrapper>
    </Container>
  )
}

export default Experience