import Hero from '../components/Hero';
import GalleryGrid from '../components/GalleryGrid';

const Home = () => {
    // Featured artworks for home page
    const featuredWorks = [
        { id: 1, src: '/arts/BOA1.jpg', alt: 'Portrait sketch by Bishal Ojha' },
        { id: 2, src: '/arts/BOA2.jpg', alt: 'Artistic drawing by Bishal Ojha' },
        { id: 3, src: '/arts/BOA3.jpg', alt: 'Portrait art by Bishal Ojha' },
        { id: 4, src: '/arts/BOA4.jpg', alt: 'Sketch artwork by Bishal Ojha' },
        { id: 5, src: '/arts/BOA5.jpg', alt: 'Drawing by Bishal Ojha' },
        { id: 6, src: '/arts/BOA6.jpg', alt: 'Portrait sketch by Bishal Ojha' },
        { id: 7, src: '/arts/BOA7.jpg', alt: 'Artistic work by Bishal Ojha' },
        { id: 8, src: '/arts/BOA8.jpg', alt: 'Sketch by Bishal Ojha' },
    ];

    return (
        <div className="home-page">
            <Hero />
            <GalleryGrid
                title="Latest Dual-Works"
                subtitle="Highlights from the sketchbook and the competition floor."
                showViewAll={true}
                images={featuredWorks}
            />
        </div>
    );
};

export default Home;
