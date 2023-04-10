import { Card, Row, Col,Typography, Tag } from "antd";
import { FolderOutlined, GithubOutlined, SelectOutlined } from '@ant-design/icons';

type ProjectCardProps = {
    name: string;
    description: string;
    github: string;
    website: string;
    technologies: string[];
};

const { Title } = Typography;

export default function ProjectCard({ name, description, github, website, technologies }: ProjectCardProps) {
    return (
        <Card style={{ color: "#ccd6f6", height: "100%", width: "100%" }}>
            <Row>
                <Col xs={12} style={{ fontSize: "20px" }}>
                    <FolderOutlined />
                </Col>
                <Col xs={12} style={{ textAlign: "right", fontSize: "20px" }}>
                    {
                        github ? 
                            <a href={github} target="_blank" style={{ color: "white", padding: 5 }}><GithubOutlined /></a>
                        :
                            <div />
                    }
                    {
                        website ? 
                            <a href={website} target="_blank" style={{ color: "white", padding: 5 }}><SelectOutlined /></a>
                        :
                            <div />
                    }
                </Col>
            </Row>
            <div style={{ height: "10px" }} />
            <Row>
                <Col xs={24}>
                    <Title style={{ fontSize: "20px" }}>{name}</Title>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{description}</p>
                </Col>
            </Row>
            <Row>
                {technologies.map((tech, index) => {
                    return (
                        <Tag color="default" key={`${name}-tech-${index}`} style={{ marginBottom: "10px" }}>
                            {tech}
                        </Tag>
                    );
                })}
            </Row>
        </Card>
    );
}