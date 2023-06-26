const test = console.log
// Selecting all my required variables to work with
const form = document.querySelector("form");
const name = document.getElementById("name");
const price = document.getElementById("price");
const stockButton = document.getElementById("stock");
const stockTag = document.getElementById("inStock");
stockTag.style.color = "goldenrod"


stockButton.addEventListener("click", (event => {
    stockTag.style.color = "red"
}
))

stockButton.addEventListener("dblclick", (event) => {
    stockTag.style.color = "goldenrod"
})