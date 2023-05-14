import { Car } from "./CarClass/carClass.js";
function Main() {
  let mer = new Car("Mercedes", "green");
  let bmw = new Car("BMW", "blue");
  let audi = new Car("Audi", "orange");

  let holder = document.querySelector("#holder");
  holder.innerHTML += mer.Print();
  holder.innerHTML += bmw.Print();
  holder.innerHTML += audi.Print();
}
Main();
