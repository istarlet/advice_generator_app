let adviceArea = document.querySelector("#adviceArea");
let adviceNumber = document.querySelector("#adviceNumber");
let diceBtn = document.querySelector("#diceBtn");

function adviceGenerator() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
    .then((response) => response.json())
    .then((data) => {
      adviceNumber.textContent = `Advice #${data.slip.id}`;
      adviceArea.textContent = `${data.slip.advice}`;
    });
}

diceBtn.addEventListener("click", adviceGenerator);
adviceGenerator();

