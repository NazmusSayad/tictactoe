const arNUmber1 = [0, 2, 4, 6, 8];
let clickedOn;
const array = [null, "item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9"];

const mathRandom = (min = 0, max = 1) => {
  min = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - min + 1) + min);
};
const cf = () => {
  const a = [];
  document.querySelectorAll("#ticTacToe > div").forEach((element) => {
    a.push(ce(element));
  });
  const b = new Set(a);
  const c = Array.from(b);

  if (c.length === 1 && c[0] === false) {
    return true;
  }
  return false;
};

const cf1 = () => {
  const a = [];
  arNUmber1.forEach((element) => {
    a.push(ce(allItems[element]));
  });
  const b = new Set(a);
  const c = Array.from(b);
  if (c.length === 1 && c[0] === false) {
    return true;
  }
  return false;
};

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
      msg("win");
    }, 100);
    return;
  }
  if (d.classList.contains("tac") && e.classList.contains("tac") && f.classList.contains("tac")) {
    d.classList.add("red");
    e.classList.add("red");
    f.classList.add("red");
    setTimeout(() => {
      msg("lose");
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
    msg("draw");
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
    msg("Now what !!", true);
    return true;
  }
  if (tic[0]) {
    tic[0].classList.add("tac");
    msg("I am not fool.", true);
    return true;
  }
  return false;
};
const ai = () => {
  if (!active) {
    return;
  }

  if (aiCheckTwo()) {
  } else if (!cf1()) {
    while (true) {
      const item = allItems[arNUmber1[mathRandom(0, 4)]];
      if (ce(item)) {
        item.classList.add("tac");
        if (clickedOn) {
          msg("Uhu!", true);
        }
        break;
      }
    }
  } else {
    while (true) {
      const item = allItems[mathRandom(0, 8)];
      if (ce(item)) {
        item.classList.add("tac");
        if (clickedOn) {
          msg("Hah!", true);
        }
        break;
      }
    }
  }
  time = true;
};
const startGame = () => {
  reset();
  active = true;
  main.classList.add("active");
  time = false;
  clickedOn = undefined;
  setTimeout(() => {
    ai();
  }, 200);
  msgBox.textContent = "Let's see";
  event.target.textContent = "Play again";
};

const msg = (param, i) => {
  switch (param) {
    case "win":
      msgBox.textContent = "You Win...";
      active = false;
      main.classList.remove("active");
      break;
    case "lose":
      msgBox.textContent = "LoL . Play Again if you can!";
      active = false;
      main.classList.remove("active");
      break;
    case "draw":
      msgBox.textContent = "Ewee !\nClick ok to play again and cancle to exit";
      active = false;
      main.classList.remove("active");
      break;
  }
  if (i !== undefined) {
    msgBox.textContent = param;
    setTimeout(() => {
      msgBox.textContent = "";
    }, 2000);
  }
};
