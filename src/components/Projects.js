import React from 'react'
import data from '../data.js'
import InprogressProjects from './InprogressProjects.js'
import Project from './Project.js'

const Projects = () => {
  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <InprogressProjects />
      <div className="row">
        <h2 className='custom-font text-center pb-5 '>Finished Projects: </h2>
        {data.ProjectsData.map((project) => {
          return(
            <div className="col-12 d-flex justify-content-center" key={project.id}>
                <Project id={project.id}
                  image={project.img}
                  name={project.name}
                  stack={project.stack}
                  live={project.live}
                  source={project.source}
                  desc={project.description}
                />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects