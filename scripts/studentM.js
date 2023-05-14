import { Student } from "./modules/ClassStudent.js";
function Main() {
  let id = prompt("name");
  let stud1 = new Student("064897", "ino", 88, 90, 55);
  console.log(stud1.print());
}
Main();
