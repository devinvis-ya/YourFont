import { useState, useEffect } from "react";
import "./App.css";
import FontPanel from "./components/FontPanel";
import { Helmet } from "react-helmet";
import data from "./data/FontNameArray.json";

function App() {
  const [headFont, setHeadFont] = useState(0);
  const [countPanel, setCountPanel] = useState(9);
  const [text, setText] = useState("");
  const [fonts, setFonts] = useState(
    [...data].sort(() => Math.random() - 0.5).slice(0, countPanel)
  );

  const panels = fonts.map((fontName, index) => (
    <FontPanel key={index} fontName={fontName} value={text} />
  ));

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setHeadFont((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countPanel, headFont, fonts.length]);

  const updateFonts = () => {
    setFonts([...data].sort(() => Math.random() - 0.5).slice(0, countPanel));
  };

  return (
    <div id="wrapper">
      <Helmet>
        {fonts.map((fontName, index) => (
          <link
            key={index}
            href={`https://fonts.googleapis.com/css?family=${fontName.replaceAll(
              / /g,
              "+"
            )}`}
            rel="stylesheet"
          />
        ))}
      </Helmet>

      <h1 id="headFont" style={{ fontFamily: fonts[headFont] }}>
        Your Google Font
      </h1>

      <div id="main">
        <input
          id="textInput"
          placeholder="Your text ..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => updateFonts()}>New Fonts</button>
      </div>

      <div id="panelDiv">{panels}</div>
    </div>
  );
}

export default App;
