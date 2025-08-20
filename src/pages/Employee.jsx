import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Avatar, Typography, Space, Tag, Button, Spin } from 'antd';
import { MailOutlined, LinkedinOutlined } from '@ant-design/icons';
import '../styles/Employee.css';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import {ScaleSpinner} from "../components/ScaleSpinner.jsx";


const { Title, Text, Paragraph } = Typography;

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
                <Card
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        maxWidth: 900,
                        width: '100%',
                        borderRadius: 16,
                        padding: 30,
                        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                        background: '#fff',
                    }}
                    bodyStyle={{ display: 'flex', padding: 0 }}
                >
                    {/* Left Column */}
                    <div
                        style={{
                            width: 240,
                            flexShrink: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            paddingRight: 20,
                            borderRight: '1px solid #f0f0f0',
                            justifyContent: 'center'
                        }}
                    >
                        <Avatar
                            size={180}
                            src={employee.photo}
                            style={{ borderRadius: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Title level={4} style={{ marginTop: 16, textAlign: 'center' }}>
                            {employee.name} {employee.head && <Tag color="gold">Head</Tag>}
                        </Title>
                        <Text type="secondary" style={{ fontSize: 16, textAlign: 'center' }}>
                            {employee.position}
                        </Text>
                        <Space size="large" style={{ marginTop: 16 }}>
                            {employee.email && (
                                <a href={`mailto:${employee.email}`} target="_blank" rel="noopener noreferrer">
                                    <MailOutlined style={{ fontSize: 28, color: '#A51C30' }} />
                                </a>
                            )}
                            {employee.linkedin && (
                                <a href={employee.linkedin} target="_blank" rel="noopener noreferrer">
                                    <LinkedinOutlined style={{ fontSize: 28, color: '#A51C30' }} />
                                </a>
                            )}
                        </Space>
                    </div>

                    {/* Right Column */}
                    <div style={{ flex: 1, paddingLeft: 30 }}>
                        <Paragraph style={{ fontSize: 15, lineHeight: 1.6 }}>
                            {employee.bio}
                        </Paragraph>
                    </div>
                </Card>
            </div>
        </div>
    );
}
