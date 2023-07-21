const musicPlayer = document.querySelector(".music-player");
const playButton = document.getElementById("play");
const nextbtn = document.getElementById("nextbtn");
const prevbtn = document.getElementById("prevbtn");
const pause = document.getElementById("pause");
const progressBar = document.querySelector(".progress-bar");
const audioButton = document.getElementById("audio");
const volume = document.getElementById("volume");
const volume_x = document.getElementById("volume_x");
const likeicon = document.getElementById("likeicon");
const like = document.getElementById("like");
const progress = document.getElementById("progress");
let count = 0;

const songs = [
  {
    displayName: "Disfruto",
    path: "audio/Carla Morrison - Disfruto (letra).mp3",
    cover: "https://i.ytimg.com/vi/Cd1jr3ujrTw/maxresdefault.jpg",
  },
  {
    displayName: "Firuze",
    path: "audio/Sezen Aksu - Firuze (Official Audio - Orijinal Plak Kayıt).mp3",
    cover: "https://i.ytimg.com/vi/EO4r_SV6bbA/maxresdefault.jpg",
  },
];

window.addEventListener("load", () => {
  addMusic();
});

const addMusic = () => {
  audioButton.src = songs[count].path;
};

playButton.addEventListener("click", () => {
  playButton.style.display = "none";
  pause.style.display = "block";
  audioButton.play();
});

pause.addEventListener("click", () => {
  playButton.style.display = "block";
  pause.style.display = "none";
  audioButton.pause();
});

volume.addEventListener("click", () => {
  audioButton.volume = 0.0;
  volume.style.display = "none";
  volume_x.style.display = "block";
});
volume_x.addEventListener("click", () => {
  audioButton.volume = 1;
  volume.style.display = "block";
  volume_x.style.display = "none";
});

like.addEventListener("click", () => {
  like.style.backgroundColor = "red";
  like.style.color = "white";
});

audioButton.addEventListener("loadedmetadata", () => {
  progress.setAttribute("min", 0);
  progress.setAttribute("max", audioButton.duration);
});
progress.addEventListener("input", () => {
  audioButton.currentTime = progress.value;
});

audioButton.addEventListener("timeupdate", () => {
  progress.value = audioButton.currentTime;
});
let isPlaying = false;
const playSong = () => {
  isPlaying = true;
  playButton.classList.replace("fa-play", "fa-pause");
  audio.play();
};
const loadSong = (song) => {
  img.src = song.cover;
  title.textContent = song.displayName;
  audio.src = song.path;
};
prevbtn.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = songs.length - 1;
  }
  loadSong(songs[count]);
  playSong();
});

nextbtn.addEventListener("click", () => {
  count++;
  if (count > songs.length - 1) {
    count = 0;
  }
  loadSong(songs[count]);
  playSong();
});
