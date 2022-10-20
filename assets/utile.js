const Rock = document.getElementById("rockImg");
const Papper = document.getElementById("papperImg");
const Scisors = document.getElementById("scisorImg");
const defImg = document.getElementById("default");

const rButton = document.getElementById("rockBtn");
const pButton = document.getElementById("papperBtn");
const sButton = document.getElementById("scisorBtn");



rButton.addEventListener("click", () => {
    Rock.classList.remove("not");
    Papper.classList.add("not");
    Scisors.classList.add("not");
    defImg.classList.add("not");
})
pButton.addEventListener("click", () => {
    Rock.classList.add("not");
    Papper.classList.remove("not");
    Scisors.classList.add("not");
    defImg.classList.add("not");
})
sButton.addEventListener("click", () => {
    Rock.classList.add("not");
    Papper.classList.add("not");
    defImg.classList.add("not");
    Scisors.classList.remove("not");
})