import React from 'react';
import { Card, Avatar, Typography, Space, Tag } from 'antd';
import { MailOutlined, LinkedinOutlined, PhoneOutlined } from '@ant-design/icons'; // ✅ added PhoneOutlined
import { Link } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;

export default function EmployeeCard({ employee }) {
    return (
        <Card
            className={`employee-card ${employee.head ? 'head-card' : ''}`}
            hoverable
            style={{ borderRadius: '12px', textAlign: 'center', paddingTop: '20px' }}
        >
            <Link
                to={`/our-team/${encodeURIComponent(employee.name)}`}
                state={{ employee }}
                style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}
            >
                <Avatar
                    size={employee.head ? 140 : 120}
                    src={employee.photo}
                    style={{ marginBottom: 20 }}
                />
                <Title level={4} style={{ marginBottom: 0, fontSize: 30 }}>
                    {employee.name}
                    {employee.head && (
                        <Tag color="gold" style={{ marginLeft: 8 }}>
                            Head of Office
                        </Tag>
                    )}
                </Title>
                <Text type="secondary" style={{ fontSize: 18 }}>
                    {employee.position}
                </Text>

                {/* ✅ Show intro (short text for Our Team page) */}
                {employee.intro && (
                    <Paragraph style={{ marginTop: 10, fontSize: 16 }}>
                        {employee.intro}
                    </Paragraph>
                )}

                <Space size="large" style={{ marginTop: 20 }}>
                    {employee.email && (
                        <MailOutlined
                            style={{ fontSize: 20, color: '#A51C30', cursor: 'pointer' }}
                            onClick={() => (window.location.href = `mailto:${employee.email}`)}
                        />
                    )}
                    {employee.linkedin && (
                        <LinkedinOutlined
                            style={{ fontSize: 20, color: '#A51C30', cursor: 'pointer' }}
                            onClick={() => window.open(employee.linkedin, "_blank")}
                        />
                    )}
                    {employee.number && (
                        <PhoneOutlined
                            style={{ fontSize: 20, color: '#A51C30', cursor: 'pointer' }}
                            onClick={() => (window.location.href = `tel:${employee.number}`)}
                        />
                    )}
                </Space>
            </Link>
        </Card>
    );
}
