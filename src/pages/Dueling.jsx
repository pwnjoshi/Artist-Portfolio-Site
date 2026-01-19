import WCACard from '../components/WCACard';
import './Dueling.css';

const Dueling = () => {
    // Official WCA Personal Records - 2025OJHA01
    const personalRecords = [
        { event: '3x3x3 Cube', single: '19.72s', average: '23.75s', icon: '🎯' },
        { event: '2x2x2 Cube', single: '5.58s', average: '7.03s', icon: '⚡' },
        { event: '4x4x4 Cube', single: '1:18.82', average: '1:35.70', icon: '🔥' },
        { event: '5x5x5 Cube', single: '2:48.93', average: '2:55.46', icon: '💪' },
        { event: '6x6x6 Cube', single: '5:33.35', average: '6:08.06', icon: '🚀' },
        { event: '3x3x3 One-Handed', single: '1:01.41', average: '1:22.88', icon: '👋' },
        { event: 'Megaminx', single: '3:33.33', average: '-', icon: '⭐' },
        { event: 'Pyraminx', single: '7.76s', average: '8.64s', icon: '🔺' },
        { event: 'Skewb', single: '8.71s', average: '18.46s', icon: '💎' },
    ];

    // Competition History
    const competitions = [
        { name: 'IEEE Cubing Nepal 2025', date: 'January 2025', location: 'Nepal' },
        { name: 'Nepali Nationals 2025', date: '2025', location: 'Nepal' },
        { name: 'LOCUS Cubing Nepal 2025', date: '2025', location: 'Nepal' },
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
                    <div className="stats-summary">
                        <div className="stat-item">
                            <span className="stat-number gradient-text">3</span>
                            <span className="stat-label">Competitions</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number gradient-text">124</span>
                            <span className="stat-label">Solves</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number gradient-text">9</span>
                            <span className="stat-label">Events</span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="dueling-content">
                        {/* WCA Card */}
                        <div className="wca-card-section">
                            <WCACard />
                        </div>

                        {/* Personal Records Section */}
                        <div className="dueling-info">
                            <h2 className="section-title">Personal Records</h2>
                            <p className="info-text">
                                Official times from World Cube Association competitions. Each event showcases
                                my best single solve and average of 5 solves.
                            </p>

                            <div className="records-grid">
                                {personalRecords.map((record, index) => (
                                    <div key={index} className="record-card glass">
                                        <div className="record-header">
                                            <span className="record-icon">{record.icon}</span>
                                            <h4 className="record-event">{record.event}</h4>
                                        </div>
                                        <div className="record-times">
                                            <div className="time-item">
                                                <span className="time-label">Single</span>
                                                <span className="time-value gradient-text">{record.single}</span>
                                            </div>
                                            <div className="time-divider"></div>
                                            <div className="time-item">
                                                <span className="time-label">Average</span>
                                                <span className="time-value gradient-text">{record.average}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Competition History */}
                            <h3 className="subsection-title">Competition History</h3>
                            <div className="competitions-list">
                                {competitions.map((comp, index) => (
                                    <div key={index} className="competition-item glass">
                                        <div className="comp-icon">🏆</div>
                                        <div className="comp-details">
                                            <h4 className="comp-name">{comp.name}</h4>
                                            <p className="comp-meta">{comp.date} • {comp.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* About Section */}
                            <h3 className="subsection-title">About My Cubing Journey</h3>
                            <p className="info-text">
                                I started speedcubing in 2020 and have been competing in WCA events since 2025.
                                My passion for cubing mirrors my artistic pursuits - both require patience,
                                practice, and a deep appreciation for patterns and precision.
                            </p>

                            <div className="cta-section">
                                <a
                                    href="https://www.worldcubeassociation.org/persons/2025OJHA01"
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
