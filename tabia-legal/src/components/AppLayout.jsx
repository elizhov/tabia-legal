import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { theme } from "../theme/theme.js";

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

    return (
        <Layout style={{ minHeight: "100vh", width: "100%", backgroundColor: grey }}>
            <Header
                style={{
                    display: "flex",
                    alignItems: "center",
                    paddingInline: 24,
                    backgroundColor: crimson,
                }}
            >
                {/* Logo that links to home */}
                <Link to="/" style={{ display: "flex", alignItems: "center", marginRight: "2rem" }}>
                    <img
                        src="/logo.png"  // make sure logo.png is inside your public/ folder
                        alt="Logo"
                        style={{ height: "40px", objectFit: "contain" }}
                    />
                </Link>

                {/* Menu */}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[selectedKey]}
                    style={{ flex: 1, backgroundColor: crimson }}
                >
                    {menuItems.map(({ key, label }) => (
                        <Menu.Item key={key}>
                            <Link to={key}>{label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Header>

            <Content style={{ flex: 1, backgroundColor: grey }}>{children}</Content>

            <Footer style={{ textAlign: "center" }}>
                My App ©{new Date().getFullYear()}
            </Footer>
        </Layout>
    );
};

export default AppLayout;
