import { Frog } from "../scripts/modules/classFrog.js";
function Main() {
  let f1 = new Frog("crazy Frog", "green", 3, 9);
  let frg = document.querySelector("#frg");
  frg.innerHTML += f1.Show();

  document.querySelector("#playButton").addEventListener("click", () => {
    let i = 0;

    let IntervalId = setInterval(() => {
      frg.innerHTML += f1.Quak();
      if (++i >= (f1.Age * f1.Weight) / 2) {
        window.clearInterval(IntervalId);
      }
    }, 500);
  });
}
Main();
