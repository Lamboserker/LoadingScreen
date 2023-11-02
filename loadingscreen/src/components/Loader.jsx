import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmoking,
  faBong,
  faJoint,
  faSkull,
  faSquare,
  faCreditCard,
  faXmark,
  faFlask,
  faPills,
} from "@fortawesome/free-solid-svg-icons";
import "./loader.css";

const Loader = () => {
  const icons = [
    faSmoking,
    faBong,
    faJoint,
    faSkull,
    faSquare,
    faCreditCard,
    faXmark,
    faFlask,
    faPills,
  ];
  const sentences = [
    "zähle socken ...",
    "sammel blätter ...",
    "baue joint ...",
    "lade waffe ...",
    "suche pfand ...",
    "rauche bong ...",
    "tanke auto ...",
    "klaue kleingeld ...",
    "hacke pulver ...",
    "sprühe dose ...",
    "loading ...",
    "lade ...",
    "aufwärmen ...",
    "bitte warten ...",
    "steuern zahlen ...",
  ];
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("");

  const toggleFade = useCallback(() => {
    setFadeClass((fadeClass) => (fadeClass === "" ? "fade" : ""));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      toggleFade();
      setTimeout(() => {
        setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
        setCurrentSentenceIndex(
          (prevIndex) => (prevIndex + 1) % sentences.length
        );
        toggleFade();
      }, 300); // Warten auf das Ausblenden, bevor die Icons und Sätze aktualisiert werden
    }, 1800); // Das Intervall auf 600 ms setzen, um Zeit für das Aus- und Einblenden zu lassen

    return () => clearInterval(intervalId);
  }, [toggleFade]);

  return (
    <>
    <div className="container">
    <div id="load"> 
        <div>G</div> 
        <div>N</div> 
        <div>I</div> 
        <div>D</div> 
        <div>A</div> 
        <div>O</div> 
        <div>L</div> 
    
    </div>
    <div className="icon-text-container">
        <FontAwesomeIcon
            icon={icons[currentIconIndex]}
            color="white"
            size="2x"
            flip={currentIconIndex < 8}
            shake={currentIconIndex === 8}
        />
        <div className={`writings ${fadeClass}`} style={{ marginLeft: "20px" }}>
            {sentences[currentSentenceIndex]}
        </div>
    </div>

    </div>
    </>
  );
};

export default Loader;


