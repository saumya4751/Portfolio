import React, { useState } from "react";
import { Container, Wrapper, Desc, Title } from "../StyledComponents/StyledComponents";
import styled from "styled-components";
import { projects } from "../../data/db";
import ProjectCard from "./ProjectsCard";

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 10px 0;
  margin-bottom: 5%;
  @media (max-width: 768px){
      font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 5px 20px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
    active &&
    `
  background:  ${theme.primary + 20};
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects" style={{ marginTop: '200px'}}>
      <Wrapper>
        <Title>Projects</Title>
        <Desc
          style={{
            marginBottom: "20px",
          }}
        >
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        {/* <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            ALL
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            WEB APP"S
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "android app"}
            onClick={() => setToggle("android app")}
          >
            ANDROID APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "machine learning"}
            onClick={() => setToggle("machine learning")}
          >
            MACHINE LEARNING
          </ToggleButton>
        </ToggleButtonGroup> */}
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;


// const Projects = () => {
//   return (
//     <Container id="projects">
//         <Wrapper>
//         <Title>Education</Title>
//             <Desc>
//                 My education has been a journey of self-discovery and growth. My educational details are as follows.
//             </Desc>
//         </Wrapper>
//     </Container>
//   )
// }

// export default Projects