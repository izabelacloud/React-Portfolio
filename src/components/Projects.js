import React, { useState} from "react";
import projects from '../projects.json';
import 'bootstrap/dist/css/bootstrap.min.css';






function ProjectCard(props) {
  return (
    <div className="card-container col-12">
        <div className="card">
          <img alt={props.name} src={props.image} className="card-img" />
          <h3>{props.name}</h3>
          <a href={props.github} target="_blank" rel="noopener noreferrer">Github</a>
          <div>
              <a href={props.deployedapp} target="_blank" rel="noopener noreferrer">Deployed Application</a>  
          </div>
      </div>  
    </div>
  );
}


function Wrapper(props) {
  return <div className="">{props.children}</div>;
}


function Projects() {
  // Using useState, declare a new state variable 'projectsList' and set it to the 'projects' array from 'projects.json'

  const [projectsList, setProjectsList] = useState(projects);

  
 const renderProject = (project) => {
   return (
     <ProjectCard 
     name={project.name} 
     image={project.image} 
     id={project.id} 
     github={project.github} 
     deployedapp={project.deployedapp}
     key={project.id}
     />
   )
 }
  //

  return (
    <Wrapper>
      <h1 className="project-list">Project List</h1>

        {projectsList.map((project) => (
        renderProject(project)
      ))}      
    </Wrapper>
  );
}

export default Projects;