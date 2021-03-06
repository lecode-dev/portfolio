import React from "react";
import { About } from "./styles";
import { SessionTitle } from "../Shared/styles";
import { Paragraph } from "../Shared/styles";
import ArrowImg from "../../assets/images/arrow-right.svg";
import JSIcon from "../../assets/images/js-icon.svg";
import HTMLIcon from "../../assets/images/html-icon.svg";
import SassIcon from "../../assets/images/sass-icon.svg";
import NodeIcon from "../../assets/images/node-icon.svg";
import PythonIcon from "../../assets/images/python-icon.svg";
import CSSIcon from "../../assets/images/css-icon.svg";
import ReactIcon from "../../assets/images/react-icon.svg";
import AboutImg from "../../components/AboutImg";

function AboutSession() {
  const listItem = (langName, imgSrc, imgAlt) => (
    <li>
      <img className="list-icon" src={ArrowImg} alt="List icon" />
      {langName}
      <img className="tech-icon" src={imgSrc} alt={imgAlt} />
    </li>
  );

  return (
    <About id="about">
      <div className="div-left">
        <SessionTitle>
          <span>0001.</span>About us
        </SessionTitle>

        <Paragraph>
          Hey!!! We are three friends (
          <a
            href="https://www.upwork.com/freelancers/~01a17ee21ec1f97f8c"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Emerson
          </a>
          ,{" "}
          <a
            href="https://www.upwork.com/freelancers/~017afca97b2a5e3d19"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Erick
          </a>
          ,{" "}
          <a
            href="https://www.upwork.com/freelancers/~01b27157790dd28700"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Lucas
          </a>
          ) that got together with one objective: help others by doing what we
          love.
        </Paragraph>

        <Paragraph>
          To do that, we created <span>LeCode</span>, a software developer team
          that builds websites and applications, providing for our clients high
          speed and high quality, besides a great support and communication
          whenever is needed.
        </Paragraph>

        <Paragraph>
          We are on{" "}
          <a
            href="https://www.upwork.com/ag/lecode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upwork
          </a>{" "}
          so you can get our services from there. You can also contact us by{" "}
          <a href="mailto:dev.lecode@gmail.com?subject=Job Contact">
            sendind an email.
          </a>{" "}
          Feel free to chose the best option for you. For code samples and some
          open source projects that we’ve built, visit our{" "}
          <a
            href="https://github.com/lecode-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github profile
          </a>
          .
        </Paragraph>

        <Paragraph>
          Here are the technologies that we have been working with recently:
        </Paragraph>

        <div className="tech-list">
          <ul>
            {listItem("JavaScript", JSIcon, "Js icon")}
            {listItem("HTML", HTMLIcon, "HTML icon")}
            {listItem("Sass", SassIcon, "Sass icon")}
            {listItem("Node.JS", NodeIcon, "Node icon")}
          </ul>
          <ul>
            {listItem("Python", PythonIcon, "Python icon")}
            {listItem("CS33", CSSIcon, "CSS icon")}
            {listItem("React", ReactIcon, "React icon")}
            {listItem("Express", NodeIcon, "Node icon")}
          </ul>
        </div>
      </div>

      <div className="div-right">
        <AboutImg />
      </div>
    </About>
  );
}

export default AboutSession;
