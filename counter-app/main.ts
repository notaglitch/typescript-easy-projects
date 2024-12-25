const countElement = document.getElementById("countValue") as HTMLInputElement;

const plusBtn = document.getElementById("plusBtn") as HTMLButtonElement;
const minusBtn = document.getElementById("minusBtn") as HTMLButtonElement;
const resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;

function add() {
  countElement.value = (parseInt(countElement.value) + 1).toString();
}
function minus() {
  countElement.value = (parseInt(countElement.value) - 1).toString();
}

function reset() {
  countElement.value = "0";
}

plusBtn?.addEventListener("click", add);
minusBtn?.addEventListener("click", minus);
resetBtn?.addEventListener("click", reset);
