import { Menu, Layout, Button, Row, Col } from "antd";
import type { MenuProps } from "antd";
import { 
    UserOutlined, 
    ReconciliationOutlined, 
    BulbOutlined, 
    MailOutlined 
} from '@ant-design/icons';
import Link from "next/link";
import { smoothScroll } from "@/util/scrollHelper";
import { MouseEvent } from "react";

const { Header } = Layout;

export default function AppNavbar() {
    const menuItems: MenuProps["items"] = [
        {
            label: (
                <Link
                    href="#about"
                    onClick={(e: MouseEvent) => smoothScroll(e, "#about")}
                >
                    About
                </Link>
            ),
            key: "about",
            icon: <UserOutlined style={{ color: "#64ffda" }} />
        },
        {
            label: (
                <Link
                    href="#experience"
                    onClick={(e: MouseEvent) => smoothScroll(e, "#experience")}
                >
                    Experience
                </Link>
            ),
            key: "experience",
            icon: <ReconciliationOutlined style={{ color: "#64ffda" }} />,
        },
        {
            label: (
                <Link
                    href="#projects"
                    onClick={(e: MouseEvent) => smoothScroll(e, "#projects")}
                >
                    Projects
                </Link>
            ),
            key: "projects",
            icon: <BulbOutlined style={{ color: "#64ffda" }} />,
        },
        {
            label: (
                <Link 
                    href="#contact"
                    onClick={(e: MouseEvent) => smoothScroll(e, "#contact")}
                >
                    Contact
                </Link>
            ),
            key: "contact",
            icon: <MailOutlined style={{ color: "#64ffda" }} />,
        },
        {
            label: (
                <Button 
                    block
                    onClick={() => { window.open("/dominic_fernandez_resume.pdf", "_blank") }}
                    style={{ color: "#64ffda" }}
                >
                    Resume
                </Button>
            ),
            key: "resume"
        }
    ];

    return (
        <Row style={{ padding: "15px" }}>
            <Col span={24}>
                <h1 style={{ float: "left" }}>
                    <Link 
                        href="/"
                        style={{ 
                            textDecoration: "none",
                            color: "#64ffda"
                         }}
                    >
                        DF
                    </Link>
                </h1>
                <Menu
                    mode="horizontal"
                    items={menuItems}
                    theme="dark"
                    selectedKeys={[]}
                    style={{ 
                        border: "none", 
                        height: "50px", 
                        justifyContent: "flex-end",
                    }}
                />
            </Col>
        </Row>
    );
}