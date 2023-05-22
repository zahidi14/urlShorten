import Main from "./Main";

const Card = (res) => {
  return (
    <section id="card">
      <Main />
      <div className="content">
        <div className="header">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard.
          </p>
        </div>
        <div className="card-cont">
          <div className="card">
            <div className="circle">
              <h1>
                <ion-icon name="speedometer"></ion-icon>
              </h1>
            </div>
            <h2>Brand Recognition</h2>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="card b">
            <div className="circle">
              <h1>
                <ion-icon name="speedometer"></ion-icon>
              </h1>
            </div>

            <h2>Detailed Records</h2>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="card c">
            <div className="circle">
              <h1>
                <ion-icon name="speedometer"></ion-icon>
              </h1>
            </div>
            <h2>Fully Customizable</h2>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Card;
