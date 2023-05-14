export class Student {
  studntID;
  studentName;
  csharpGrade;
  htmlGrade;
  mathGrade;

  constructor(studntID, studentName, csharpGrade, htmlGrade, mathGrade) {
    //debugger;
    this.StudentID = studntID;
    this.StudentName = studentName;
    this.CsharpGrade = csharpGrade;
    this.HtmlGrade = htmlGrade;
    this.MathGrade = mathGrade;
  }

  set StudentID(numValue) {
    this.studntID = numValue;
  }

  set StudentName(stringVal) {
    this.studentName = stringVal;
  }

  set CsharpGrade(CgradeVal) {
    this.csharpGrade = CgradeVal;
  }

  set HtmlGrade(HgradeVal) {
    this.htmlGrade = HgradeVal;
  }
  set MathGrade(mathVal) {
    this.mathGrade = mathVal;
  }

  get StudentID() {
    return this.studntID;
  }
  get StudentName() {
    return this.studentName;
  }

  get CsharpGrade() {
    return this.csharpGrade;
  }
  get HtmlGrade() {
    return this.htmlGrade;
  }
  get MathGrade() {
    return this.mathGrade;
  }

  print() {
    return `student ID: ${this.StudentID} student name: ${
      this.StudentName
    } average: ${this.avg()} grades over 80: ${this.getOver80()}`;
  }

  avg() {
    return ((this.CsharpGrade + this.HtmlGrade + this.MathGrade) / 3).toFixed(
      2
    );
  }

  getOver80() {
    let str80 = "";
    if (this.CsharpGrade > 80) {
      str80 += "Csharp,";
    }
    if (this.HtmlGrade > 80) {
      str80 += "HTML,";
    }
    if (this.MathGrade > 80) {
      str80 += "Math,";
    }

    return str80;
  }
}
