// import React from 'react';
// import { Card, Row, Col } from 'antd';
// import {
//     BuildOutlined,
//     ProjectOutlined,
//     BankOutlined,
//     ThunderboltOutlined,
//     GlobalOutlined,
//     SolutionOutlined,
// } from '@ant-design/icons';
// import '../styles/Services.css';
//
// const services = [
//     { title: 'Mining', icon: <BuildOutlined /> },
//     { title: 'Projects', icon: <ProjectOutlined /> },
//     { title: 'Public Private Partnerships', icon: <BankOutlined /> },
//     { title: 'Energy Infrastructure & Resources', icon: <ThunderboltOutlined /> },
//     { title: 'Residence & Citizenship by Investment', icon: <GlobalOutlined /> },
//     { title: 'Commercial Arbitration', icon: <SolutionOutlined /> },
// ];
//
// export const Services = () => {
//     return (
//         <div className="services-page">
//             <div className="services-hero">
//                 <div className="overlay">
//
//                     {/* Desktop grid */}
//                     <div className="services-cards desktop-only">
//                         <Row gutter={[16, 16]} justify="center">
//                             {services.map((service, index) => (
//                                 <Col xs={24} sm={12} md={8} lg={4} key={index}>
//                                     <Card hoverable className="service-card">
//                                         <div className="icon">
//                                             {React.cloneElement(service.icon, {
//                                                 style: { fontSize: '28px', color: '#7c1524' },
//                                             })}
//                                         </div>
//                                         <h3>{service.title}</h3>
//                                     </Card>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </div>
//
//                     {/* Mobile horizontal scroll */}
//                     <div className="services-cards mobile-only">
//                         <div className="scroll-container">
//                             {services.map((service, index) => (
//                                 <div className="scroll-item" key={index}>
//                                     <Card hoverable className="service-card">
//                                         <div className="icon">
//                                             {React.cloneElement(service.icon, {
//                                                 style: { fontSize: '28px', color: '#7c1524' },
//                                             })}
//                                         </div>
//                                         <h3>{service.title}</h3>
//                                     </Card>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
import React, { useRef } from 'react';
import { Card, Row, Col } from 'antd';
import {
    BuildOutlined,
    ProjectOutlined,
    BankOutlined,
    ThunderboltOutlined,
    GlobalOutlined,
    SolutionOutlined,
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
    // Refs for each service section
    const sectionRefs = services.map(() => useRef(null));

    // Scroll function
    const scrollToSection = (index) => {
        sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
    };

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
                                        <h3>{service.title}</h3>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>

                    {/* Mobile horizontal scroll */}
                    <div className="services-cards mobile-only">
                        <div className="scroll-container">
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
