let gridContainer = document.querySelector("#gridContainer")

// create 16 by 16 box
function makeGrid(size) {
  gridContainer.textContent = ""
  for (let i = 0; i < size * size; i++) {
    let boxDiv = document.createElement("div")
    boxDiv.className = "box"
    boxDiv.style.width = 400/size + 'px'
    boxDiv.style.height = 400 / size + "px"
    gridContainer.appendChild(boxDiv)
  }
  hoverEffect()
}

makeGrid(16)
// create hover effect on the boxes
function hoverEffect(){
let boxDivs = document.querySelectorAll(".box")
boxDivs.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "yellow"
  })
})
}
hoverEffect()

// ask user for the number of  button
let ask = document.querySelector("#ask")
ask.addEventListener("click", () => {
  let size = parseInt(prompt("it must not be greater than 100"))
  if (size > 100) {
    alert("invalid")
  } else {
    makeGrid(size)
  }
})
