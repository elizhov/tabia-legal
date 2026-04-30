// Industries.jsx
import React, { useState } from "react";
import { Row, Col } from "antd";
import "../styles/Industries.css";

const industries = [
    {
        title: "Banking, Finance and Capital Markets",
        image: "finance.jpg",
        description: "We provide expert legal advice in banking, investments, and financial regulations."
    },
    {
        title: "Natural Resources and Infrastructure",
        image: "mining.jpg",
        description: "Guiding startups and tech giants through compliance, data, and IP laws."
    },
    {
        title: "Tax and Digital Strategy Advisory",
        image: "energy.jpg", // change
        description: "Advising on property transactions, development, and real estate disputes."
    },
    {
        title: "Corporate Advisory",
        image: "mergers.jpg",
        description: "Supporting clients with healthcare regulations, compliance, and disputes."
    },
    {
        title: "Environmental Law, Sustainability and ESG",
        image: "investment.jpg", // change
        description: "Counseling energy companies on renewable, oil, gas, and sustainability matters."
    },
    {
        title: "Strategic Criminal Advisory and White-Collar Practice",
        image: "residence.jpg", // change
        description: "Expert representation in commercial, civil, and international disputes."
    },
    {
        title: "Public Private Partnerships",
        image: "partnership.jpg",
        description: "Expert representation in commercial, civil, and international disputes."
    },
    {
        title: "AML, CFT and Regulatory Compliance Advisory",
        image: "aml.jpg",
        description: "Expert representation in commercial, civil, and international disputes."
    },
    {
        title: "Dispute Resolution",
        image: "disputes.jpg",
        description: "Expert representation in commercial, civil, and international disputes."
    },

];

export const Industries = () => {
    return (
        <div style={{ padding: "60px 40px", background: "#f9f9f9" }}>
            <Row gutter={[24, 24]}>
                {industries.map((item, index) => (
                    <Col xs={24} sm={12} md={8} key={index}>
                        <FlipCard title={item.title} image={item.image} description={item.description} />
                    </Col>
                ))}
            </Row>
            <div style={{ marginTop: "40px", textAlign: "center" }}>
                <h3 style={{ color: "grey" }}>
                    *Click each card to flip it and read the corresponding text
                </h3>
            </div>
        </div>
    );
}

function FlipCard({ title, image, description }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="flip-card" onClick={() => setFlipped(!flipped)}>
            <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
                {/* Front */}
                <div className="flip-card-front">
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                </div>
                {/* Back */}
                <div className="flip-card-back">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
