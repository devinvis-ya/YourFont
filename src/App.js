import { useState, useEffect } from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import { Routes, Route, Link } from "react-router-dom";
import data from "./data/FontNameArray.json";
import MainPanels from "./components/MainPanels";
import FontPage from "./components/FontPage/FontPage";

function App() {
  const [headFont, setHeadFont] = useState(0);
  const [countPanel, setCountPanel] = useState(9);
  const [text, setText] = useState("");
  const [fonts, setFonts] = useState(
    [...data].sort(() => Math.random() - 0.5).slice(0, countPanel)
  );

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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

      <Link className="clearLinkStyle" to="/">
        <h1 id="headFont" style={{ fontFamily: fonts[headFont] }}>
          Your Google Font
        </h1>
      </Link>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="main">
                <input
                  id="textInput"
                  placeholder="Your text ..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button id="newFontButton" onClick={() => updateFonts()}>
                  New Fonts
                </button>
              </div>
              <MainPanels text={text} fonts={fonts} />
            </>
          }
        />
        <Route path="/font/:fontName" element={<FontPage />} />
      </Routes>
    </div>
  );
}

export default App;
