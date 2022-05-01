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
