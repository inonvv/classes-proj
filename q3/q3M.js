import { Clock } from "../scripts/modules/classClock.js";
function Main() {
  let clocks = [
    new Clock(12, 35, 55, "Israel"),
    new Clock(8, 15, 30, " United States"),
    new Clock(18, 0, 0, "England"),
    new Clock(22, 45, 10, "Austria"),
    new Clock(6, 10, 20, "Australia"),
  ];
  console.log(clocks[0].show);
  const clockArr = document.querySelector("#clocks");

  clockArr.innerHTML += clocks[0].show();
  clockArr.innerHTML += clocks[1].show();
  clockArr.innerHTML += clocks[2].show();
  clockArr.innerHTML += clocks[3].show();
}
Main();
