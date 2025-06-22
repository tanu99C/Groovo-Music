console.log("lets write js");

const songNameMap = {
  "128-Victory Anthem - Khushi TDT 128 Kbps.mp3": "Victory Anthem - Khushi and Lashcurry",
  "Adayein Teri (The Royals) (DjPunjab.Farm).mp3": "Adhayein Teri - Ruhh Joh",
  "Heat-Waves-Slowed-Reverb.mp3": "Heat Waves - Glass Animals",
  "Jhol Acoustic - PagalMass.mp3": "Jhol - Maanu",
  "Lover.mp3": "Lover - Diljit Dosanjh",
  "The-Kid-LAROI-STAY-ft-Justin-Bieber-(HipHopKit.com).mp3": "Stay - Justin Bieber",


  //card1
  "128-Born to Shine - GOAT 128 Kbps.mp3": "Born To Shine - GOAT",
  "128-Chor Bazari Phir Se - Bhool Chuk Maaf 128 Kbps.mp3": "Chor Bazaari Phir Se",
  "128-Halki Halki Si - Asees Kaur 128 Kbps.mp3": "Halki Halki Si",


   //card2
  "128-Ishq Mein - Nadaaniyan 128 Kbps.mp3": "Ishq Mein",
  "128-Mere Mehboob Mere Sanam - Bad Newz 128 Kbps.mp3": "Mere Mehboob Mere Sanam",
  "128-Nasha - Raid 2 128 Kbps.mp3": "Nasha",

  //card3
  "Ae Zindagi Gale Laga Le (take, 1) Dear Zindagi 128 Kbps (3).mp3": "Ae Zindagi Gale Laga Le",
  "Beech Beech Mein Jab Harry Met Sejal (original Motion Picturetrack) 128 Kbps.mp3": "Beech Beech Mein",
  "Blue Hai Paani Paani Yaariyan 2 128 Kbps.mp3": "Blue Hai Paani Paani",

  //card4
  "Chaleya Jawan 128 Kbps.mp3": "Chaleya",
  "Dance Ka Bhoot Brahmastra 128 Kbps.mp3": "Dance Ka Bhoot",
  "Deva Deva Brahmastra Tamil 128 Kbps.mp3": "Deva Deva",

  //card5
  "Dil Ko Maine Di Kasam Arijit Singh 128 Kbps.mp3": "Dil Ko Maine Di Kasam",
  "Girl I Need You Baaghi 128 Kbps.mp3": "Girl I Need You",
  "Haan Main Galat Love Aaj Kal 128 Kbps.mp3": "Haan Main Galat",


 // Card 6
"Hardum Humdum (film Version) Ludo 128 Kbps.mp3": "Hardum Humdum",
"Ho Ja Mast Malang Tu Malang Unleash The Madness 128 Kbps.mp3": "Malang",
"Hum Nashe Mein Toh Nahin Bhool Bhulaiyaa 2 128 Kbps.mp3": "Hum Nashe Mein Toh Nahin"
,

 // Card 7
"Itni Si Baat Hain Azhar 128 Kbps.mp3": "Itni Si Baat Hain",
  "Kasturi Amar Prem Ki Prem Kahani 128 Kbps.mp3": "Kasturi",
  "Kesariya Brahmastra 128 Kbps.mp3": "Kesariya",

  //Card 8
  "Laal Ishq Goliyon Ki Raasleela Ram Leela 128 Kbps.mp3": "Laal Ishq",
  "Luv Ju Bunty Aur Babli 2 128 Kbps.mp3": "Luv Ju",
  "Mann Jogiya Pyaar Hai Toh Hai 128 Kbps.mp3": "Mann Jogiya",

  //Card 9
  "Mere Yaraa Sooryavanshi 128 Kbps.mp3": "Mere Yaraa",
  "Nashe Si Chadh Gayi Befikre 128 Kbps.mp3": "Nashe Si Chadh Gayi",
  "Palat Tera Hero Idhar Hai Main Tera Hero 128 Kbps.mp3": "Palat",

  //Card 10
  "Pasoori Nu Satyaprem Ki Katha 128 Kbps.mp3": "Pasoori Nu",
  "Rangdaari Lucknow Central 128 Kbps.mp3": "Rangdaari",
  "Sajde Kill Dil 128 Kbps.mp3": "Sajde",

  //Card 11
  "Tu Hi Hai Dear Zindagi 128 Kbps.mp3": "Tu Hi Hai",
  "Valam Made In China 128 Kbps.mp3": "Valam",
  "Yaariyan Reprise Cocktail 128 Kbps.mp3": "Yaariyan Reprise",
};

