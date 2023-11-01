import React, { useEffect, useState, useCallback } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(0);
  const [showElements, setShowElements] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [randomWord, setRandomWord] = useState("");
  const [wordPosition, setWordPosition] = useState({ top: 0, left: 0 });
  const [opacity, setOpacity] = useState(0);

  const words = ["Zähle Socken", "Sammel Blätter", "Drehe Joint", "Lade Waffe"];

  const playMusic = () => {
    const audio = new Audio("http://localhost:3000/music");
    audio.play();
    setIsMusicPlaying(true);
    setTimeout(() => {
      setShowElements(true);
    }, 2000);
  };

  const generateRandomWordAndPosition = useCallback(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const randomTop = Math.floor(Math.random() * 100);
    const randomLeft = Math.floor(Math.random() * 100);
    setRandomWord(randomWord);
    setWordPosition({ top: `${randomTop}vh`, left: `${randomLeft}vw` });
    setOpacity(0);
  }, [words]);

  useEffect(() => {
    let interval;
    if (isMusicPlaying) {
      interval = setInterval(() => {
        setLoading((prevLoading) => {
          if (prevLoading >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevLoading + 1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isMusicPlaying]);

  useEffect(() => {
    let interval;
    if (isMusicPlaying) {
      interval = setInterval(() => {
        generateRandomWordAndPosition();
        setOpacity(1);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isMusicPlaying, generateRandomWordAndPosition]);

  useEffect(() => {
    let timeout;
    if (opacity === 1) {
      timeout = setTimeout(() => {
        setOpacity(0);
      }, 1000); // 1 Sekunde nach dem Wort erscheint
    }
    return () => clearTimeout(timeout);
  }, [opacity]);

  return (
    <div className="App">
      {!isMusicPlaying && <button onClick={playMusic}>Start</button>}
      <div className={`elements ${showElements ? "slide-in" : ""}`}>
        <div id="load">
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </div>
      </div>
      <div
        className="random-word"
        style={{
          position: "absolute",
          top: wordPosition.top,
          left: wordPosition.left,
          opacity: opacity,
          transition: "opacity 1s ease-in-out",
        }}
      >
        {randomWord}
      </div>
      <div className="loading-bar">
        <div className="loading-fill" style={{ width: `${loading}%` }}></div>
      </div>
    </div>
  );
}

export default App;
