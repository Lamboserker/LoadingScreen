import React, { useState, useRef } from "react";
import "./App.css";
import Loader from "./components/Loader";
function App() {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(0);
  const [, setIsMusicPlaying] = useState(false);
  const [showElements] = useState(false);

  const playMusicAndStartLoading = () => {
    playMusic();
    startLoading();
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const playMusic = () => {
    const audio = new Audio("http://localhost:4000/music");
    audio.play();
    setIsMusicPlaying(true);
  };

  const startLoading = () => {
    let interval = setInterval(() => {
      setLoading((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  };

  return (
    <div className="App">
      <button onClick={playMusicAndStartLoading}>Start</button>

      <video ref={videoRef} loop muted className="background-video">
        <source
          src="https://cdn.discordapp.com/attachments/1075140494973218846/1169333453234380932/bg_2.mp4?ex=655505a4&is=654290a4&hm=5d75201df0de106de8d78d5bb7044ac6ec83c9e53c791b2399ccd25a36ab9551&"
          type="video/mp4"
        />
      </video>

      <Loader />
      <div className="loading-bar">
        <div className="loading-fill" style={{ width: `${loading}%` }}></div>
      </div>
    </div>
  );
}

export default App;
