const wordList = [
    { word: "apel", hint: "Petunjuk: Ini adalah jenis buah." },
    { word: "komputer", hint: "Petunjuk: Digunakan untuk pemrograman." },
    { word: "sepeda", hint: "Petunjuk: Alat transportasi dengan dua roda." },
    { word: "kucing", hint: "Petunjuk: Hewan peliharaan yang suka mengeong." },
    { word: "buku", hint: "Petunjuk: Ini digunakan untuk membaca." }
  ];
  
  let currentWord = '';
  let currentHint = '';
  
  function newGame() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    currentWord = wordList[randomIndex].word;
    currentHint = wordList[randomIndex].hint;
  
    // Reset tampilan
    document.getElementById("hint").innerText = currentHint;
    document.getElementById("guessInput").value = '';
    document.getElementById("resultMessage").innerText = '';
  }
  
  function checkGuess() {
    const userGuess = document.getElementById("guessInput").value.toLowerCase();
    const resultMessage = document.getElementById("resultMessage");
  
    if (userGuess === currentWord) {
      resultMessage.innerText = "Tebakanmu benar! 🎉";
      resultMessage.classList.remove("wrong");
      resultMessage.classList.add("correct");
    } else {
      resultMessage.innerText = "Tebakanmu salah, coba lagi!";
      resultMessage.classList.remove("correct");
      resultMessage.classList.add("wrong");
    }
  }
  
  newGame();
  