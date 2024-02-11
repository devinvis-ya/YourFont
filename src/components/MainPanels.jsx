import "./MainPanels.css";
import FontPanel from "./FontPanel";

const MainPanels = ({ text, fonts }) => {
  return (
    <div id="panelDiv">
      {fonts.map((fontName, index) => (
        <FontPanel key={index} fontName={fontName} value={text} />
      ))}
    </div>
  );
};

export default MainPanels;