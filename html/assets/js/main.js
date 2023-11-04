document.addEventListener("DOMContentLoaded", () => {
    const backgroundVideo = document.getElementById("backgroundVideo");
    const loadingFill = document.getElementById("loadingFill");
    const loaderIcon = document.getElementById("loaderIcon");
    const loaderSentence = document.getElementById("loaderSentence");
    playMusicAndStartVideo();

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
  
  
     function playMusicAndStartVideo() {
        playMusic();
        backgroundVideo.play(); // Das Video startet jetzt automatisch.
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
    }});