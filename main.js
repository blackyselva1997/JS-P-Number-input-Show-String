let number = Number(prompt("Enter a number"));
let resu = 0;
const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
let a = [];

while (number > 0) {
    let calc = Math.floor(number % 10);
    number = (number - calc) / 10;
    resu = (resu * 10) + calc;
    a.push(words[calc]);
}

let result = a.join(" ");
document.write(result);