import { Typography, Divider, Row, Col, Image } from "antd";
import { CaretRightOutlined } from '@ant-design/icons';
import CustomLink from "./CustomLink";

const { Title, Text } = Typography;

export default function About() {
    const textStyle = { fontSize: "17px", opacity: "0.8" };
    const recentTechnologies = [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Python",
        "OpenAI"
    ];

    return (
        <div id="about">
            <Divider
                orientation="left" 
                orientationMargin="0"
            >
                <Typography>
                    <Title>About</Title>
                </Typography>
            </Divider>
            <Typography>
                <Row>
                    <Col md={12}>
                        <Text style={textStyle}>
                            Hello! My name is Dominic (Dom for short) and I 
                            enjoy building software. My interest in software
                            began when I decided to take up Computer Science as my major back
                            in 2019 after excelling in math and science in high school, but 
                            not wanting to major in math or the 3 natural sciences (bio, chemistry, physics).
                        </Text>
                        <br />
                        <br />
                        <Text style={textStyle}>
                            Fast-forward to today, I am graduating with a B.S. in Computer Science
                            from the University of San Francisco and have had the privilege of 
                            interning for the <CustomLink link="https://www.docusign.com/" display="#1 leader in electronic signature and agreement
                            cloud" />, an <CustomLink link="https://www.wecare-insurance.com/" display="independent insurance brokerage"/>,
                            and a <CustomLink link="https://www.rodeomoney.com/" display="VC-backed startup" /> in the AI + affiliate marketing space.
                        </Text>
                        <br />
                        <br />
                        <Text style={textStyle}>
                            {`Here are some technologies I've been using lately:`}
                        </Text>
                        <br />
                        <br />
                        <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none" }}>
                            {recentTechnologies.map((tech) => {
                                return (
                                    <li key={tech} style={{ flex: "1 0 33.33%" }}>
                                        <CaretRightOutlined style={{ color: "#64ffda" }} /> {tech}
                                    </li>
                                );
                            })}
                        </ul>
                    </Col>
                    <Col md={12} style={{ textAlign: "center" }}>
                        <Image
                            width={300}
                            src="dominic.jpg"
                            alt="me"
                            preview={false}
                            style={{ borderRadius: "5%" }}
                        />
                    </Col>
                </Row>
            </Typography>
        </div>
    );
}