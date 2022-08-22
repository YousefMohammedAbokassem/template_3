VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 20,
  speed: 400,
});

myOtherLinks = document.querySelector(".mega-li");
myMega = document.querySelector(".mega-li .menu");

let toggle = true;
myOtherLinks.addEventListener("click", function () {
  if (toggle) {
    myMega.style.cssText =
      "z-index:100; pointer-events:auto; top:74px; opacity:1;";
    toggle = !toggle;
  } else {
    myMega.style.cssText = "z-index:0; pointer-events:none; top:0; opacity:0;";
    toggle = !toggle;
  }
});

myButton = document.querySelector(".myButton");
// window.onscroll = function () {
//   if (window.scrollY >= 500) {
//     myButton.style.display = "block";
//   } else {
//     myButton.style.display = "none";
//   }
// };

myButton.onclick = function () {
  scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
// time down
let timeDown = new Date("Dec 31, 2022 23:59:59").getTime();
let counter = setInterval(() => {
  let timeNow = new Date().getTime();
  let diff = timeDown - timeNow;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  document.querySelector(".day ").innerHTML =
    days < 100 ? `00${days}` : days < 10 ? `0${days}` : days;
  document.querySelector(".hour").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minute").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".second").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (days == "0") {
    clearInterval(counter);
  }
}, 1000);

// time down

// progress
let ourSkills = document.getElementById("our-skills");
let spans = document.querySelectorAll(".progress span");
// services
let services = document.getElementById("services");
let boxes_services = document.querySelectorAll(".services .box");
// how it works
let howItWorks = document.getElementById("how-it-work");
let howItWorks_image = document.querySelector(".how-it-work .image");
let howItWorks_boxes = document.querySelectorAll(".how-it-work .box");
// stats
let stats = document.getElementById("stats");
let stats_Spans = document.querySelectorAll(
  ".stats .container .box  :nth-child(2)"
);
let started = false;
let end = true;

// console.log(stats);
window.onscroll = function () {
  //
  if (window.scrollY >= stats.offsetTop) {
    if (started == false) {
      stats_Spans.forEach((span) => {
        let goal = span.dataset.goal;
        span.innerHTML = 0;
        let count = setInterval(() => {
          span.textContent++;
          if (span.textContent == goal) {
            clearInterval(count);
          }
        }, 2000 / goal);
      });
      started = true;
    }
  } else {
    started = false;
  }
  //button
  if (window.scrollY >= 500) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
  //progress
  if (window.scrollY >= ourSkills.offsetTop - 150) {
    spans.forEach((ele) => {
      ele.style.width = ele.dataset.width;
    });
  } else {
    spans.forEach((ele) => {
      ele.style.width = "0%";
    });
  }
  //services
  if (window.scrollY >= services.offsetTop - 100) {
    boxes_services.forEach((e) => {
      e.style.opacity = 1;
      e.style.transform = "scale(1)";
    });
  } else {
    boxes_services.forEach((e) => {
      e.style.opacity = 0.3;
      e.style.transform = "scale(0.4)";
    });
  }

  // how-it-work
  // make edit childrenssssssss
  if (window.scrollY >= howItWorks.offsetTop - 150) {
    howItWorks_image.style.opacity = "1";
    howItWorks_image.style.transform = `translateX(0px)`;
    //
    // howItWorks_boxes.forEach((ele) => {
    //   ele.style.opacity = "1";
    //   ele.style.transform = "translateX(0px)";
    // });
  } else {
    howItWorks_image.style.transform = `translateX(${-howItWorks.offsetWidth}px)`;
    howItWorks_image.style.opacity = "0.2";
    //
    // howItWorks_boxes.forEach((ele) => {
    //   ele.style.transform = `translateX(${howItWorks.offsetWidth}px)`;
    //   ele.style.opacity = "0.2";
    // });
  }
  if (window.scrollY >= howItWorks.offsetTop + 75) {
    howItWorks_boxes.forEach((ele) => {
      ele.style.opacity = "1";
      ele.style.transform = "translateX(0px)";
    });
  } else {
    howItWorks_boxes.forEach((ele) => {
      ele.style.transform = `translateX(${howItWorks.offsetWidth}px)`;
      ele.style.opacity = "0.2";
    });
  }
};
