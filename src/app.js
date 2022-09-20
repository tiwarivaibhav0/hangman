import "./styles/main.css";
import { arr } from "./data";
import { images } from "./data";

start();
var counter;
var word;
var inp;
var lives;
var trueCount;
function start() {
  counter = 0;
  changeImage();
  trueCount = 0;
  var index = Math.floor(Math.random() * arr.length);
  word = arr[index];
  document.getElementById("hint").innerHTML =
    '<button id="showhintbtn">Show Hint 1</button>';
  document.getElementById("hint2").innerHTML =
    '<button id="showhintbtn2">Show Hint 2</button>';
  let text = "";
  for (let i = 0; i < word.length; i++)
    text += `<input/ 
    maxlength="1" id='${i}'> `;
  // placeholder="${word[i].toUpperCase()}"
  document.getElementById("boxes").innerHTML = text;
  inp = document.querySelectorAll("input");
  for (let i = 0; i < inp.length; i++)
    inp[i].addEventListener("keyup", incCounter);
  document.getElementById("showhintbtn").addEventListener("click", showHint);
  document.getElementById("showhintbtn2").addEventListener("click", showHint2);

  showLives();
}
function incCounter(e) {
  if (e.target.value !== "" && counter < 7) {
    if (word[e.target.id].toUpperCase() != e.target.value.toUpperCase()) {
      // alert("not matched");
      counter++;
      showLives();

      changeImage();
    } else {
      e.target.setAttribute("readonly", "");
      e.target.setAttribute("id", "true");
      trueCount++;
      if (trueCount == word.length) {
        document.getElementById("hint").innerHTML =
          "<span id='win'>You Won!!</span>";
        document.getElementById("hint2").innerHTML = "";
      }
    }
  }
  if (counter == 7) {
    document.getElementById("hint").innerHTML =
      "<span id='over'>Game Over!!</span>";
    document.getElementById("hint2").innerHTML = "";

    for (let i = 0; i < inp.length; i++) inp[i].setAttribute("readonly", "");
  }
}

document.getElementById("btn").addEventListener("click", start);

function showHint() {
  counter++;
  showLives();

  changeImage();
  document.getElementById("hint").innerHTML =
    "Hint1 : ......" + word.slice(word.length - 2, word.length);
}
function showHint2() {
  counter++;
  showLives();

  changeImage();
  document.getElementById("hint2").innerHTML =
    "Hint2 : " + word.slice(0, 2) + "......";
}
function changeImage() {
  document.getElementById(
    "image"
  ).innerHTML = `<img src="${images[counter]}" />`;
}

function showLives() {
  document.getElementById("lives").innerHTML = "Lives : " + (7 - counter);
}
