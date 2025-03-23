import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Projects = (props) => {
  const [projects, setProjects] = useState(props.projects);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    
    const items = Array.from(projects);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setProjects(items);
  };


  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="projects">
          {(provided) => (
            <div 
              className="projects-grid"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {projects.map((project, index) => (
                <Draggable 
                  key={project.title} 
                  draggableId={project.title} 
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        githubLink={project.githubLink}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};

export default Projects;