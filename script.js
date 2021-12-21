const main = document.getElementById("ticTacToe");
const allItems = document.querySelectorAll("#ticTacToe > div");
const msgBox = document.querySelector(".msgBox");
let time;
let active;
// --------============================= ===
allItems.forEach((element) => {
  element.addEventListener("click", function () {
    clickedOn = true;
    if (ce(this) && time && active) {
      this.classList.add("tic");
      time = false;
      setTimeout(() => {
        if (!cf()) {
          ai();
          check();
        }
      }, 250);
    }
    check();
  });
});
