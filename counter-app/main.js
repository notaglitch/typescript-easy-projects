"use strict";
const countElement = document.getElementById("countValue");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const resetBtn = document.getElementById("resetBtn");
function add() {
  countElement.value = (parseInt(countElement.value) + 1).toString();
}
function minus() {
  countElement.value = (parseInt(countElement.value) - 1).toString();
}
function reset() {
  countElement.value = "0";
}
plusBtn === null || plusBtn === void 0
  ? void 0
  : plusBtn.addEventListener("click", add);
minusBtn === null || minusBtn === void 0
  ? void 0
  : minusBtn.addEventListener("click", minus);
resetBtn === null || resetBtn === void 0
  ? void 0
  : resetBtn.addEventListener("click", reset);
