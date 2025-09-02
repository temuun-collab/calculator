const container = document.createElement("div");
container.classList.add("container");

const container2 = document.createElement("div");
container2.classList.add("container2");
container.appendChild(container2);

const display = document.createElement("input");
display.classList.add("display");
container.appendChild(display);

const container1 = document.createElement("div");
container1.classList.add("container1");
container.appendChild(container1);

const button = document.createElement("button");
button.innerText = "/";
button.classList.add("button1");
container1.appendChild(button);

button.onclick = ClickButton9;

const button1 = document.createElement("button");
button1.innerText = "AC";
button1.classList.add("button2");
container1.appendChild(button1);

button1.onclick = ClickButton14;

const button2 = document.createElement("button");
button2.innerText = "%";
button2.classList.add("button2");
container1.appendChild(button2);

button2.onclick = ClickButton15;

const button3 = document.createElement("button");
button3.innerText = "<-";
button3.classList.add("button2");
container1.appendChild(button3);

button3.onclick = ClickButton16;

const button4 = document.createElement("button");
button4.innerText = "*";
button4.classList.add("button1");
container1.appendChild(button4);

button4.onclick = ClickButton10;

const button5 = document.createElement("button");
button5.innerText = "7";
button5.classList.add("button");
container1.appendChild(button5);

button5.onclick = ClickButton6;

const button6 = document.createElement("button");
button6.innerText = "8";
button6.classList.add("button");
container1.appendChild(button6);

button6.onclick = ClickButton7;

const button7 = document.createElement("button");
button7.innerText = "9";
button7.classList.add("button");
container1.appendChild(button7);

button7.onclick = ClickButton8;

const button8 = document.createElement("button");
button8.innerText = "-";
button8.classList.add("button1");
container1.appendChild(button8);

button8.onclick = ClickButton11;

const button9 = document.createElement("button");
button9.innerText = "4";
button9.classList.add("button");
container1.appendChild(button9);

button9.onclick = ClickButton3;

const button10 = document.createElement("button");
button10.innerText = "5";
button10.classList.add("button");
container1.appendChild(button10);

button10.onclick = ClickButton4;

const button11 = document.createElement("button");
button11.innerText = "6";
button11.classList.add("button");
container1.appendChild(button11);

button11.onclick = ClickButton5;

const button12 = document.createElement("button");
button12.innerText = "+";
button12.classList.add("button1");
container1.appendChild(button12);

button12.onclick = ClickButton12;

const button13 = document.createElement("button");
button13.innerText = "1";
button13.classList.add("button");
container1.appendChild(button13);

button13.onclick = ClickButton;

const button14 = document.createElement("button");
button14.innerText = "2";
button14.classList.add("button");
container1.appendChild(button14);

button14.onclick = ClickButton1;

const button15 = document.createElement("button");
button15.innerText = "3";
button15.classList.add("button");
container1.appendChild(button15);

button15.onclick = ClickButton2;

const button16 = document.createElement("button");
button16.innerText = "=";
button16.classList.add("button1");
container1.appendChild(button16);

button16.onclick = ClickButton13;

const button17 = document.createElement("button");
button17.innerText = ".";
button17.classList.add("button");
container1.appendChild(button17);

button17.onclick = ClickButton17;

const button18 = document.createElement("button");
button18.innerText = "0";
button18.classList.add("button");
container1.appendChild(button18);

button18.onclick = ClickButton18;

const button19 = document.createElement("button");
button19.innerText = "+/-";
button19.classList.add("button");
container1.appendChild(button19);

button19.onclick = ClickButton19;

function ClickButton() {
  display.value += "1";
}
function ClickButton1() {
  display.value += "2";
}
function ClickButton2() {
  display.value += "3";
}
function ClickButton3() {
  display.value += "4";
}
function ClickButton4() {
  display.value += "5";
}
function ClickButton5() {
  display.value += "6";
}
function ClickButton6() {
  display.value += "7";
}
function ClickButton7() {
  display.value += "8";
}
function ClickButton8() {
  display.value += "9";
}

function ClickButton9() {
  display.value += "/";
}

function ClickButton10() {
  display.value += "*";
}

function ClickButton11() {
  display.value += "-";
}

function ClickButton12() {
  display.value += "+";
}

function ClickButton13() {
  display.value += "=";
}

function ClickButton14() {
  display.value += "";
}

function ClickButton15() {
  display.value += "%";
}

function ClickButton16() {
  display.value += display.value.slice(0, -1);
}

function ClickButton17() {
  display.value += ".";
}

function ClickButton18() {
  display.value += "0";
}

function ClickButton19() {
  display.value += "-";
}
document.body.appendChild(container);
