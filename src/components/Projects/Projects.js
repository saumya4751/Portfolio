import React, { useState } from "react";
import { Container, Wrapper, Desc, Title } from "../StyledComponents/StyledComponents";
import { projects } from "../../data/db";
import ProjectCard from "./ProjectsCard";
import { ProjectCardContainer, ToggleButton, ToggleButtonGroup, Divider,  } from "../StyledComponents/ProjectsStyledComponents";


const Projects = () => {
  const [toggle, setToggle] = useState("all");

  return (
    <Container id="projects">
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
        <ToggleButtonGroup>
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
            WEB APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "machine learning"}
            onClick={() => setToggle("machine learning")}
          >
            MACHINE LEARNING
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "other"}
            onClick={() => setToggle("other")}
          >
            Others
          </ToggleButton>
        </ToggleButtonGroup>
        <ProjectCardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
              />
            ))}
        </ProjectCardContainer>
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