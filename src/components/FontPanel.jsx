import { Link } from "react-router-dom";
import "./FontPanel.css";

const FontPanel = ({ fontName, value }) => {
  return (
    <Link className="clearLinkStyle" to={`/YourFont/font/${fontName}`}>
      <div className="fontPanel">
        <p className="fontPanel__name">{fontName}</p>
        <p className="fontPanel__text" style={{ fontFamily: fontName }}>
          {value}
        </p>
      </div>
    </Link>
  );
};

export default FontPanel;
