import { useEffect, useRef } from "react";

import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: [
        "Software Developer",
        "Web Developer",
        "MERN Stack Developer",
        "Full Stack Javascript Developer",
        "React.js Developer",
        "Node.js Developer",
        "UI/UX Designer",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Bennai Lyes</h1>
          <p>Computer Science Graduate, From Algeria</p>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <img src="assets/me.jpg" alt="" className="img" />
        </div>
      </div>
    </div>
  );
}
