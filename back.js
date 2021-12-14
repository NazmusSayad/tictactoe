const arNUmber1 = [0, 2, 4, 6, 8];
const mathRandom = (min = 0, max = 1) => {
  min = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - min + 1) + min);
};
function mri() {
  return arNUmber1[mathRandom(0, 4)];
}
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

