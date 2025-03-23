const Footer = ({ socialMedia }) => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="social-links">
            {socialMedia.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;