const playlistMap = {
  "Happy Hits!": [
    "cardssongs/128-Born to Shine - GOAT 128 Kbps.mp3",
    "cardssongs/128-Chor Bazari Phir Se - Bhool Chuk Maaf 128 Kbps.mp3",
    "cardssongs/Halki Halki Si - Asees Kaur 128 Kbps.mp3"
  ],
  "Lofi Chill!": [
    "cardssongs/128-Ishq Mein - Nadaaniyan 128 Kbps.mp3",
    "cardssongs/128-Mere Mehboob Mere Sanam - Bad Newz 128 Kbps.mp3",
    "cardssongs/128-Nasha - Raid 2 128 Kbps.mp3"
  ],
  "Fun Friday!": [
    "cardssongs/Ae Zindagi Gale Laga Le (take, 1) Dear Zindagi 128 Kbps (3).mp3",
    "cardssongs/Beech Beech Mein Jab Harry Met Sejal (original Motion Picturetrack) 128 Kbps.mp3",
    "cardssongs/Blue Hai Paani Paani Yaariyan 2 128 Kbps.mp3"
  ],
  "Viral Hits!": [
    "cardssongs/Chaleya Jawan 128 Kbps.mp3",
    "cardssongs/Dance Ka Bhoot Brahmastra 128 Kbps.mp3",
    "cardssongs/Deva Deva Brahmastra Tamil 128 Kbps.mp3"
  ],
  "Cozy Christmas Jazz!": [
    "cardssongs/Dil Ko Maine Di Kasam Arijit Singh 128 Kbps.mp3",
    "cardssongs/Girl I Need You Baaghi 128 Kbps.mp3",
    "cardssongs/Haan Main Galat Love Aaj Kal 128 Kbps.mp3"
  ],
  "Hip Hop Hits!": [
    "cardssongs/Hardum Humdum (film Version) Ludo 128 Kbps.mp3",
    "cardssongs/Ho Ja Mast Malang Tu Malang Unleash The Madness 128 Kbps.mp3",
    "cardssongs/Hum Nashe Mein Toh Nahin Bhool Bhulaiyaa 2 128 Kbps.mp3"
  ],
  "Female Chart Toppers!": [
    "cardssongs/Itni Si Baat Hain Azhar 128 Kbps.mp3.mp3",
    "cardssongs/Kasturi Amar Prem Ki Prem Kahani 128 Kbps.mp3.mp3",
    "cardssongs/Kesariya Brahmastra 128 Kbps.mp3.mp3"
  ],
  "Lounge- Soft House": [
    "cardssongs/Laal Ishq Goliyon Ki Raasleela Ram Leela 128 Kbps.mp3",
    "cardssongs/Luv Ju Bunty Aur Babli 2 128 Kbps.mp3",
    "cardssongs/Mann Jogiya Pyaar Hai Toh Hai 128 Kbps.mp3",

  ],
  "90s Swagger": [
    "cardssongs/Mere Yaraa Sooryavanshi 128 Kbps.mp3",
    "cardssongs/Nashe Si Chadh Gayi Befikre 128 Kbps.mp3",
    "cardssongs/Palat Tera Hero Idhar Hai Main Tera Hero 128 Kbps.mp3"
  ],
  "Rock Classics!": [
    "cardssongs/Pasoori Nu Satyaprem Ki Katha 128 Kbps.mp3",
    "cardssongs/Rangdaari Lucknow Central 128 Kbps.mp3",
    "cardssongs/Sajde Kill Dil 128 Kbps.mp3"
  ],
  "Beats to think to": [
    "cardssongs/Tu Hi Hai Dear Zindagi 128 Kbps.mp3",
    "cardssongs/Valam Made In China 128 Kbps.mp3",
    "cardssongs/Yaariyan Reprise Cocktail 128 Kbps.mp3"
  ]
};


