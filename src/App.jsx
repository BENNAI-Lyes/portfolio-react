import "./app.scss";
import Topbar from "./components/topbar/Topbbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [isTopbarActive, setIsTopbarActive] = useState(false);
  return (
    <div className="app">
      <Topbar
        isTopbarActive={isTopbarActive}
        setIsTopbarActive={setIsTopbarActive}
      />
      <Menu
        isTopbarActive={isTopbarActive}
        setIsTopbarActive={setIsTopbarActive}
      />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
