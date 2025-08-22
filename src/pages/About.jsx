import React from "react";
import { Layout, Typography, Card } from "antd";
import {
    CheckCircleOutlined,
    SafetyOutlined,
    TeamOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
import '../styles/About.css'

const titleStyle = {
    color: "#a40834",
    fontSize: "36px",
    lineHeight: "1.4",
    transform: "scaleY(1.2)",
    transformOrigin: "top",
}

export const About = () => {
    return (
        <Layout>
            {/* Parallax Hero */}
            <div className="hero">
            </div>

            <Content style={{ padding: "40px 20px", maxWidth: "1000px", margin: "auto" }}>
                <div style={{ textAlign: "center", margin: "60px 0" }}>
                    <Paragraph style={{ fontSize: "20px", lineHeight: 1.8 }}>
                        With a focus on international commercial arbitration and corporate legal services in the mining and metals industry, <strong>TABIA</strong> provides comprehensive legal solutions to clients worldwide. At <strong>Tabia Legal & Advisory</strong>, our culture is deeply ingrained in our unwavering commitment to prioritizing our clients and fostering mutual trust that encourages collaboration. We genuinely listen to comprehend your unique priorities and challenges, allowing us to provide effective solutions. Our approach is characterized by delivering excellence without arrogance. At Tabia, we combine our extensive legal expertise with a fresh and innovative perspective, enabling us to provide you with practical and effective solutions. We understand the intricacies of your business and legal needs and work diligently to exceed your expectations.
                    </Paragraph>
                </div>

                <Card style = {{ textAlign: "center", marginBottom: "40px", padding: "30px" }}>
                    <Title
                        level={2}
                        style= {titleStyle}
                    >
                        Our Vision
                    </Title>
                    <Paragraph style={{ fontSize: "18px", lineHeight: 1.8 }}>
                        We firmly believe in contributing to the communities we serve and strive to build a diverse and inclusive firm that reflects the makeup of these communities and our valued clients.
                    </Paragraph>
                </Card>

                <Card style={{ marginBottom: "40px", padding: "30px", textAlign: "center" }}>
                    <Title level={2} style={titleStyle}>
                        Our Values
                    </Title>
                    <ul
                        style={{
                            listStyle: "none",
                            paddingLeft: 0,
                            maxWidth: "700px",
                            margin: "20px auto",
                            fontSize: "18px",
                            lineHeight: 1.8,
                        }}
                    >
                        <li style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                            <CheckCircleOutlined style={{ color: "#a40834", marginRight: "10px" }} />
                            Unwavering commitment to prioritizing our clients
                        </li>
                        <li style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                            <SafetyOutlined style={{ color: "#a40834", marginRight: "10px" }} />
                            Delivering excellence without arrogance
                        </li>
                        <li style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                            <TeamOutlined style={{ color: "#a40834", marginRight: "10px" }} />
                            Fostering mutual trust that encourages collaboration
                        </li>
                    </ul>
                </Card>


                <Card style={{ textAlign: "center", padding: "30px" }}>
                    <Title level={2} style= {titleStyle}>Our Mission</Title>
                    <Paragraph style={{ fontSize: "18px", lineHeight: 1.8 }}>
                        We are dedicated to delivering tailored commercial solutions underpinned by our world-class offerings and an unwavering commitment to exceptional quality and service.
                    </Paragraph>
                </Card>
            </Content>
        </Layout>
    );
};
