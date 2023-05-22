import { useState } from "react";
import back from "../images/bg-shorten-desktop.svg";

import { get } from "./get";

const Main = () => {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState(null);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const short = (event) => {
    event.preventDefault();
    get(input)
      .then((res) => {
        setUrl(res);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log({ res: url });
  };

  return (
    <div id="main">
      <div className="form">
        <form action="" style={{ backgroundImage: `url(${back})` }}>
          <input type="text" value={input} onChange={handleInput} />
          <button onClick={short}>Shorten It!</button>
        </form>
      </div>
      <div id="res">
        {url && url.data && url.data.result && (
          <ul className="resul">
            <li>
              <div className="link">{input}</div>{" "}
              <div className="right">
                {url.data.result.full_short_link}{" "}
                <button className="copy">Copy</button>
              </div>{" "}
            </li>
            <li>
              <div className="link">{input}</div>{" "}
              <div className="right">
                {url.data.result.full_short_link}{" "}
                <button className="copy">Copy</button>
              </div>{" "}
            </li>
            <li>
              <div className="link">{input}</div>{" "}
              <div className="right">
                {url.data.result.full_short_link}{" "}
                <button className="copy">Copy</button>
              </div>{" "}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Main;
