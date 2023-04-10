import { Typography, Divider, Row, Col } from "antd";
import ProjectCard from "./ProjectCard";

const { Title } = Typography;

export default function Projects() {
    const projects = [
        {
            name: "Search Engine",
            description: "A multi-threaded search engine from scratch (simple version of Google), allows users to search for web pages",
            github: "https://github.com/dcfernandez1023/search-engine",
            website: "",
            technologies: ["Java", "Jetty", "HTML/CSS", "log4j"]
        },
        {
            name: "Stock Market Predictor",
            description: "Trained an LSTM recurrent neural network to predict stock prices 3 months into the future",
            github: "https://github.com/dcfernandez1023/ml-final-project#stock-market-predictions",
            website: "",
            technologies: ["Python", "pandas", "sklearn", "tensorflow"]
        },
        {
            name: "AutoHub",
            description: "An automobile management platform for keeping track of cost, maintenance, and upcoming services for a user's cars",
            github: "https://github.com/dcfernandez1023/AutoHub",
            website: "https://auto-hub-car-management.web.app/",
            technologies: ["React", "Node.js", "Firebase", "Bootstrap"]
        },
        {
            name: "FormToSheets",
            description: "An online form builder that sends submissions to your Google Sheet",
            github: "https://github.com/dcfernandez1023/formtosheets",
            website: "https://formtosheets-9a6d7.web.app/",
            technologies: ["React", "Node.js", "Firebase", "Bootstrap"]
        },
        {
            name: "NBA Data Visualizations",
            description: "A website with custom NBA data visualizations for over 1 GB of NBA data",
            github: "https://github.com/dcfernandez1023/cs360-data-viz-proj",
            website: "https://nba-data-viz-project.web.app/",
            technologies: ["Python", "JavaScript", "HTML/CSS", "d3.js", "Firebase"]
        },
        {
            name: "Review your College",
            description: "A website for reviewing your college",
            github: "https://github.com/dcfernandez1023/reviewyourcollege",
            website: "https://reviewyourcollege-28526.web.app/",
            technologies: ["React", "Node.js", "Firebase", "Bootstrap"]
        },
        {
            name: "Discoperks",
            description: "A job board website highlighting the unique perks that companies offer to their employees",
            github: "",
            website: "https://discoperks.com/",
            technologies: ["Selenium", "React", "Node.js", "Firebase", "Bootstrap"]
        },
        {
            name: "Alien Shooter Game",
            description: "An arcade-like, web-based alien shooter game",
            github: "https://github.com/dcfernandez1023/alien-shooter-game",
            website: "https://alien-shooter-game.web.app/",
            technologies: ["p5.js", "HTML/CSS", "JavaScript"]
        },
        {
            name: "Bingo Cards",
            description: "A website that generates unique bingo cards",
            github: "https://github.com/dcfernandez1023/ferns-bingo",
            website: "https://ferns-bingo.web.app/",
            technologies: ["React", "Node.js", "Firebase", "Bootstrap"]
        }

    ];

    return (
        <div id="projects">
            <Divider
                orientation="left" 
                orientationMargin="0"
            >
                <Typography>
                    <Title>Projects</Title>
                </Typography>
            </Divider>
            <Row gutter={[16, 16]}>
                {projects.map((project, index) => {
                    return (
                        <Col key={`project-${index}`} xs={24} md={12} lg={8}>
                            <ProjectCard
                                name={project.name}
                                description={project.description}
                                github={project.github}
                                website={project.website}
                                technologies={project.technologies}
                            />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}