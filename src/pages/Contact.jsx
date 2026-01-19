import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus('');

        const formData = new FormData(e.target);

        formData.append('access_key', '1f9042a0-8d1e-4f67-a601-a7f482fd15e7');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setFormStatus('success');
                e.target.reset();
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setFormStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            <div className="page-hero">
                <div className="container">
                    <h1 className="page-title animate-fade-in">
                        Get In <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="page-description animate-fade-in">
                        Let's collaborate on art projects or discuss speedcubing strategies.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="contact-content">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="form-input"
                                        placeholder="What's this about?"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        className="form-input form-textarea"
                                        placeholder="Your message..."
                                        required
                                    ></textarea>
                                </div>

                                {formStatus === 'success' && (
                                    <div className="form-message success">
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}

                                {formStatus === 'error' && (
                                    <div className="form-message error">
                                        Oops! Something went wrong. Please try again.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="btn-icon-svg spin" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="btn-icon-svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                            </svg>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="info-card glass-card">
                                <h3 className="info-card-title">Connect With Me</h3>
                                <p className="info-card-text">
                                    I'm always excited to discuss new art projects, cubing competitions,
                                    or collaboration opportunities.
                                </p>

                                <div className="contact-links">
                                    <a href="mailto:me@bishalojha.com.np" className="contact-link">
                                        <div className="contact-icon">
                                            <svg viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="contact-link-label">Email</p>
                                            <p className="contact-link-value">me@bishalojha.com.np</p>
                                        </div>
                                    </a>

                                    <a href="https://www.instagram.com/bshaloza77/" target="_blank" rel="noopener noreferrer" className="contact-link">
                                        <div className="contact-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                                                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="contact-link-label">Instagram</p>
                                            <p className="contact-link-value">@bshaloza77</p>
                                        </div>
                                    </a>

                                    <a href="https://www.worldcubeassociation.org/persons/2025OJHA01" target="_blank" rel="noopener noreferrer" className="contact-link">
                                        <div className="contact-icon">
                                            <svg viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v3.528A6.002 6.002 0 0110 18a6 6 0 01-5.937-5.113C4.668 12.58 5 12 5.5 12H6a1 1 0 001-1z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="contact-link-label">WCA Profile</p>
                                            <p className="contact-link-value">2025OJHA01</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
