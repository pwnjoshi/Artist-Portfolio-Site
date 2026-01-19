import { useEffect } from 'react';
import './ImageLightbox.css';

const ImageLightbox = ({ image, onClose }) => {
    useEffect(() => {
        // Prevent body scroll when lightbox is open
        document.body.style.overflow = 'hidden';

        // Add escape key listener
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    if (!image) return null;

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-container">
                {/* Close Button */}
                <button className="lightbox-close" onClick={onClose} aria-label="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Image */}
                <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="lightbox-image"
                    />
                    <p className="lightbox-caption">{image.alt}</p>
                </div>
            </div>
        </div>
    );
};

export default ImageLightbox;
