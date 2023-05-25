import { useState } from "react";
import back from "../images/bg-shorten-desktop.svg";

import { get } from "./get";

const Main = () => {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState(null);
  const [filled, setBlank] = useState(true);
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const short = (event) => {
    event.preventDefault();
    if (input.length !== 0) {
      get(input)
        .then((res) => {
          setUrl(res);
        })
        .catch((error) => {
          console.log(error);
        });
      setBlank(true);
    } else {
      console.log({ else: "gabisa goblog" });
      setBlank(!filled);
    }

    console.log({ res: url });
  };

  return (
    <div id="main">
      <div className={`${!filled ? "error" : " "}`}>
        <form action="" style={{ backgroundImage: `url(${back})` }}>
          <label for="input" className="label" />
          <input type="text" id="label" value={input} onChange={handleInput} />
          <button onClick={short}>Shorten It!</button>
        </form>
      </div>
      <div id="res">
        {url && url.data && url.data.result && (
          <ul className="resul">
            <li>
              <div className="link">{input}</div>{" "}
              <div className="right">
                <span>{url.data.result.full_short_link} </span>
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
