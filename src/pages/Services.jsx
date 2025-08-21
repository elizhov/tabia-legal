import React, { useRef, useState, useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import {
    BuildOutlined,
    ProjectOutlined,
    BankOutlined,
    ThunderboltOutlined,
    GlobalOutlined,
    SolutionOutlined,
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';
import '../styles/Services.css';

const services = [
    { title: 'Mining', icon: <BuildOutlined /> },
    { title: 'Projects', icon: <ProjectOutlined /> },
    { title: 'Public Private Partnerships', icon: <BankOutlined /> },
    { title: 'Energy Infrastructure & Resources', icon: <ThunderboltOutlined /> },
    { title: 'Residence & Citizenship by Investment', icon: <GlobalOutlined /> },
    { title: 'Commercial Arbitration', icon: <SolutionOutlined /> },
];

export const Services = () => {
    const sectionRefs = services.map(() => useRef(null));
    const scrollContainerRef = useRef(null);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    const scrollToSection = (index) => {
        sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    // Check scroll position and update arrow visibility
    const updateArrows = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeft(scrollLeft > 10); // show if not at start
            setShowRight(scrollLeft + clientWidth < scrollWidth - 10); // show if not at end
        }
    };

    useEffect(() => {
        updateArrows(); // run once
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', updateArrows);
            window.addEventListener('resize', updateArrows);
        }
        return () => {
            if (container) container.removeEventListener('scroll', updateArrows);
            window.removeEventListener('resize', updateArrows);
        };
    }, []);

    return (
        <div className="services-page">
            <div className="services-hero">
                <div className="overlay">

                    {/* Desktop grid */}
                    <div className="services-cards desktop-only">
                        <Row gutter={[16, 16]} justify="center">
                            {services.map((service, index) => (
                                <Col xs={24} sm={12} md={8} lg={4} key={index}>
                                    <Card
                                        hoverable
                                        className="service-card"
                                        onClick={() => scrollToSection(index)}
                                    >
                                        <div className="icon">
                                            {React.cloneElement(service.icon, {
                                                style: { fontSize: '28px', color: '#7c1524' },
                                            })}
                                        </div>
                                        <h3 className={service.title.includes("Residence") ? "long-title" : ""}>
                                            {service.title}
                                        </h3>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>

                    {/* Mobile horizontal scroll */}
                    <div className="services-cards mobile-only">
                        {showLeft && (
                            <button className="scroll-arrow left" onClick={() => scroll('left')}>
                                <LeftOutlined />
                            </button>
                        )}
                        <div className="scroll-container" ref={scrollContainerRef}>
                            {services.map((service, index) => (
                                <div className="scroll-item" key={index}>
                                    <Card
                                        hoverable
                                        className="service-card"
                                        onClick={() => scrollToSection(index)}
                                    >
                                        <div className="icon">
                                            {React.cloneElement(service.icon, {
                                                style: { fontSize: '28px', color: '#7c1524' },
                                            })}
                                        </div>
                                        <h3>{service.title}</h3>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        {showRight && (
                            <button className="scroll-arrow right" onClick={() => scroll('right')}>
                                <RightOutlined />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Service Details Sections */}
            <div className="service-details">
                {services.map((service, index) => (
                    <div
                        key={index}
                        ref={sectionRefs[index]}
                        className="service-section"
                    >
                        <h2>{service.title}</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            This is a placeholder description for <strong>{service.title}</strong>.
                            Replace it with your actual service details.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
