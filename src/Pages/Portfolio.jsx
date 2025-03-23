import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    // Load data from localStorage
    const data = localStorage.getItem('portfolioData');
    if (data) {
      setPortfolioData(JSON.parse(data));
    }
  }, []);

  if (!portfolioData) {
    return <div>Loading portfolio...</div>;
  }

  return (
    <div className="portfolio-container">
      <ThemeToggle />
      <Navbar />
      <Hero name={portfolioData.name} bio={portfolioData.bio} />
      <About
        profilePic={portfolioData.about.profilePic}
        skills={portfolioData.about.skills}
        interests={portfolioData.about.interests}
        description={portfolioData.about.description}
      />
      <Projects projects={portfolioData.projects}/>
      <Contact />
      <Footer socialMedia={portfolioData.socialMedia} />
    </div>
  );
};

export default Portfolio;