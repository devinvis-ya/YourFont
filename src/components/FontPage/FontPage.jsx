import "./FontPage.css";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import EmbedCode from "./EmbedCode/EmbedCode";

const FontPage = () => {
  const { fontName } = useParams();
  return (
    <div id="fontPage">
      <Helmet>
        <link
          href={`https://fonts.googleapis.com/css?family=${fontName.replaceAll(
            / /g,
            "+"
          )}`}
          rel="stylesheet"
        />
        
        <link
          href={`https://fonts.googleapis.com/css?family=Google+Sans+Mono`}
          rel="stylesheet"
        />
      </Helmet>
      <div id="fontPage__main">
        <div id="main__header">
          <p> {fontName}</p>
          <div id="downloadButton">Download Family</div>
        </div>
        <div id="font_example">
          <p
            style={{ fontFamily: fontName }}
          >{`A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z`}</p>
          <p
            style={{ fontFamily: fontName }}>
            {`0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) _ - + = [ ] { } | ; : ' " , . < > ? /`}
          </p>
        </div>
        
        <hr style={{marginTop: 20}}/>
        <EmbedCode fontName={fontName}/>
      </div>
    </div>
  );
};

export default FontPage;
