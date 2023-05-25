import Main from "./Main";

const Card = (res) => {
  return (
    <section id="card" role="main">
      <Main />
      <div className="content">
        <div className="header">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard.
          </p>
        </div>
        <div className="flexContainer">
          <div className="card-cont card1">
            <div className="textContainer">
              <h2>Brand Recognition</h2>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          <div className="card-cont card2">
            <div className="icon-circ"></div>
            <div className="textContainer">
              <h2>Detailed Records</h2>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
          <div className="card-cont card3">
            <div className="icon-circ"></div>
            <div className="textContainer">
              <h2>Fully Customizable</h2>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Card;
