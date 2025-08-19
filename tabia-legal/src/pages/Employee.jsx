import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Avatar, Typography, Space, Tag, Button } from 'antd';
import { MailOutlined, LinkedinOutlined } from '@ant-design/icons';
import employees from '../data/employees';
import '../styles/Employee.css'

const { Title, Text, Paragraph } = Typography;

export default function Employee() {
    const { name } = useParams();
    const navigate = useNavigate();
    const employee = employees.find(emp => emp.name === decodeURIComponent(name));

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
                        {employee.title}
                    </Text>
                    <Space size="large" style={{ marginTop: 16 }}>
                        <a href={`mailto:${employee.email}`} target="_blank" rel="noopener noreferrer">
                            <MailOutlined style={{ fontSize: 28, color: '#A51C30' }} />
                        </a>
                        <a href={employee.linkedin} target="_blank" rel="noopener noreferrer">
                            <LinkedinOutlined style={{ fontSize: 28, color: '#A51C30' }} />
                        </a>
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
