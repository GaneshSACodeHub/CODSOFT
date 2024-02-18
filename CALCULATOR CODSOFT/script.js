const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (bnValue) => {
  display.focus();
  if (bnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (bnValue === "AC") {
    output = "";
  } else if (bnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(bnValue)) return;
    output += bnValue;
  }
  display.value = output;
};
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});