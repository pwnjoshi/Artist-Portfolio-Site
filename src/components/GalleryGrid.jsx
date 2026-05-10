import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import ImageLightbox from './ImageLightbox';
import './GalleryGrid.css';

const GalleryGrid = ({ title, subtitle, showViewAll = true, images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const defaultImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop', alt: 'Artistic sketch' },
    { id: 2, src: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=800&auto=format&fit=crop', alt: 'Rubiks cube' },
    { id: 3, src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop', alt: 'Portrait art' },
    { id: 4, src: 'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=800&auto=format&fit=crop', alt: 'Speedcube setup' },
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <>
      <section className="gallery-section section">
        <div className="container">
          <div className="gallery-header">
            <div>
              <h2 className="gallery-title">{title || 'Latest Dual-Works'}</h2>
              {subtitle && <p className="gallery-subtitle">{subtitle}</p>}
            </div>
            {showViewAll && (
              <a href="/gallery" className="view-all-link">
                View Full Portfolio <ArrowRight size={18} />
              </a>
            )}
          </div>

          <motion.div 
            className="gallery-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {displayImages.map((image) => (
              <motion.div
                key={image.id}
                className="gallery-item"
                variants={itemVariants}
                whileHover={{ y: -5 }}
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
                      onClick={() => setSelectedImage(image)}
                      aria-label={`View ${image.alt}`}
                    >
                      <Eye size={24} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {selectedImage && (
        <ImageLightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default GalleryGrid;
