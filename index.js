const button = document.getElementById("button");
const container = document.getElementById("container");

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
