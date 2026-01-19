import { Link } from 'react-router-dom';
import WCACard from './WCACard';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                {/* Left Side - Main Content */}
                <div className="hero-content">
                    <span className="hero-label animate-fade-in">A ORIGINAL ENTHUSIASM</span>
                    <h1 className="hero-title animate-fade-in">
                        Precision Meets<br />
                        <span className="gradient-text">Creativity</span>
                    </h1>
                    <p className="hero-description animate-fade-in">
                        Merging the logical complexity of the WCA world with the soulful expression of portrait art. Explore the duality of Bishal Ojha.
                    </p>

                    <div className="hero-buttons animate-fade-in">
                        <Link to="/gallery" className="btn btn-primary">
                            <svg className="btn-icon-svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                            View Sketches
                        </Link>
                        <a
                            href="https://www.worldcubeassociation.org/persons/2025OJHA01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            <svg className="btn-icon-svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            Check WCA Profile
                        </a>
                    </div>
                </div>

                {/* Right Side - WCA Card */}
                <div className="hero-card-container">
                    <WCACard />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <span className="scroll-text">SCROLL</span>
                <svg className="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
