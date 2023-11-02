import { useState, useEffect } from "react";
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
  faWineBottle,
  faCar,
  faBottleDroplet,
  faSpinner // Importieren Sie dieses Icon
} from "@fortawesome/free-solid-svg-icons";
import "./loader.css";

const Loader = () => {
  // Definieren Sie Ihre Icons und Sätze als Paare
  const iconSentencePairs = [
    { icon: faSmoking, sentence: "sammel blätter ...", flip: true },
    { icon: faBong, sentence: "rauche bong ...", flip: true },
    { icon: faJoint, sentence: "baue joint ...", flip: true },
    { icon: faSkull, sentence: "lade waffe ...",bounce: true },
    { icon: faWineBottle, sentence: "suche pfand ...",flip: true },
    { icon: faCreditCard, sentence: "hacke pulver ...",flip: true },
    // Hier verwenden wir das spezielle Spinner-Icon
    { icon: faSpinner, sentence: "bitte warten ...", spinning: true },
    { icon: faSpinner, sentence: "please wait ...", spinning: true },
    { icon: faFlask, sentence: "sprühe dose ...",flip: true },
    { icon: faPills, sentence: "stimmung verbessern ...",flip: true },
    { icon: faCar, sentence: "tanke auto ...",flip: true },
    { icon: faBottleDroplet, sentence: "trinke alkohol ...",flip: true },
    { icon: faSquare, sentence: "Überprüfe Quadratwurzeln ...",flip: true },
    { icon: faXmark, sentence: "Kreuze Tage bis zum Wochenende an ...",flip: true },
  ];
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("");

  const toggleFade = () => {
    setFadeClass((fadeClass) => (fadeClass === "" ? "fade" : ""));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      toggleFade();
      setTimeout(() => {
        setCurrentPairIndex((prevIndex) => (prevIndex + 1) % iconSentencePairs.length);
        toggleFade();
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const currentPair = iconSentencePairs[currentPairIndex];

  return (
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
              icon={currentPair.icon}
              color="white"
              size="2x"
              className={`${currentPair.flip ? 'fa-flip' : ''} ${currentPair.spinning ? 'fa-spin' : ''} ${currentPair.beat ? 'fa-beat' : ''} ${currentPair.pulse ? 'fa-pulse' : ''} ${currentPair.bounce ? 'fa-bounce' : ''}`}
          />
          <div className={`writings ${fadeClass}`} style={{ marginLeft: "20px" }}>
              {currentPair.sentence}
          </div>
      </div>
    </div>
  );
};

export default Loader;