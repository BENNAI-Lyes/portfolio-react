import { Mail, Person } from "@material-ui/icons";
import "./topbar.scss";

export default function Topbar({ isTopbarActive, setIsTopbarActive }) {
  return (
    <div className={isTopbarActive ? "topbar active" : "topbar"}>
      <div className="wrapper ">
        <div className="left">
          <a className="logo" href="#intro">
            genies.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+213 666 041 465</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>bennailyes19@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger "
            onClick={() => setIsTopbarActive(!isTopbarActive)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
