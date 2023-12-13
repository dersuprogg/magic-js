const magicP = document.querySelector(".magic-p");
const magicTxt = magicP.getAttribute("data-text");

const txtArr = magicTxt.split("");
let displayTxt = "";
let charIndex = 0;

const intervalId = setInterval(() => {
  displayTxt += txtArr[charIndex];
  magicP.textContent = displayTxt;
  charIndex++;
  if (charIndex >= txtArr.length) {
    clearInterval(intervalId);
  }
}, 120);

setTimeout(() => {
  // document.querySelector("body").classList.add("center");
  magicP.classList.add("center-pos");
}, 3500);

setTimeout(() => {
  magicP.textContent = "~~~~ CeNtErEd DiV Magicccc ~~~~";
  magicP.style.backgroundColor = "#C51605";
  magicP.classList.add("decorate");
}, 3700);
