document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    startButton.remove(); 
    const backgroundVideo = document.getElementById("backgroundVideo");
    const loadingFill = document.getElementById("loadingFill");
    const loaderIcon = document.getElementById("loaderIcon");
    const loaderSentence = document.getElementById("loaderSentence");
    window.addEventListener('load', () => {
        startLoading();
      });
  
    let loading = 0;
    let currentPairIndex = 0;
    let isMusicPlaying = false;
    const iconSentencePairs = [
      { icon: "fa-smoking", sentence: "Sammle Blätter ...", flip: true },
      { icon: "fa-bong", sentence: "Rauche Bong ...", flip: true },
      { icon: "fa-joint", sentence: "Baue Joint ...", flip: true },
      { icon: "fa-skull", sentence: "Lade Waffe ...", bounce: true },
      { icon: "fa-wine-bottle", sentence: "Suche Pfand ...", flip: true },
      { icon: "fa-credit-card", sentence: "Hacke Pulver ...", flip: true },
      { icon: "fa-spinner", sentence: "Bitte warten ...", spinning: true },
      { icon: "fa-flask", sentence: "Sprühe Dose ...", flip: true },
      { icon: "fa-pills", sentence: "Stimmung verbessern ...", flip: true },
      { icon: "fa-car", sentence: "Tanke Auto ...", flip: true },
      { icon: "fa-bottle-droplet", sentence: "Trinke Alkohol ...", flip: true },
      { icon: "fa-square", sentence: "Überprüfe Quadratwurzeln ...", flip: true },
      {
        icon: "fa-xmark",
        sentence: "Kreuze Tage bis zum Wochenende an ...",
        flip: true,
      },
    ];
  
    startButton.addEventListener("click", () => {
      playMusicAndStartLoading();
    });
  
    const updateLoader = () => {
      const currentPair = iconSentencePairs[currentPairIndex];
      loaderIcon.className = ""; // Klassen zurücksetzen
      loaderIcon.classList.add('fa', 'fa-2x', currentPair.icon);
      if (currentPair.flip) loaderIcon.classList.add('fa-flip');
      if (currentPair.spinning) loaderIcon.classList.add('fa-spin');
      if (currentPair.bounce) loaderIcon.classList.add('fa-bounce');
  
      loaderSentence.textContent = currentPair.sentence;
      loaderSentence.className = "writings"; // Klassen zurücksetzen
      loaderSentence.classList.add('fade');
      setTimeout(() => loaderSentence.classList.remove('fade'), 500);
    };
  
    setInterval(() => {
      currentPairIndex = (currentPairIndex + 1) % iconSentencePairs.length;
      updateLoader();
    }, 3000);
  
    updateLoader();
    setInterval(() => {
      if (loading < 100) {
        currentPairIndex = (currentPairIndex + 1) % iconSentencePairs.length;
        updateLoader(currentPairIndex);
      }
    }, 3000);
  
  
    function playMusicAndStartLoading() {
      playMusic();
      startLoading();
      backgroundVideo.play();
    }
  
    function playMusic() {
      // Verwendung der lokalen Musikdatei
      const audio = new Audio(
        "./assets/music/onlymp3.to - Kendrick Lamar M.A.A.D. City Feat. MC eiht -10yrPDf92hY-192k-1698776278.mp3"
      );
      audio.play();
      isMusicPlaying = true;
    }
  
    function startLoading() {
      let currentPairIndex = 0;
      updateLoader(currentPairIndex);
  
      const interval = setInterval(() => {
        loading++;
        loadingFill.style.width = `${loading}%`;
  
        // Aktualisiere Icon und Text basierend auf dem Ladezustand
        if (loading % 10 === 0) {
          currentPairIndex = (currentPairIndex + 1) % iconSentencePairs.length;
          updateLoader(currentPairIndex);
        }
  
        if (loading >= 100) {
          clearInterval(interval);
          // Führe hier Aktionen aus, wenn das Laden abgeschlossen ist
          // Zum Beispiel: transition to the next screen or hide loading screen
        }
      }, 100);
    }
  
  
    
    // Video-Quelle setzen
    backgroundVideo.src = "https://cdn.discordapp.com/attachments/1075140494973218846/1169333453234380932/bg_2.mp4?ex=655505a4&is=654290a4&hm=5d75201df0de106de8d78d5bb7044ac6ec83c9e53c791b2399ccd25a36ab9551&";
  });