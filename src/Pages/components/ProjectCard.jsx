const ProjectCard = ({ title, description, image, githubLink }) => {
    return (
      <div className="project-card">
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;