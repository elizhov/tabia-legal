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
    transform: 'scale(1.05)',
    filter: 'blur(6px)',
};

const textBoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    textAlign: 'center',
    zIndex: 2,
    background: 'none',
    boxShadow: 'none',
    lineHeight: 1.2,
};

const textShadowStyle = {
    textShadow: '2px 2px 8px rgba(0,0,0,0.6)' // 🔹 subtle shadow
};

const images = [
    {
        url: 'https://images.unsplash.com/photo-1586782002395-4b748cf6e71d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
        url: 'https://images.unsplash.com/photo-1601711635481-b2c394118b53?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
        url: 'https://images7.alphacoders.com/724/724579.jpg',
    },
];

export const Home = () => (
    <Carousel>
        {images.map(({ url }, i) => (
            <div key={i}>
                <div style={slideStyle}>
                    <img src={url} alt="" style={imgStyle} />
                    <div style={textBoxStyle}>
                        <div style={{ fontSize: '4rem', fontWeight: 900, ...textShadowStyle }}>
                            TABIA
                        </div>
                        <div style={{ fontSize: '4rem', fontWeight: 900, ...textShadowStyle }}>
                            LEGAL & ADVISORY
                        </div>
                        <div style={{ fontSize: '2rem', fontWeight: 500, marginTop: '20px', ...textShadowStyle }}>
                            TAKING YOU TO THE TOP OF YOUR GAME
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </Carousel>
);
