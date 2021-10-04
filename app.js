"use strict";

document.addEventListener("DOMContentLoaded", start);

function start() {
  const sentence = document.querySelector(".txt");
  //console.log("sentence", sentence);
  const letterArr = sentence.innerHTML.split("");
  //console.log("letterArr", letterArr.length);

  sentence.textContent = "";

  letterArr.forEach((element, i) => {
    let createSpan = document.createElement("span");
    //console.log("createSpan", createSpan);
    createSpan.classList.add("animated");
    createSpan.style.animationDelay = `${i / 10}s`;

    if (element === " ") {
      createSpan.innerHTML = "&nbsp";
    } else {
      createSpan.textContent = element;
    }

    sentence.append(createSpan);
  });
}
