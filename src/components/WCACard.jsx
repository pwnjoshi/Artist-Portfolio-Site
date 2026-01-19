import './WCACard.css';

const WCACard = () => {
    return (
        <div className="wca-card glass-card">
            {/* Header Section */}
            <div className="wca-header">
                <span className="wca-label">WCA PROFILE</span>
                <div className="wca-profile-badge">
                    <img src="/profile.jpg" alt="Bishal Ojha" className="profile-picture" />
                </div>
            </div>

            {/* Profile Info */}
            <div className="wca-profile-info">
                <h3 className="wca-name">Bishal Ojha</h3>
                <div className="wca-meta">
                    <span className="wca-id">
                        <svg className="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9a1 1 0 112 0 1 1 0 01-2 0zm1-5a1 1 0 011 1v3a1 1 0 11-2 0V5a1 1 0 011-1z" />
                        </svg>
                        2025OJHA01
                    </span>
                    <span className="wca-country">
                        <svg className="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v3.528A6.002 6.002 0 0110 18a6 6 0 01-5.937-5.113C4.668 12.58 5 12 5.5 12H6a1 1 0 001-1z" clipRule="evenodd" />
                        </svg>
                        <span className="country-name">Nepal</span>
                        <span className="flag">🇳🇵</span>
                    </span>
                </div>
            </div>

            {/* Stats Section */}
            <div className="wca-stats">
                <div className="stat-item">
                    <div className="stat-icon competitions">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">COMPETITIONS</span>
                        <span className="stat-value">3</span>
                    </div>
                </div>

                <div className="stat-item">
                    <div className="stat-icon solves">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">TOTAL SOLVES</span>
                        <span className="stat-value gradient-text-alt">124</span>
                    </div>
                </div>
            </div>

            {/* Status Footer */}
            <div className="wca-footer">
                <span className="wca-status">Status: Active</span>
                <span className="status-badge">
                    <span className="status-dot"></span>
                    Online
                </span>
            </div>
        </div>
    );
};

export default WCACard;
