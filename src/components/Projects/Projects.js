import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/projects/amazon.png";
import emotion from "../../Assets/projects/colors.png";
import editor from "../../Assets/projects/form.png";
import chatify from "../../Assets/projects/gamer-com.png";
import suicide from "../../Assets/projects/matrix.png";
import bitsOfCode from "../../Assets/projects/portfolio.png";
import nike from "../../Assets/projects/nike.png";
import smg from "../../Assets/projects/smg.png";
import pwa from "../../Assets/projects/pwa.png";

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
              imgPath={nike}
              isBlog={false}
              title="Nike Ecommerce Store"
              description="Made an ecommerce store with React and Redux"
              link="https://ifeanyi-nike.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smg}
              isBlog={false}
              title="Source My Gadgets Ecommerce page"
              description="I was part of a front-end team that built this ecommerce store using React and Tailwind"
              link="https://sourcemygadgets.com/"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pwa}
              isBlog={false}
              title="PWA Weather App"
              description="Made an app that is installable on desktop and mobile"
              link="https://ifeanyi-pwa-weather.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
