// 関数が呼ばれるたびに定義する必要がないので関数の外で定義
const omikujiResult = document.getElementById("omikujiBtn");
const omikujiArray = ["大吉", "中吉", "吉", "凶"];

const omikujiFunc = () => {

  // 関数の中で定義されている変数は、関数内の処理が終了すると同時に消去、再定義の必要ない変数はconstで定義
  const randomNum = Math.floor(Math.random() * omikujiArray.length);

  omikujiResult.innerText = omikujiArray[randomNum];
};