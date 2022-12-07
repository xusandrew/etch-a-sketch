function getInput() {
  let size = prompt("Size (Less than 100): ", "");
  while (size >= 100) {
    size = prompt("Size (Less than 100): ", "");
  }
  createGrid(size);
}
function createGrid(size) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < size; j++) {
      let block = document.createElement("div");
      block.classList.add("block");

      block.addEventListener("mouseover", (e) => {
        block.classList.add("hover");
      });

      block.addEventListener("mouseout", (e) => {
        block.classList.remove("hover");
      });

      row.appendChild(block);
    }
    container.appendChild(row);
  }
}

const button = document.getElementById("button");
const container = document.getElementById("container");

button.addEventListener("click", getInput);
