import React from 'react';
import { Row, Col, Typography } from 'antd';
import '../styles/OurTeam.css';
import employees from '../data/employees';
import EmployeeCard from "../components/EmployeeCard.jsx";

const { Title } = Typography;

export const OurTeam = () => {
    return (
        <div style={{ padding: '60px 20px', background: '#f9f9f9' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 40 }}>
                Meet Our Team
            </Title>
            <Row gutter={[24, 24]} justify="center">
                {employees.map((employee, index) => (
                    <Col xs={24} sm={12} md={8} key={index}>
                        <EmployeeCard employee={employee} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

