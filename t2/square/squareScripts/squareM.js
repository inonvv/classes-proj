import { Square } from "./classSquare.js";
function Main() {
  let sq1 = new Square(5, "red");
  let sq2 = new Square(3, "blue");

  let first = document.querySelector("#first");
  let second = document.querySelector("#second");
  console.log(sq1.Print());

  first.innerHTML += sq1.Print();
  second.innerHTML += sq2.Print();
}
Main();
