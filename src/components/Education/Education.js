import React from 'react'
import { Container, Desc, Title, Wrapper } from '../StyledComponents/StyledComponents';
import { TimelineSection } from '../StyledComponents/StyledComponents'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { educations } from '../../data/db';
import EducationCard from './EducationCard';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { useTheme } from 'styled-components';

const Education = () => {
  const width = window.innerWidth;
  const theme = useTheme();
  return (
    <Container id="education">
        <Wrapper>
            <Title>Education</Title>
            <Desc>
                My education has been a journey of self-discovery and growth. My educational details are as follows.
            </Desc>
            { (width > 768) ? (
                <TimelineSection>
                    <Timeline>
                        {educations.map((education, idx) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot style={{ borderColor: `${theme.primary}` }} variant='outlined' color='primary'><SchoolOutlinedIcon fontSize='small' style={{ color: `${theme.text_title}`}} /></TimelineDot>
                                    {idx !== educations.length - 1 && (
                                        <TimelineConnector sx={{ 
                                            background: `${theme.primary+99}`,
                                        }}  />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education} idx={idx}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            ) : (
                <TimelineSection>
                    <Timeline>
                        {educations.map((education, idx) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot style={{ borderColor: `${theme.primary}` }} variant='outlined' color='primary'><SchoolOutlinedIcon fontSize='small' style={{ color: `${theme.text_title}`}} /></TimelineDot>
                                    {idx !== educations.length - 1 && (
                                        <TimelineConnector sx={{ 
                                            background: `${theme.primary+99}`,
                                            height: "175px"
                                        }}  />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education} idx={idx}/>
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

export default Education