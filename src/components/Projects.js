import React, { useState} from "react";
import Wrapper from "./Wrapper";
import ProjectCard from "./ProjectCard";
import projects from '../projects.json';




function Project() {
  // Using useState, declare a new state variable 'projectsList' and set it to the 'projects' array from 'projects.json'

  const [projectsList, setProjectsList] = useState(projects);


  const removeProject = (projectId) => {
    const projectsListNewArr = projectsList.filter((project) => project.id !== projectId);
    setProjectsList(projectsListNewArr)
  }


  
 const renderProject = (project) => {
   return (
     <ProjectCard 
     name={project.name} 
     image={project.image} 
     id={project.id} 
     removeProject={removeProject}
     />
   )
 }
  //

  return (
    <Wrapper>
      <h1 className="title">Project List</h1>

        {projectsList.map((project) => (
        renderProject(project)
      ))}      
    </Wrapper>
  );
}

export default Project;