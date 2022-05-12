import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/amazon.png";
import emotion from "../../Assets/Projects/colors.png";
import editor from "../../Assets/Projects/form.png";
import chatify from "../../Assets/Projects/gamer-com.png";
import suicide from "../../Assets/Projects/matrix.png";
import bitsOfCode from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Amazon Clone"
              description="Made an amazon clone with React and Redux"
              link="https://github.com/ifeanyiosi/amazon-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Colors Site"
              description="First site I worked on after learning JavaScript"
              link="https://github.com/ifeanyiosi/ColorSite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Form"
              description="Login page made using React that logs user our after 60 seconds"
              link="https://github.com/ifeanyiosi/ifeanyi_form"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="E-Commerce Page"
              description="Made an e-commerce site using React and styled components"
              link="https://github.com/ifeanyiosi/Gaming-ECommerce-site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Maxtrix Site"
              description="Used React to make a matrix themed webpage"
              link="https://github.com/ifeanyiosi/Matrix-site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Netflix Clone"
              description="A netflix clone that shows trailers only"
              link="https://github.com/ifeanyiosi/Netflix-Clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
