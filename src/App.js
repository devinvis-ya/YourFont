import { useState } from "react";
import "./App.css";
import FontPanel from "./components/FontPanel";
import { Helmet } from "react-helmet";
import data from "./data/FontNameArray.json";

function App() {
  const [text, setText] = useState("");
  const [fonts, setFonts] = useState(
    [...data].sort(() => Math.random() - 0.5).slice(0, 6)
  );

  console.log(fonts);

  const panels = fonts.map((fontName, index) => (
    <FontPanel key={index} fontName={fontName} value={text} />
  ));

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

      <h1>Your Google Font</h1>
      <input
        id="textInput"
        placeholder="type text ..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div id="panelDiv">{panels}</div>
    </div>
  );
}

export default App;
