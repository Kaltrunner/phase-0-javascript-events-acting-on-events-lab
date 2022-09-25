// Your code here
// const dodger = document.getElementById("dodger");

// dodger.style.backgroundColor = "#666666";

// dodger.style.bottom = "0px";

// dodger.style.left = "180px";

// document.addEventListener("keydown", function (event) {
//     console.log(event);
//   });

//   document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       const leftNumbers = dodger.style.left.replace("px", "");
//       const left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 8}px`;
//     }
//   });

//   function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`;
//     }
//   }
  
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   });

//   document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowRight") {
//       const leftNumbers = dodger.style.left.replace("px", "");
//       const left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left + 8}px`;
//     }
//   });

//   function moveDodgerRight() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left + 1}px`;
//     }
//   }
  
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   });



const dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#5DADE2 ";
//dodger.style.left = "0px";

// document.addEventListener("keydown", function (e) {
//   if(e.key === "ArrowLeft") {
//     const leftNumbers = dodger.style.left.replace("px"," ")
//     const left = parseInt(leftNumbers, 10)

//     dodger.style.left = `${left - 8}px`
//   }
// })

function moveDodgerLeft()  {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  
  if (left > 0) {
    dodger.style.left = `${left - 8}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight()  {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left < 360) {
    dodger.style.left = `${left + 8}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});