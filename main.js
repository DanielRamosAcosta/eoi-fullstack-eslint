import { sum } from "./math.js";

document.addEventListener('DOMContentLoaded', (event) => {
  main()
})

function main() {
  const resultOutput = document.getElementById("result")

  resultOutput.innerText = sum(5, 6);
}