async function getSongs() {
  let a = await fetch("http://127.0.0.1:3000/songs/");
  let response = await a.text();

  let div = document.createElement("div");
  div.innerHTML = response;

  let as = div.getElementsByTagName("a");
  let songs = [];

  for (let i = 0; i < as.length; i++) {
    const element = as[i];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
  }

  return songs;
}

let audio = new Audio();

audio.addEventListener("ended", () => {
  if (currentIndex < currentPlaylist.length - 1) {
    playSongAt(currentIndex + 1);
  }
});


let currentPlaylist = [];
let currentIndex = 0;


function playSongAt(index) {
  if (index >= 0 && index < currentPlaylist.length) {
    audio.src = currentPlaylist[index];
    audio.play();
    currentIndex = index;

    const name = songNameMap[currentPlaylist[index].split("/").pop()] || "Playing...";
    document.querySelector(".songinfo").textContent = name;

    audio.addEventListener("loadedmetadata", () => {
      const duration = formatTime(audio.duration);
      document.querySelector(".total-duration").textContent = duration;
    });
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

audio.addEventListener("timeupdate", () => {
  const progress = document.querySelector(".progress-bar");
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  progress.value = currentTime;
  progress.max = duration;

  document.querySelector(".current-time").textContent = formatTime(currentTime);
});

document.querySelector(".progress-bar").addEventListener("input", (e) => {
  audio.currentTime = e.target.value;
});


let currentSongUrl = "";

async function main() {
  let songs = await getSongs();
  console.log(songs);

  let listItems = document.querySelectorAll(".songList ul li");

  songs.forEach((url, index) => {
    if (index < listItems.length) {
      let parts = url.split("/");
      let fileName = decodeURIComponent(parts[parts.length - 1]);
      let displayName = songNameMap[fileName] || fileName;

      let h6 = listItems[index].querySelector("h6");
      h6.textContent = displayName;

      listItems[index].dataset.url = url;

      // ✅ "Play Now" always starts the song
      let playNow = listItems[index].querySelector(".play-now");
      playNow.addEventListener("click", () => {
        playSong(url);
      });

      // ✅ "Play icon" toggles play/pause for same song
      let playIcon = listItems[index].querySelector(".playlib");
      playIcon.addEventListener("click", () => {
        if (audio.src === url || audio.src.endsWith(encodeURIComponent(url))) {
          if (!audio.paused) {
            audio.pause();
            console.log("Paused:", url);
          } else {
            audio.play();
            console.log("Resumed:", url);
          }
        } else {
          playSong(url);
        }
      });
    }
  });
}

function playSong(url) {
  audio.src = url;
  audio.play();
  currentSongUrl = url;
  console.log("Playing:", url);

  audio.addEventListener("loadeddata", () => {
    console.log("Duration:", audio.duration);
  });
}

main();

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    // Remove highlight from all cards
    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));

    // Highlight the clicked card
    card.classList.add("active");

    // Play the associated playlist
    const name = card.dataset.name;
    if (playlistMap[name]) {
      currentPlaylist = playlistMap[name];
      currentIndex = 0;
      playSongAt(currentIndex);
    }
  });
});


document.querySelector(".songbuttons img[src='back.svg']").addEventListener("click", () => {
  if (currentIndex > 0) {
    playSongAt(currentIndex - 1);
  }
});

const playBtn = document.querySelector(".songbuttons img[src='play.svg']");
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

document.querySelector(".songbuttons img[src='forward.svg']").addEventListener("click", () => {
  if (currentIndex < currentPlaylist.length - 1) {
    playSongAt(currentIndex + 1);
  }
});
