import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DataEntry.css'; 

const DataEntry = () => {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    about: {
      profilePic: '',
      skills: '',
      interests: '',
      description: ''
    },
    projects: [],
    socialMedia: []
  });
  
  const [currentProject, setCurrentProject] = useState({
    title: '',
    description: '',
    image: '',
    githubLink: ''
  });
  
  const [currentSocial, setCurrentSocial] = useState({
    name: '',
    url: ''
  });
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAboutChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      about: { ...prev.about, [name]: value }
    }));
  };

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject(prev => ({ ...prev, [name]: value }));
  };

  const addProject = () => {
    if (!currentProject.title) return;
    setFormData(prev => ({
      ...prev,
      projects: [...prev.projects, currentProject]
    }));
    setCurrentProject({
      title: '',
      description: '',
      image: '',
      githubLink: ''
    });
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setCurrentSocial(prev => ({ ...prev, [name]: value }));
  };

  const addSocialMedia = () => {
    if (!currentSocial.name || !currentSocial.url) return;
    setFormData(prev => ({
      ...prev,
      socialMedia: [...prev.socialMedia, currentSocial]
    }));
    setCurrentSocial({ name: '', url: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('portfolioData', JSON.stringify(formData));
    navigate('/portfolio');
  };

  return (
    <div className="all">
    <div className="data-entry-container">
      <h1>Portfolio Data Entry</h1>
      <form onSubmit={handleSubmit}>
        {/* Basic Info Section */}
        <section>
          <h2>Basic Information</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="bio"
            placeholder="Short Bio"
            value={formData.bio}
            onChange={handleInputChange}
            required
          />
        </section>

        {/* About Me Section */}
        <section>
          <h2>About Me</h2>
          <input
            type="text"
            name="profilePic"
            placeholder="Profile Picture URL"
            value={formData.about.profilePic}
            onChange={handleAboutChange}
          />
          <input
            type="text"
            name="skills"
            placeholder="Skills (comma separated)"
            value={formData.about.skills}
            onChange={handleAboutChange}
          />
          <input
            type="text"
            name="interests"
            placeholder="Interests"
            value={formData.about.interests}
            onChange={handleAboutChange}
          />
          <textarea
            name="description"
            placeholder="Detailed Description"
            value={formData.about.description}
            onChange={handleAboutChange}
          />
        </section>

        {/* Projects Section */}
        <section>
          <h2>Projects</h2>
          <div className="add-section">
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              value={currentProject.title}
              onChange={handleProjectChange}
              required
            />
            <textarea
              name="description"
              placeholder="Project Description"
              value={currentProject.description}
              onChange={handleProjectChange}
            />
            <input
              type="text"
              name="image"
              placeholder="Project Image URL"
              value={currentProject.image}
              onChange={handleProjectChange}
            />
            <input
              type="text"
              name="githubLink"
              placeholder="GitHub Link"
              value={currentProject.githubLink}
              onChange={handleProjectChange}
            />
            <button type="button" onClick={addProject}>Add Project</button>
          </div>
          <div className="project-list">
            {formData.projects.map((project, index) => (
              <div className="project-item" key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Social Media Section */}
        <section>
          <h2>Social Media Links</h2>
          <div className="add-section">
            <input
              type="text"
              name="name"
              placeholder="Platform Name (e.g., Twitter, LinkedIn)"
              value={currentSocial.name}
              onChange={handleSocialChange}
              required
            />
            <input
              type="text"
              name="url"
              placeholder="URL"
              value={currentSocial.url}
              onChange={handleSocialChange}
              required
            />
            <button type="button" onClick={addSocialMedia}>Add Social Media</button>
          </div>
          <div className="social-list">
            {formData.socialMedia.map((social, index) => (
              <div className="social-item" key={index}>
                <p><strong>{social.name}:</strong> <a href={social.url} target="_blank" rel="noopener noreferrer">{social.url}</a></p>
              </div>
            ))}
          </div>
        </section>

        <button type="submit">Generate Portfolio</button>
      </form>
    </div>
    </div>
  );
};

export default DataEntry;