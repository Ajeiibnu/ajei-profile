import React from "react";
import Card from "react-bootstrap/Card";
import { ImPacman } from "react-icons/im";

export default function Aboutcard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi, I am <span>Ajei Ibnu </span>
            from <span>Indonesia</span> <br />
            I am website developer<br />
            Start coding from 2 last year ago.
          </p>
          <ul>
            <p>My activity (っ＾▿＾)💨</p>
            <li className="about-activity">
              <ImPacman /> Playing Games
            </li>
            <li className="about-activity">
              <ImPacman /> Watching Youtube
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  )
}
