import { Counter } from "../scripts/modules/classCounter.js";
function Main() {
  let count = new Counter();
  let cnt = document.querySelector("#cnt");
  count.Initialize(2);
  count.Increment();
  count.Increment();
  count.Increment();
  count.Increment();
  count.Increment();
  count.Increment();
  cnt.innerHTML += count.Go();
}

Main();
