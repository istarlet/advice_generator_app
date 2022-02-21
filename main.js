let adviceArea = document.querySelector("#adviceArea");
let adviceNumber = document.querySelector("#adviceNumber");
let diceBtn = document.querySelector("#diceBtn");

const url = "https://api.adviceslip.com/advice";




function adviceGenerator() {
fetch(url)
    .then(res => res.json())
    .then(data => {
        adviceNumber.textContent = `Advice #${data.slip.id}`;
        adviceArea.textContent = `"${data.slip.advice}"`;
    })
}

diceBtn.addEventListener("click", adviceGenerator);
adviceGenerator();

