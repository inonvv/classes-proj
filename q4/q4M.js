// import { Point } from "../scripts/modules/classPoint.js";
// function Main() {
//   let points = [
//     new Point(1, 2),
//     new Point(2, 2),
//     new Point(4, 2),
//     new Point(4, 6),
//   ];
//   //   console.log(points[3].show());
//   //   console.log(points[2].show());
//   //   console.log(points[0].equals(points[1]));

//   console.log(Point.isCoordinatesInArray(points, 3, 5));
//   console.log(Point.isCoordinatesInArray(points, 4, 6));

//   console.log(calcTripDistance(points));
//   let table = document.querySelector("#chart");
//   for (let i = 0; i < points.length; i++) {
//     let tr = document.createElement("tr");
//     table.appendChild(tr);
//     let tdP = document.createElement("td");
//     let tdX = document.createElement("td");
//     let tdY = document.createElement("td");
//     tr.appendChild(tdP);
//     tr.appendChild(tdX);
//     tr.appendChild(tdY);
//     tdP.innerHTML = points[i].show();
//     tdX.innerHTML = points[i].PointX;
//     tdY.innerHTML = points[i].PointY;
//   }
// }
// Main();

// function calcTripDistance(pointArr) {
//   let distance = 0;
//   for (let i = 0; i < pointArr.length - 1; i++) {
//     distance += Point.distance(pointArr[i], pointArr[i + 1]);
//   }
//   return distance;
// }
import { Point } from "../scripts/modules/classPoint.js";

function Main() {
  let points = [
    new Point(1, 0),
    new Point(2, 4),
    new Point(8, 2),
    new Point(13, 6),
  ];

  console.log(Point.isCoordinatesInArray(points, 3, 5));
  console.log(Point.isCoordinatesInArray(points, 4, 6));
  console.log(calcTripDistance(points));

  let table = document.querySelector("#chart");
  for (let i = 0; i < points.length; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let tdP = document.createElement("td");
    let tdX = document.createElement("td");
    let tdY = document.createElement("td");
    tr.appendChild(tdP);
    tr.appendChild(tdX);
    tr.appendChild(tdY);
    tdP.innerHTML = points[0].show();
    tdX.innerHTML = points[i].PointX;
    tdY.innerHTML = points[i].PointY;
  }
  // Prepare the data for the chart
  const labels = points.map((point) => point.show());
  const dataY = points.map((point) => point.PointY);

  // Create the chart using Chart.js
  new Chart("myChart", {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Y",
          data: dataY,
          borderColor: "#4c8bf5",
          backgroundColor: "rgba(76, 139, 245, 0.2)",
          pointRadius: 6,
          pointBackgroundColor: "#fff",
          tension: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Point",
            fontColor: "#333",
          },
          grid: {
            color: "#ddd",
          },
        },
        y: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Value",
            fontColor: "#333",
          },
          grid: {
            color: "#ddd",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

Main();

function calcTripDistance(pointArr) {
  let distance = 0;
  for (let i = 0; i < pointArr.length - 1; i++) {
    distance += Point.distance(pointArr[i], pointArr[i + 1]);
  }
  return distance;
}
