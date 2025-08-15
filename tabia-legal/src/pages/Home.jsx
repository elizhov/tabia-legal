import React from 'react';
import { Carousel } from 'antd';

const slideStyle = {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    background: '#000',
    overflow: 'hidden'
};

const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.7,
};

const textBoxStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#fff',
    fontSize: '1.5rem',
    lineHeight: 1.4,
    maxWidth: '300px',
    textAlign: 'left',
    left: '40px',
    background: 'rgba(0, 0, 0, 0.4)',
    padding: '20px',
    borderRadius: '8px',
    zIndex: 2
};

const images = [
    {
        url: 'https://www.karlheinz-irlmeier.de/files/bilder/galerien/new-york-city-b&w/khi_1804_web-19.jpg',
        left: 'Discover New York City',
        right: 'The city that never sleeps.',
    },
    {
        url: 'https://images.unsplash.com/photo-1586782002395-4b748cf6e71d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
        left: 'Peaceful Streets',
        right: 'A hidden beauty in the chaos.',
    },
    {
        url: 'https://images.unsplash.com/photo-1601711635481-b2c394118b53?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0',
        left: 'Urban Skyline',
        right: 'Sunset views like no other.',
    },
    {
        url: 'https://images7.alphacoders.com/724/724579.jpg',
        left: 'Brooklyn Bridge',
        right: 'A timeless architectural marvel.',
    },
];

export const Home = () => (
    <Carousel autoplay dots={false}>
        {images.map(({ url, left, right }, i) => (
            <div key={i}>
                <div style={slideStyle}>
                    <img src={url} alt="" style={imgStyle} />
                    <div style={textBoxStyle}>
                        <strong>{left}</strong>
                        <br />
                        {right}
                    </div>
                </div>
            </div>
        ))}
    </Carousel>
);
