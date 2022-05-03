VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 20,
  speed: 400,
});

myOtherLinks = document.querySelector(".mega-li");
console.log(myOtherLinks);
myMega = document.querySelector(".mega-li .menu");
console.log(myMega);
// myOtherLinks.addEventListener("click", function () {
//   myMega.style.opacity = "0";
//   myMega.style.top = "142px";
// });
myOtherLinks.addEventListener("click", function () {
  myMega.style.opacity = "1";
  myMega.style.top = "74px";
  myMega.style.setProperty("z-index", "100");
});
// myMega.addEventListener("blur", function () {
//   console.log("asd");
//   myMega.style.display = "none";
// });
myButton = document.querySelector(".myButton");
window.onscroll = function () {
  if (window.scrollY >= 500) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
};

myButton.onclick = function () {
  scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

let timeDown = new Date("Dec 31, 2022 23:59:59").getTime();
let counter = setInterval(() => {
  let timeNow = new Date().getTime();
  let diff = timeDown - timeNow;
  // console.log(diff / 1000 / 60 / 60 / 24);
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  console.log(hours);
  document.querySelector(".day ").innerHTML =
    days < 100 ? `00${days}` : days < 10 ? `0${days}` : days;
  document.querySelector(".hour").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minute").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".second").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
