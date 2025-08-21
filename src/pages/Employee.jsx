import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Avatar, Typography, Space, Tag, Button, Spin } from 'antd';
import { MailOutlined, LinkedinOutlined, PhoneOutlined } from '@ant-design/icons'; // ✅ added PhoneOutlined
import '../styles/Employee.css';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import {ScaleSpinner} from "../components/ScaleSpinner.jsx";


const { Title, Text } = Typography;

const renderBio = (bioText) => {
    const sections = bioText.split(/\n(?=[A-Z][^\n]+)/); // split on capitalized section titles

    return sections.map((section, idx) => {
        const [titleLine, ...contentLines] = section.split("\n").filter(Boolean);
        const isBulletList = contentLines.some(line => line.trim().startsWith("•"));

        return (
            <div key={idx} style={{ marginBottom: 28, fontFamily: "'Inter', sans-serif" }}>
                <div
                    style={{
                        fontSize: 15,           // same as bullets
                        fontWeight: 600,        // bold
                        // color: "#A51C30",
                        marginBottom: 10,
                    }}
                >
                    {titleLine}
                </div>

                {isBulletList ? (
                    <ul style={{ paddingLeft: 22, margin: 0 }}>
                        {contentLines.map((line, i) => (
                            <li
                                key={i}
                                style={{
                                    marginBottom: 6,
                                    fontSize: 15,
                                    lineHeight: 1.6,
                                    color: "#333",
                                }}
                            >
                                {line.replace("•", "").trim()}
                            </li>
                        ))}
                    </ul>
                ) : (
                    contentLines.map((line, i) => (
                        <p
                            key={i}
                            style={{
                                fontSize: 15,
                                lineHeight: 1.6,
                                marginBottom: 12,
                                color: "#444",
                            }}
                        >
                            {line}
                        </p>
                    ))
                )}
            </div>
        );
    });
};


export default function Employee() {
    const { name } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const colRef = collection(db, "employees");
                const q = query(colRef, where("name", "==", decodeURIComponent(name)));
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    setEmployee({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() });
                } else {
                    setEmployee(null);
                }
            } catch (error) {
                console.error("Error fetching employee:", error);
                setEmployee(null);
            } finally {
                setLoading(false);
            }
        };
        fetchEmployee();
    }, [name]);


    if (loading)
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "100px 0",
                }}
            >
                <Spin indicator={<ScaleSpinner size={64} />} tip="Loading posts..." />
            </div>
        );

    if (!employee) {
        return (
            <div style={{ padding: 60, textAlign: 'center' }}>
                <p>Employee not found</p>
                <Button type="primary" onClick={() => navigate('/our-team')}>Back to Team</Button>
            </div>
        );
    }

    return (
        <div style={{ padding: '80px 20px', display: 'flex', justifyContent: 'center', background: '#f0f2f5', minHeight: '100vh' }}>
            <div className="employee-page">
                <Card className="employee-card" bodyStyle={{ padding: 0 }}>
                    <div className="employee-top">
                        <Avatar
                            size={180}
                            src={employee.photo}
                            style={{ borderRadius: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Title level={4} style={{ marginTop: 16, textAlign: 'center' }}>
                            {employee.name} {employee.head && <Tag color="gold">Head</Tag>}
                        </Title>

                        {/* ✅ Role + icons stacked vertically */}
                        <div className="employee-meta">
                            <Text type="secondary" style={{ fontSize: 16, textAlign: 'center' }}>
                                {employee.position}
                            </Text>
                            <Space size="large" style={{ marginTop: 12 }}>
                                {employee.email && (
                                    <a href={`mailto:${employee.email}`}>
                                        <MailOutlined style={{ fontSize: 28, color: '#A51C30' }} />
                                    </a>
                                )}
                                {employee.linkedin && (
                                    <a href={employee.linkedin} target="_blank" rel="noopener noreferrer">
                                        <LinkedinOutlined style={{ fontSize: 28, color: '#A51C30' }} />
                                    </a>
                                )}
                                {employee.number && (
                                    <a href={`tel:${employee.number}`}>
                                        <PhoneOutlined style={{ fontSize: 28, color: '#A51C30' }} />
                                    </a>
                                )}
                            </Space>
                        </div>
                    </div>

                    <div className="employee-bio">
                        {renderBio(employee.bio)}
                    </div>
                </Card>
            </div>
        </div>
    );
}
