import Logo from "../images/logo.svg";
import Illust from "../images/illustration-working.svg";
import { ReactComponent as Resp } from "../images/menu.svg";
import { useState } from "react";

const Head = () => {
  const [isOpen, setOpen] = useState();
  const toggle = () => {
    setOpen(!isOpen);
    console.log("goblok");
  };

  return (
    <header role="banner">
      <nav role="navigation">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="resp-icon" onClick={toggle}>
          {" "}
          <Resp />
        </div>
        <div className={` navContainer ${isOpen ? "show" : "hide"}`}>
          <ul>
            <li>
              <a href="#main">Features</a>{" "}
            </li>
            <li>
              <a href="#main">Pricing</a>{" "}
            </li>
            <li>
              <a href="#main">Resources</a>{" "}
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <a href="#main">Login</a>{" "}
            </li>
            <li>
              <button>Sign Up</button>{" "}
            </li>
          </ul>
        </div>
      </nav>
      <div className="head">
        <div className="head-img">
          <img src={Illust} alt="" />
        </div>
        <div className="head-desc">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Head;
