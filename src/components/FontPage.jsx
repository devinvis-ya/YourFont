import { useParams } from "react-router-dom";
import "./FontPanel.css";
import { Helmet } from "react-helmet";

const FontPage = () => {
  const { fontName } = useParams();
  return (
    <div>
      <Helmet>
        <link
          href={`https://fonts.googleapis.com/css?family=${fontName.replaceAll(
            / /g,
            "+"
          )}`}
          rel="stylesheet"
        />
      </Helmet>
      <p> {fontName}</p>
      <p
        style={{ fontFamily: fontName }}
      >{`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:'",.<>?/`}</p>
    </div>
  );
};

export default FontPage;
