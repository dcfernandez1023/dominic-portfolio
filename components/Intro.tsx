import { Typography, Row, Col } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export default function Intro() {
    return (
        <Row gutter={{ xs: 24, xl: 8 }}>
            <Col>
                <Typography style={{ color: "#D0D3D4" }}>
                    <Text style={{ color: "#64ffda", fontSize: "20px" }}>
                        👋 Hi, my name is
                    </Text>
                    <Title style={{ marginTop: "10px", marginBottom: "10px", fontSize: "70px" }}>
                        Dominic Fernandez.
                    </Title>
                    <Title style={{ marginTop: "0px", fontSize: "70px", opacity: "0.5" }}>
                        I craft digital solutions.
                    </Title>
                    <div>
                        <Text style={{ fontSize: "17px" }}>
                            {"I'm"} an aspiring software engineer specializing in
                            full-stack development. Currently, {"I'm"} wrapping 
                            up my B.S. in Computer Science at the 
                            <a href="https://www.usfca.edu/" style={{ color: "#64ffda" }} target="_blank"> University of San Francisco </a>
                            (graduating May 2023 🥳) while interning and building a nifty AI tool for 
                            <a href="https://www.rodeomoney.com/" style={{ color: "#64ffda" }} target="_blank"> Rodeo 🤖</a>.
                        </Text>
                    </div>
                    <br />
                    <Text style={{ fontSize: "38px" }}>
                        <a href="https://www.linkedin.com/in/dominic-fernandez-480a20192/" target="_blank" style={{ textDecoration: "none", color: "white", margin: 5 }}>
                            <LinkedinOutlined />
                        </a>
                        <a href="mailto:dominic.fernandez1023@gmail.com" target="_blank" style={{ textDecoration: "none", color: "white", margin: 5 }}>
                            <MailOutlined />
                        </a>
                        <a href="https://github.com/dcfernandez1023" target="_blank" style={{ textDecoration: "none", color: "white", margin: 5 }}>
                            <GithubOutlined />
                        </a>
                    </Text>
                </Typography>
            </Col>
        </Row>
    );
}