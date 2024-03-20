import React from 'react';
import { Container, Desc, Title, Wrapper } from '../Skills/SkillsStyledComponents';
import { experiences } from '../../data/db';
import { TimeLineSection } from './ExperienceStyledComponents';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <Container id='experience'>
        <Wrapper>
            <Title>
                Experience
            </Title>
            <Desc>
                some experience
            </Desc>
            <TimeLineSection>
                <Timeline>
                    {experiences.map((experience, idx) => (
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant='outlined' color='secondary' />
                                {idx !== experiences.length - 1 && (
                                    <TimelineConnector />
                                )}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <ExperienceCard experience={experience} />
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </TimeLineSection>
        </Wrapper>
    </Container>
  )
}

export default Experience