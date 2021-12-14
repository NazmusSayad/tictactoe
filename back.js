const mathRandom = (min = 0, max = 1) => {
  min = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - min + 1) + min);
};
function mri() {
  const ar = [0, 2, 4, 6, 8];
  return ar[mathRandom(0, 4)];
}
