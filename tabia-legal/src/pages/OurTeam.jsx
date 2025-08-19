// import React from 'react';
// import { Row, Col, Typography } from 'antd';
// import '../styles/OurTeam.css';
// import employees from '../data/employees';
// import EmployeeCard from "../components/EmployeeCard.jsx";
//
// const { Title, Paragraph } = Typography;
//
// export const OurTeam = () => {
//     return (
//         <div className="newsreader-font" style={{ padding: '60px 20px', background: '#f9f9f9' }}>
//
//             {/* Styled Intro Text */}
//             <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 60px' }}>
//                 <Title level={2} style={{ fontSize: 38, lineHeight: 1.2, marginBottom: 20 }}>
//                     Tabia partners
//                 </Title>
//                 <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: '#555' }}>
//                     At Tabia Legal Solutions, our team is the heart of our success.
//                     Each member brings a wealth of expertise and a commitment to excellence,
//                     working collaboratively to provide tailored legal solutions for our clients worldwide.
//                 </Paragraph>
//             </div>
//
//             {/* Employee Cards */}
//             <Row gutter={[24, 24]} justify="center">
//                 {employees.map((employee, index) => (
//                     <Col xs={24} sm={12} md={8} key={index}>
//                         <EmployeeCard employee={employee} />
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     );
// };
import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Spin } from 'antd';
import '../styles/OurTeam.css';
import EmployeeCard from "../components/EmployeeCard.jsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const { Title, Paragraph } = Typography;

export const OurTeam = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadEmployees = async () => {
            try {
                const colRef = collection(db, "employees");
                const snapshot = await getDocs(colRef);
                const data = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setEmployees(data);
            } catch (error) {
                console.error("Error fetching employees:", error);
            } finally {
                setLoading(false);
            }
        };
        loadEmployees();
    }, []);

    if (loading) return <Spin tip="Loading employees..." />;

    if (employees.length === 0) return <p>No employees found</p>;

    return (
        <div className="newsreader-font" style={{ padding: '60px 20px', background: '#f9f9f9' }}>

            {/* Styled Intro Text */}
            <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 60px' }}>
                <Title level={2} style={{ fontSize: 38, lineHeight: 1.2, marginBottom: 20 }}>
                    Tabia partners
                </Title>
                <Paragraph style={{ fontSize: 18, lineHeight: 1.8, color: '#555' }}>
                    At Tabia Legal Solutions, our team is the heart of our success.
                    Each member brings a wealth of expertise and a commitment to excellence,
                    working collaboratively to provide tailored legal solutions for our clients worldwide.
                </Paragraph>
            </div>

            {/* Employee Cards */}
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
