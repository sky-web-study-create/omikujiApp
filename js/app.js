const omikujiFunc = () => {
  const omikujiResult = document.getElementById("omikujiBtn");

  const omikujiArray = ["大吉", "中吉", "吉", "凶"];

  let randomNum = Math.floor(Math.random() * omikujiArray.length);

  omikujiResult.innerText = omikujiArray[randomNum];
};