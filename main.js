const apiUrl = "https://api.adviceslip.com/advice";
const reloadButton = document.querySelector("button#diceBtn");
let adviceArea = document.querySelector("#adviceArea");
let adviceNum = document.querySelector("#adviceNum");

fetch(apiUrl)
.then(
    (resp) => {
        return resp.json()
    }
).then((data) => {
    adviceArea.innerHTML = data.slip.advice;
    adviceNum.innerHTML = data.slip.id;
});


reloadButton.addEventListener("click", ()=> getNewAdvice())

function getNewAdvice(){
    fetch(apiUrl)
.then(
    (resp) => {
        return resp.json()
    }
).then((data) => {
    console.log(data.slip.advice)
    adviceArea.innerHTML = data.slip.advice;

    console.log(data.slip.id)
    adviceNum.innerHTML = data.slip.id;
});
}

