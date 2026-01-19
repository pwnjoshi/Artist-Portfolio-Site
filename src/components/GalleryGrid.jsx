import { useState } from 'react';
import ImageLightbox from './ImageLightbox';
import './GalleryGrid.css';

const GalleryGrid = ({ title, subtitle, showViewAll = true, images = [] }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Default images if none provided
    const defaultImages = [
        { id: 1, src: '/images/eye-sketch.jpg', alt: 'Detailed eye sketch' },
        { id: 2, src: '/images/rubiks-cube.jpg', alt: 'Rubiks cube in hands' },
        { id: 3, src: '/images/portrait-sketch.jpg', alt: 'Portrait sketch' },
        { id: 4, src: '/images/cube-collection.jpg', alt: 'Speedcube collection' },
    ];

    const displayImages = images.length > 0 ? images : defaultImages;

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <section className="gallery-section section">
                <div className="container">
                    {/* Header */}
                    <div className="gallery-header">
                        <div>
                            <h2 className="gallery-title">{title || 'Latest Dual-Works'}</h2>
                            {subtitle && <p className="gallery-subtitle">{subtitle}</p>}
                        </div>
                        {showViewAll && (
                            <a href="/gallery" className="view-all-link">
                                View Full Portfolio
                                <svg className="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        )}
                    </div>

                    {/* Gallery Grid */}
                    <div className="gallery-grid">
                        {displayImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="gallery-item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="gallery-image-wrapper">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="gallery-image"
                                        loading="lazy"
                                    />
                                    <div className="gallery-overlay">
                                        <button
                                            className="gallery-view-btn"
                                            onClick={() => handleImageClick(image)}
                                            aria-label={`View ${image.alt}`}
                                        >
                                            <svg viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Lightbox */}
            {selectedImage && (
                <ImageLightbox
                    image={selectedImage}
                    onClose={handleCloseLightbox}
                />
            )}
        </>
    );
};

export default GalleryGrid;
