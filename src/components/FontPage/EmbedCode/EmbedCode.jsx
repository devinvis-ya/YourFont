import "./EmbedCode.css";
import copySVG from "../../../svg/copy.svg";

const EmbedCode = ({ fontName }) => {
  const htmlCode = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=${fontName.replaceAll(
    / /g,
    "+"
  )}&display=swap" rel="stylesheet">`;

  const cssCode = `.yourClassName {
    font-family: "${fontName}", sans-serif;
    font-weight: 400;
    font-style: normal;
}`;

  return (
    <div id="embed">
      <p>Embed code</p>
      <div className="embedBlock">
        <p>{`HTML HEAD <link>`}</p>
        <div className="code">
          {htmlCode}
          <div
            className="copySVG"
            onClick={() => navigator.clipboard.writeText(htmlCode)}
          >
            <img className="copySVG_icon" src={copySVG} alt="Copy" />
          </div>
        </div>
      </div>
      <div className="embedBlock">
        <p>CSS</p>
        <div className="code">
          {cssCode}
          <div
            className="copySVG"
            onClick={() => navigator.clipboard.writeText(cssCode)}
          >
            <img className="copySVG_icon" src={copySVG} alt="Copy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbedCode;
