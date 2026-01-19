import WCACard from '../components/WCACard';
import './Dueling.css';

const Dueling = () => {
    const achievements = [
        { event: '3x3x3 Cube', time: '12.34s', rank: 'National Top 10' },
        { event: '2x2x2 Cube', time: '3.52s', rank: 'Regional Champion' },
        { event: 'Pyraminx', time: '4.89s', rank: 'Personal Best' },
    ];

    return (
        <div className="dueling-page">
            <div className="page-hero">
                <div className="container">
                    <h1 className="page-title animate-fade-in">
                        Competitive <span className="gradient-text">Cubing</span>
                    </h1>
                    <p className="page-description animate-fade-in">
                        Speed, strategy, and precision. Explore my journey in the World Cube Association.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="dueling-content">
                        {/* WCA Card */}
                        <div className="wca-card-section">
                            <WCACard />
                        </div>

                        {/* About Section */}
                        <div className="dueling-info">
                            <h2 className="section-title">About My Cubing Journey</h2>
                            <p className="info-text">
                                I started speedcubing in 2020 and have been competing in WCA events since 2025.
                                My passion for cubing mirrors my artistic pursuits - both require patience,
                                practice, and a deep appreciation for patterns and precision.
                            </p>

                            <h3 className="subsection-title">Competition Highlights</h3>
                            <div className="achievements-grid">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="achievement-card glass">
                                        <h4 className="achievement-event">{achievement.event}</h4>
                                        <p className="achievement-time gradient-text">{achievement.time}</p>
                                        <p className="achievement-rank">{achievement.rank}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="cta-section">
                                <a
                                    href="https://www.worldcubeassociation.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    <svg className="btn-icon-svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                    View Full WCA Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dueling;
