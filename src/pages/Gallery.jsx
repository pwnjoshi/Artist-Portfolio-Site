import GalleryGrid from '../components/GalleryGrid';
import './Gallery.css';

const Gallery = () => {
    // All artworks from the arts folder
    const allWorks = [
        { id: 1, src: '/arts/BOA1.jpg', alt: 'Portrait sketch by Bishal Ojha' },
        { id: 2, src: '/arts/BOA2.jpg', alt: 'Artistic drawing by Bishal Ojha' },
        { id: 3, src: '/arts/BOA3.jpg', alt: 'Portrait art by Bishal Ojha' },
        { id: 4, src: '/arts/BOA4.jpg', alt: 'Sketch artwork by Bishal Ojha' },
        { id: 5, src: '/arts/BOA5.jpg', alt: 'Drawing by Bishal Ojha' },
        { id: 6, src: '/arts/BOA6.jpg', alt: 'Portrait sketch by Bishal Ojha' },
        { id: 7, src: '/arts/BOA7.jpg', alt: 'Artistic work by Bishal Ojha' },
        { id: 8, src: '/arts/BOA8.jpg', alt: 'Sketch by Bishal Ojha' },
        { id: 9, src: '/arts/BOA9.jpg', alt: 'Portrait drawing by Bishal Ojha' },
        { id: 10, src: '/arts/BOA10.jpg', alt: 'Art by Bishal Ojha' },
        { id: 11, src: '/arts/BOA11.jpg', alt: 'Portrait sketch by Bishal Ojha' },
        { id: 12, src: '/arts/BOA12.jpg', alt: 'Sketch by Bishal Ojha' },
        { id: 13, src: '/arts/BOA13.jpg', alt: 'Artistic drawing by Bishal Ojha' },
        { id: 14, src: '/arts/BOA14.jpg', alt: 'Portrait art by Bishal Ojha' },
        { id: 15, src: '/arts/BOA15.jpg', alt: 'Drawing by Bishal Ojha' },
        { id: 16, src: '/arts/BOA16.jpg', alt: 'Sketch artwork by Bishal Ojha' },
        { id: 17, src: '/arts/BOA17.jpg', alt: 'Portrait by Bishal Ojha' },
        { id: 18, src: '/arts/BOA18.jpg', alt: 'Art sketch by Bishal Ojha' },
        { id: 19, src: '/arts/BOA19.jpg', alt: 'Drawing by Bishal Ojha' },
        { id: 20, src: '/arts/BOA20.jpg', alt: 'Portrait sketch by Bishal Ojha' },
        { id: 21, src: '/arts/BOA21.jpg', alt: 'Artistic work by Bishal Ojha' },
        { id: 22, src: '/arts/BOA22.jpg', alt: 'Sketch by Bishal Ojha' },
        { id: 23, src: '/arts/BOA23.jpg', alt: 'Portrait art by Bishal Ojha' },
        { id: 24, src: '/arts/BOA24.jpg', alt: 'Drawing by Bishal Ojha' },
        { id: 25, src: '/arts/BOA25.jpg', alt: 'Sketch artwork by Bishal Ojha' },
        { id: 26, src: '/arts/BOA26.jpg', alt: 'Portrait by Bishal Ojha' },
        { id: 27, src: '/arts/BOA27.jpg', alt: 'Artistic drawing by Bishal Ojha' },
        { id: 28, src: '/arts/BOA28.jpg', alt: 'Art by Bishal Ojha' },
        { id: 29, src: '/arts/BOA29.jpg', alt: 'Sketch by Bishal Ojha' },
        { id: 30, src: '/arts/BOA30.jpg', alt: 'Portrait sketch by Bishal Ojha' },
        { id: 31, src: '/arts/IMG-20220701-WA0015.jpg', alt: 'Artwork by Bishal Ojha' },
        { id: 32, src: '/arts/IMG-20221013-WA0006.jpg', alt: 'Drawing by Bishal Ojha' },
        { id: 33, src: '/arts/IMG-20221025-WA0001.jpg', alt: 'Sketch by Bishal Ojha' },
        { id: 34, src: '/arts/artsojha (4).jpg', alt: 'Art by Bishal Ojha' },
    ];

    return (
        <div className="gallery-page">
            <div className="page-hero">
                <div className="container">
                    <h1 className="page-title animate-fade-in">
                        Full <span className="gradient-text">Portfolio</span>
                    </h1>
                    <p className="page-description animate-fade-in">
                        A curated collection of portrait sketches and artistic drawings by Bishal Ojha.
                    </p>
                </div>
            </div>

            <GalleryGrid
                title="All Works"
                subtitle=""
                showViewAll={false}
                images={allWorks}
            />
        </div>
    );
};

export default Gallery;
