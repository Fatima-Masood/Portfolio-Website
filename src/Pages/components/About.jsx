const About = ({ profilePic, skills, interests, description }) => {
    const skillsList = skills.split(',').map(skill => skill.trim());
    
    return (
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="D:/PICTURESS/IMG_5639" alt="Profile" />
          </div>
          <div className="about-text">
            <p>{description}</p>
            <div className="skills-section">
              <h3>Skills</h3>
              <ul className="skills-list">
                {skillsList.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="interests-section">
              <h3>Interests</h3>
              <p>{interests}</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;