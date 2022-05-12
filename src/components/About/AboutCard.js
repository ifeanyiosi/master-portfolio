import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ifeanyi Osi-Okeke </span>
            from <span className="purple"> Anambra State, Nigeria </span>
            <br />I am a Web Designer and Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games (PS4)
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Tweeting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If I have credibility, character, competence and companion, I will inevitably attract cash!"{" "}
          </p>
          <footer className="blockquote-footer">@Olawaleesq</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
