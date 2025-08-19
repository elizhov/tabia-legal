import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { theme } from "../theme/theme.js";
import "../styles/AppLayout.css";

const { Header, Content, Footer } = Layout;
const crimson = theme.cssVars["--color-crimson"];
const grey = theme.cssVars["--color-grey"];

const menuItems = [
    { key: "/about", label: "About" },
    { key: "/our-team", label: "Our Team" },
    { key: "/services", label: "Services" },
    { key: "/industries", label: "Industries & practices" },
    { key: "/news", label: "News & insights" },
];

const AppLayout = ({ children }) => {
    const location = useLocation();
    const selectedKey = location.pathname;
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => setDrawerVisible(true);
    const closeDrawer = () => setDrawerVisible(false);

    return (
        <Layout className="app-layout" style={{ backgroundColor: grey }}>
            <Header className="app-header" style={{ backgroundColor: crimson }}>
                {/* Logo */}
                <Link to="/" className="app-logo">
                    <img src="/logo.png" alt="Logo" />
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[selectedKey]}
                        style={{ backgroundColor: crimson }}
                    >
                        {menuItems.map(({ key, label }) => (
                            <Menu.Item key={key}>
                                <Link to={key}>{label}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </div>

                {/* Mobile Hamburger */}
                <div className="mobile-menu">
                    <Button
                        type="text"
                        icon={<MenuOutlined style={{ fontSize: "24px", color: "white" }} />}
                        onClick={showDrawer}
                    />
                </div>
            </Header>

            {/* Drawer for Mobile */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={closeDrawer}
                open={drawerVisible}
            >
                <Menu
                    mode="vertical"
                    selectedKeys={[selectedKey]}
                    onClick={closeDrawer}
                >
                    {menuItems.map(({ key, label }) => (
                        <Menu.Item key={key}>
                            <Link to={key}>{label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Drawer>

            <Content className="app-content">{children}</Content>

            <Footer className="app-footer">
                <div>Attorney Advertising.
                Prior results do not guarantee a similar outcome.
                TABIA Legal & Advisory ©{new Date().getFullYear()}.</div>
                <div>All rights reserved.
                    Contact us at </div>
            </Footer>
        </Layout>
    );
};

export default AppLayout;
