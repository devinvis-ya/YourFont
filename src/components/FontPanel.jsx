import "./FontPanel.css";

const FontPanel = ({ fontName, value }) => {
  return (
    <div className="fontPanel">
      <p className="fontPanel__name">{fontName}</p>
      <p className="fontPanel__text" style={{fontFamily: fontName}}>
        {value}
      </p>
    </div>
  );
};

export default FontPanel;
