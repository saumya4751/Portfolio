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
import { useTheme } from 'styled-components';


const Experience = () => {
  const width = window.innerWidth;
  const theme = useTheme();
  return (
    <Container id='experience'> 
    {/* // marginTop: '70px' */}
        <Wrapper>
            <Title>
                Experience
            </Title>
            <Desc>
                some experience
            </Desc>
            { (width > 768) ? (
                <TimelineSection>
                    <Timeline style={{ display: 'flex', justifyContent: 'left'}}>                    
                        {experiences.map((experience, idx) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot style={{ borderColor: `${theme.primary}` }} variant='outlined' color='primary'><LaptopTwoToneIcon fontSize='small' style={{ color: `${theme.text_title}`}} /></TimelineDot>
                                    {idx !== experiences.length - 1 && (
                                        <TimelineConnector sx={{ 
                                            background: `${theme.primary+99}`,
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
                    <Timeline style={{ display: 'flex', justifyContent: 'left'}}>                    
                        {experiences.map((experience, idx) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot style={{ borderColor: `${theme.primary}` }} variant='outlined' color='primary'><LaptopTwoToneIcon fontSize='small' style={{ color: `${theme.text_title}`}} /></TimelineDot>
                                    {idx !== experiences.length - 1 && (
                                        <TimelineConnector sx={{ 
                                            background: `${theme.primary+99}`,
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