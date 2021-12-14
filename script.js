const main = document.getElementById("ticTacToe");
const array = [null, "item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9"];
const allItems = document.querySelectorAll("#ticTacToe > div i");
const reset = () => {
  allItems.forEach((element, ind, arr) => {
    element.classList.remove("fa-circle");
    element.classList.remove("fa-times");
    element.parentNode.classList.remove("green");
    element.parentNode.classList.remove("red");
  });
};
const cAll = (a, b, c) => {
  const d = main.querySelector("." + array[a] + " i");
  const e = main.querySelector("." + array[b] + " i");
  const f = main.querySelector("." + array[c] + " i");
  if (d.classList.contains("fa-circle") && e.classList.contains("fa-circle") && f.classList.contains("fa-circle")) {
    d.parentNode.classList.add("green");
    e.parentNode.classList.add("green");
    f.parentNode.classList.add("green");
    setTimeout(() => {
      reset();
    }, 2000);
    return true;
  }
  const g = main.querySelector("." + array[a] + " i");
  const h = main.querySelector("." + array[b] + " i");
  const i = main.querySelector("." + array[c] + " i");
  if (g.classList.contains("fa-times") && h.classList.contains("fa-times") && i.classList.contains("fa-times")) {
    d.parentNode.classList.add("red");
    e.parentNode.classList.add("red");
    f.parentNode.classList.add("red");
    setTimeout(() => {
      reset();
    }, 2000);
    return true;
  }
  return false;
};
const check = () => {
  cAll(1, 2, 3);
  cAll(4, 5, 6);
  cAll(7, 8, 9);
  cAll(1, 4, 7);
  cAll(2, 5, 8);
  cAll(3, 6, 9);
  cAll(1, 5, 9);
  cAll(3, 5, 7);
};

// ------------
