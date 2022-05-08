// Creating heading h1

const header = document.createElement('h1');
header.innerText = 'Virtual Keyboard';
document.body.appendChild(header);

// Creating textarea and keyboard container

const text = document.createElement('textarea');
text.placeholder = "OS Windows \nSwitch languages - Ctrl + Alt (left)";
document.body.appendChild(text);

const keyboard = document.createElement('div');
keyboard.classList.add('container');
document.body.appendChild(keyboard);

// Creating rows of keyboard

const row1 = document.createElement('div');
const row2 = document.createElement('div');
const row3 = document.createElement('div');
const row4 = document.createElement('div');
const row5 = document.createElement('div');

for (let i = 1; i <= 5; i++) {
  keyboard.append(eval(`row${i}`));
  eval(`row${i}`).classList.add('row');
  eval(`row${i}`).classList.add(`row${i}`);
}

// Creating buttons on row1

const btn1_symbols = ["`" , "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"]

for (let i = 1; i <= 14; i++) {
  const btn1 = document.createElement('span');
  btn1.classList.add('btn'); // setting class
  btn1.innerHTML = btn1_symbols[i - 1]
  const attr = document.createAttribute('data-symbol')
  attr.value = btn1_symbols[i-1] // setting attribute
  btn1.setAttributeNode(attr)
  row1.append(btn1);
}

// Creating buttons on row2

const btn2_symbols = ["Tab" , "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\","Del"]

for (let i = 1; i <= 15; i++) {
  const btn2 = document.createElement('span');
  btn2.classList.add('btn');
  btn2.innerHTML = btn2_symbols[i - 1]
  const attr = document.createAttribute('data-symbol')
  attr.value = btn2_symbols[i-1] // setting attribute
  btn2.setAttributeNode(attr)
  row2.append(btn2);
}

// Creating buttons on row3

const btn3_symbols = ["CapsLock" , "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"]

for (let i = 1; i <= 13; i++) {
  const btn3 = document.createElement('span');
  btn3.classList.add('btn');
  btn3.innerHTML = btn3_symbols[i - 1]
  const attr = document.createAttribute('data-symbol')
  attr.value = btn3_symbols[i-1] // setting attribute
  btn3.setAttributeNode(attr)
  row3.append(btn3);
}

// Creating buttons on row4

const btn4_symbols = ["Shift" , "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "\u2191", "Shift"]

for (let i = 1; i <= 13; i++) {
  const btn4 = document.createElement('span');
  btn4.classList.add('btn');
  btn4.innerHTML = btn4_symbols[i - 1]
  const attr = document.createAttribute('data-symbol')
  attr.value = btn4_symbols[i-1] // setting attribute
  btn4.setAttributeNode(attr)
  row4.append(btn4);
}

// Creating buttons on row5

const btn5_symbols = ["Ctrl" , "Win", "Alt", "whiteSpace", "Alt", "\u2190", "\u2193", "\u2192", "Ctrl"]

for (let i = 1; i <= 9; i++) {
  const btn5 = document.createElement('span');
  btn5.classList.add('btn');
  btn5.innerHTML = btn5_symbols[i - 1]
  const attr = document.createAttribute('data-symbol')
  attr.value = btn5_symbols[i-1] // setting attribute
  btn5.setAttributeNode(attr)
  row5.append(btn5);
}

// Changing Backround color and size of special buttons

const backspace = document.querySelector('[data-symbol="Backspace"]');
const capslock = document.querySelector('[data-symbol="CapsLock"]');
const enter = document.querySelector('[data-symbol="Enter"]');
const shift = document.querySelectorAll('[data-symbol="Shift"]');
const whiteSpace = document.querySelector('[data-symbol="whiteSpace"]');
const del = document.querySelector('[data-symbol="Del"]');
const tab = document.querySelector('[data-symbol="Tab"]');
const ctrl = document.querySelectorAll('[data-symbol="Ctrl"]');
const win = document.querySelector('[data-symbol="Win"]');
const alt = document.querySelectorAll('[data-symbol="Alt"]');
const arrUp = document.querySelector('[data-symbol="\u2191"]')
const arrLeft = document.querySelector('[data-symbol="\u2190"]')
const arrDown = document.querySelector('[data-symbol="\u2193"]')
const arrRight = document.querySelector('[data-symbol="\u2192"]')
backspace.classList.add('flex-basis')
capslock.classList.add('flex-basis')
enter.classList.add('flex-basis')
shift.forEach(el => el.classList.add('flex-basis'))
whiteSpace.classList.add('wide', 'white-space')
tab.classList.add('special-btn')
del.classList.add('special-btn')
ctrl.forEach(el => el.classList.add('special-btn'))
win.classList.add('special-btn')
alt.forEach(el => el.classList.add('special-btn'))
arrRight.classList.add('special-btn')
arrDown.classList.add('special-btn')
arrLeft.classList.add('special-btn')
arrUp.classList.add('special-btn')

// Texting


const btns = document.querySelectorAll('span')
btns.forEach( el => el.addEventListener('click', textSymbol = (event) => {
   event.target.classList.add('clicked')
   const clickTime = setTimeout(() => {
     event.target.classList.toggle('clicked')
   }, 300);
   const letter = event.target.dataset.symbol
   if(event.target.dataset.symbol === "Del" || event.target.dataset.symbol === "whiteSpace" 
   || event.target.dataset.symbol === "CapsLock" || event.target.dataset.symbol === "Tab" || event.target.dataset.symbol === "Alt" 
   || event.target.dataset.symbol === "Ctrl" || event.target.dataset.symbol === "Shift" || event.target.dataset.symbol === "Enter"
   || event.target.dataset.symbol === "Win" || event.target.dataset.symbol === "Backspace" ) {
     event.target.preventDefault();
     
   }
   text.value += letter
}))





