import { Link } from 'react-scroll';

const Hero = ({ name, bio }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Hello, I'm {name}</h1>
        <p>{bio}</p>
      </div>
    </section>
  );
};

export default Hero;