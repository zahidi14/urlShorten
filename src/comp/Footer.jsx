import backg from "../images/bg-boost-desktop.svg";
import { ReactComponent as Log } from "../images/logo.svg";

const Footer = () => {
  const sv = {
    fill: "white",
    color: "white",
  };
  return (
    <>
      <section id="bottom" style={{ backgroundImage: `url(${backg})` }}>
        <h2>Boost your links today</h2>
        <button>Get Started</button>
      </section>
      <footer>
        <div className="cont">
          <div className="logo">
            <Log style={sv} />
          </div>
          <div className="col">
            <h4>Features</h4>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="col">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="col">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="social"></div>
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#main">Your Name Here</a>.
        </div>
      </footer>
    </>
  );
};

export default Footer;
