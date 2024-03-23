let gridContainer = document.querySelector("#gridContainer")

let row = 16
let col = 16
for (let i = 0; i < row * col; i++) {
  let boxDiv = document.createElement("div")
  boxDiv.className = "box"
  gridContainer.appendChild(boxDiv)
}

let boxDivs = document.querySelectorAll(".box")

boxDivs.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "white"
    
  })
})
