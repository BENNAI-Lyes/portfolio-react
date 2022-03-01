import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: [
        "Developer",
        "Web Developer",
        "Designer",
        "UI/UX Designer",
        "MERN Stack Developer",
        "React.js Developer",
        "Node.js Developer",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <img src="assets/man.png" alt="" className="img" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Bennai Lyes</h1>
          <h3>
            Freelance <span ref={textRef}></span>{" "}
          </h3>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
