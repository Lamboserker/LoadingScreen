import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import {
  bolt,
  champagne,
  flask,
  joint,
  money,
  pills,
  skull,
  smoking,
} from "./assets/svg/index";

function App() {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showElements] = useState(false);
  const [iconIndex, setIconIndex] = useState(0); // Zustand zum Verfolgen des aktuellen Icons
  const icons = [bolt, champagne, flask, joint, money, pills, skull, smoking]; // Liste der Icons
 

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

  // Effect zum Wechseln der Icons
  useEffect(() => {
    let iconInterval;
    if (isMusicPlaying) {
      iconInterval = setInterval(() => {
        setIconIndex((prevIndex) => (prevIndex + 1) % icons.length); // Icon wechseln
      }, 500); // Intervall für den Wechsel der Icons
    }
    return () => clearInterval(iconInterval);
  }, [isMusicPlaying]);


  return (
    <div className="App">
       <button onClick={playMusicAndStartLoading}>Start</button>

      <video ref={videoRef} loop muted className="background-video">
        <source
          src="https://cdn.discordapp.com/attachments/1075140494973218846/1169333453234380932/bg_2.mp4?ex=655505a4&is=654290a4&hm=5d75201df0de106de8d78d5bb7044ac6ec83c9e53c791b2399ccd25a36ab9551&"
          type="video/mp4"
        />
      </video>
     
      <div className="icon-container">
     
    </div>
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
    
      <div className="loading-bar">
        <div className="loading-fill" style={{ width: `${loading}%` }}></div>
      </div>
    </div>
  );
}

export default App;
