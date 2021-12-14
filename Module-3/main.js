// DOM -> Document Object Model

// function clickAlert() {
//   alert("Hello World");
// }

const buttonTag = document.getElementById("button-id");
// const divTag = document.getElementById("div-id");
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");

buttonTag.onclick = function () {
  // divTag.innerHTML = "Lol! I've changed your value";
  var initialText = input1.value;
  input2.value = initialText;
  input1.value = "";
};

for (let i = 0; i < 2; ++i) {
  // ... operations
}

// ES => ECMAScript
// In 2015, => ES6

// let x = 1; // var x;
// let x;
// const z = 1;

// Arrow Function () => {}
// function abc() {

// }

// const abc = () => {

// }

// JavaScript => Functional language | Object Oriented Language
("use strict");

let x = 1;
console.log(x);
var x = 2;
console.log(x);
// hoisting
// closure | lexical scope
// event bubbling
