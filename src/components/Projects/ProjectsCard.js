import React from "react";
import { ProjectCard, ProjectDuration, ProjectDescription, ProjectImage, ProjectTitle, Tags, Tag, ProjectDetails } from "../StyledComponents/Card";

const ProjectsCard = ({ project, setOpenModal }) => {
    const githubLink  = project.github
  return (
    <ProjectCard onClick={() => window.open(githubLink)}> 
      <ProjectImage src={project.image} />
      <Tags>
        {project.tags?.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <ProjectDetails>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDuration>{project.date}</ProjectDuration>
        <ProjectDescription>{project.description}</ProjectDescription>
      </ProjectDetails>
    </ProjectCard>
  );
};

export default ProjectsCard;
