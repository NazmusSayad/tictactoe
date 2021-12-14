* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

html {
  font-family: "Roboto", sans-serif;
  background-color: aliceblue;
}
main {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#ticTacToe {
  box-shadow: 0 0 40px #00000050, 0 0 40px #00000050, 0 0 40px #00000050;
  background-color: aliceblue;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
  border-radius: 20px;
  .fa-circle {
    font-size: 20px;
  }
  .fa-times {
    font-size: 25px;
  }
  .item1 {
    border-radius: 15px 0 0 0;
  }
  .item3 {
    border-radius: 0 15px 0 0;
  }
  .item9 {
    border-radius: 0 0 15px 0;
  }
  .item7 {
    border-radius: 0 0 0 15px;
  }
  & > div {
    height: 75px;
    width: 75px;
    background-color: blueviolet;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    cursor: pointer;
    i {
      display: none;
    }
  }
  .tic {
    .fa-circle {
      display: block;
    }
  }
  .tac {
    .fa-times {
      display: block;
    }
  }
}
.red {
  background-color: red !important;
}
.green {
  background-color: aqua !important;
}