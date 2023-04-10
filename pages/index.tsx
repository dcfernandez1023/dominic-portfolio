import { Inter } from 'next/font/google';

import AppNavbar from '@/components/AppNavbar';
import Intro from '@/components/Intro';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import SendMessage from '@/components/SendMessage'; 

import { Row, Col } from "antd";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const introSectionStyle = { 
    minHeight: "90vh",
    display: "flex",
    alignItems: "center"
  };

  const aboutSectionStyle = {
    minHeight: "100vh"
  };

  const experienceSectionStyle = {
    minHeight: "100vh"
  };

  const projectsSectionStyle = {
    minHeight: "125vh"
  };

  const messageSectionStyle = { 
    minHeight: "90vh"
  };

  return (
    <div style={{ background: "#001529", padding: 15 }}>
      <AppNavbar />
      
      <Row style={introSectionStyle}>
        <Col md={4}></Col>
        <Col md={16}>
          <Intro />
        </Col>
        <Col md={4}></Col>
      </Row>

      <Row style={aboutSectionStyle}>
        <Col md={4}></Col>
        <Col md={16}>
          <About />
        </Col>
        <Col md={4}></Col>
      </Row>

      <Row style={experienceSectionStyle}>
        <Col md={4}></Col>
        <Col md={16}>
          <Experience />
        </Col>
        <Col md={4}></Col>
      </Row>

      <Row style={projectsSectionStyle}>
        <Col md={4}></Col>
        <Col md={16}>
          <Projects />
        </Col>
        <Col md={4}></Col>
      </Row>

      <Row style={messageSectionStyle}>
        <Col md={4}></Col>
        <Col xs={24} md={16}>
          <SendMessage />
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}
