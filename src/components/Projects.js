import React, { useState} from "react";
import projects from '../projects.json';






function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong> 
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove"> */}
        {/* 𝘅
      </span> */}
    </div>
  );
}


function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}


function Projects() {
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
     url={project.url} 
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

export default Projects;