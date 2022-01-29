const getObject = (name) => document.querySelector(name);
const sounds = document.getElementsByTagName("audio");

//LOOP AUDIO ON TOGGLE //////////////
getObject("#loop").addEventListener("change", () => {
  for (let i = 0; i < sounds.length; i++) {
    if (loop.checked == true) {
      sounds[i].loop = true;
    } else if (loop.checked == false) {
      sounds[i].loop = false;
    }
  }
});

////Play all the instruments together ///////

getObject(".play").onclick = function () {
  for (i = 0; i < sounds.length; i++) {
    sounds[i].play();
  }
};

/// STOP THE TRACKS AND RESTART THEM  /////

getObject(".stop").onclick = function () {
  for (i = 0; i < sounds.length; i++) {
    sounds[i].currentTime = 0;
    sounds[i].pause();
  }
};

//// CRATE AND AVCTIVATE THE PROGRESS CURSOR ///////

let timer;
let percent = 0;
let audio = document.getElementById("audio");
audio.addEventListener("playing", function (_event) {
  let duration = _event.target.duration;
  advance(duration, audio);
});
let advance = function (duration, element) {
  let progress = document.getElementById("progress");
  increment = 10 / duration;
  percent = Math.min(increment * element.currentTime * 10, 100);
  progress.style.width = percent + "%";
  startTimer(duration, element);
};
let startTimer = function (duration, element) {
  if (percent < 100) {
    timer = setTimeout(function () {
      advance(duration, element);
    }, 100);
  }
};
