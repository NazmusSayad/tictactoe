const main = document.getElementById("ticTacToe");
const array = [null, "item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9"];
const allItems = document.querySelectorAll("#ticTacToe > div");
let time;
const reset = () => {
  allItems.forEach((element, ind, arr) => {
    element.classList.remove("tic");
    element.classList.remove("tac");
    element.classList.remove("green");
    element.classList.remove("red");
  });
};
const cAll = (a, b, c) => {
  const d = main.querySelector("." + array[a]);
  const e = main.querySelector("." + array[b]);
  const f = main.querySelector("." + array[c]);
  if (d.classList.contains("tic") && e.classList.contains("tic") && f.classList.contains("tic")) {
    d.classList.add("green");
    e.classList.add("green");
    f.classList.add("green");
    setTimeout(() => {
      alert("You Win...");
      location.reload();
    }, 100);
    return;
  }
  if (d.classList.contains("tac") && e.classList.contains("tac") && f.classList.contains("tac")) {
    d.classList.add("red");
    e.classList.add("red");
    f.classList.add("red");
    setTimeout(() => {
      alert("LoL . Play Again if you can!");
      location.reload();
    }, 100);
    return;
  }
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
  if (cf()) {
    setTimeout(() => {
      if (confirm(`Ewee !\nClick ok to play again and cancle to exit`)) {
        location.reload();
      } else {
        close();
      }
    }, 50);
  }
};
// ------------
const ce = (item) => {
  const g = item.classList.contains("tac");
  const h = item.classList.contains("tic");
  if (!g && !h) {
    return true;
  }
  return false;
};
const check2 = (a, b, c) => {
  const d = main.querySelector("." + array[a]);
  const e = main.querySelector("." + array[b]);
  const f = main.querySelector("." + array[c]);

  const g = d.classList.contains("tic");
  const h = e.classList.contains("tic");
  const i = f.classList.contains("tic");
  if (ce(d) && h && i) {
    return d;
  }
  if (g && ce(e) && i) {
    return e;
  }
  if (g && h && ce(f)) {
    return f;
  }
  return false;
};
const check3 = (a, b, c) => {
  const d = main.querySelector("." + array[a]);
  const e = main.querySelector("." + array[b]);
  const f = main.querySelector("." + array[c]);

  const j = d.classList.contains("tac");
  const k = e.classList.contains("tac");
  const l = f.classList.contains("tac");

  if (ce(d) && k && l) {
    return d;
  }
  if (j && ce(e) && l) {
    return e;
  }
  if (j && k && ce(f)) {
    return f;
  }

  return false;
};
const aiCheckTwo = (a, b, c) => {
  const tac = [
    check3(1, 2, 3),
    check3(4, 5, 6),
    check3(7, 8, 9),
    check3(1, 4, 7),
    check3(2, 5, 8),
    check3(3, 6, 9),
    check3(1, 5, 9),
    check3(3, 5, 7),
  ];
  tac.sort();
  const tic = [
    check2(1, 2, 3),
    check2(4, 5, 6),
    check2(7, 8, 9),
    check2(1, 4, 7),
    check2(2, 5, 8),
    check2(3, 6, 9),
    check2(1, 5, 9),
    check2(3, 5, 7),
  ];
  tic.sort();
  if (tac[0]) {
    tac[0].classList.add("tac");
    return true;
  }
  if (tic[0]) {
    tic[0].classList.add("tac");
    return true;
  }
  return false;
};
const ai = () => {
  if (!cf() && !time) {
    if (aiCheckTwo()) {
    } else if (!cf1()) {
      while (true) {
        const item = allItems[mri()];
        if (ce(item)) {
          item.classList.add("tac");
          break;
        }
      }
    } else {
      while (true) {
        const item = allItems[mathRandom(0, 8)];
        if (ce(item)) {
          item.classList.add("tac");
          break;
        }
      }
    }
    time = true;
  }
  check();
};
// --------============================= ===
allItems.forEach((element) => {
  element.addEventListener("click", function () {
    if (ce(this) && time) {
      this.classList.add("tic");
      time = false;
      setTimeout(() => {
        ai();
      }, 200);
    }

    check();
  });
});
if (mathRandom(0, 1)) {
  time = false;
  ai();
} else {
  time = true;
  console.log("It's your turn.");
}
