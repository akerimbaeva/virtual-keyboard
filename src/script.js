let isRuLang = false;

// Creating heading h1

const header = document.createElement('h1');
header.innerText = 'Virtual Keyboard';
document.body.appendChild(header);

// Creating textarea and keyboard container

const text = document.createElement('textarea');
text.placeholder = "OS Windows \nSwitch languages - RU, EN keys";
text.id = "textarea"
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
const en = ['`', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
const ru = ['ё', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.']

for (let i = 1; i <= 5; i++) {
  keyboard.append(eval(`row${i}`));
  eval(`row${i}`).classList.add('row');
  eval(`row${i}`).classList.add(`row${i}`);
}

// Creating buttons on row1

const btn1_symbolsShift = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(" , ")"]

for (let i = 1; i <= 11; i++) {
  const btn11 = document.createElement('span');
  btn11.classList.add('btn', 'none'); // setting class
  btn11.innerHTML = btn1_symbolsShift[i - 1]
  const attr = document.createAttribute('data-symbol')
  attr.value = btn1_symbolsShift[i-1] // setting attribute
  btn11.setAttributeNode(attr)
  row1.append(btn11);
}

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

const btn4_symbols = ["Shift" , "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "\u2191", "SHIFT"]

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

const btn5_symbols = ["Ctrl" , "Win","RU", "Alt", "whiteSpace", "ALT", "\u2190", "\u2193", "\u2192", "CTRL"]

for (let i = 1; i <= 10; i++) {
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
const shift = document.querySelector('[data-symbol="Shift"]');
const shiftRight = document.querySelector('[data-symbol="SHIFT"]');
const whiteSpace = document.querySelector('[data-symbol="whiteSpace"]');
const del = document.querySelector('[data-symbol="Del"]');
const tab = document.querySelector('[data-symbol="Tab"]');
const ctrl = document.querySelector('[data-symbol="Ctrl"]');
const ctrlRight = document.querySelector('[data-symbol="CTRL"]');
const win = document.querySelector('[data-symbol="Win"]');
const alt = document.querySelector('[data-symbol="Alt"]');
const altRight = document.querySelector('[data-symbol="ALT"]');
const arrUp = document.querySelector('[data-symbol="\u2191"]')
const arrLeft = document.querySelector('[data-symbol="\u2190"]')
const arrDown = document.querySelector('[data-symbol="\u2193"]')
const arrRight = document.querySelector('[data-symbol="\u2192"]')
const RU = document.querySelector('[data-symbol="RU"]')
backspace.classList.add('flex-basis')
capslock.classList.add('flex-basis')
enter.classList.add('flex-basis')
shift.classList.add('flex-basis')
shiftRight.classList.add('flex-basis')
whiteSpace.classList.add('wide', 'white-space')
tab.classList.add('special-btn')
del.classList.add('special-btn')
ctrl.classList.add('special-btn')
ctrlRight.classList.add('special-btn')
win.classList.add('special-btn')
alt.classList.add('special-btn')
altRight.classList.add('special-btn')
arrRight.classList.add('special-btn')
arrDown.classList.add('special-btn')
arrLeft.classList.add('special-btn')
arrUp.classList.add('special-btn')
RU.classList.add('special-btn')


// Texting by clicking mouse on keyboard

const btns = document.querySelectorAll('span')

btns.forEach( el => el.addEventListener('click', textSymbol = (event) => {
  text.focus()
  const letter = event.target.innerText
  const start = document.querySelector('#textarea').selectionStart
  const end = document.querySelector('#textarea').selectionEnd
  const len  = text.value.length;


   event.target.classList.add('clicked')
   const clickTime = setTimeout(() => {
     event.target.classList.toggle('clicked')
   }, 300);
   

   // Texting on textarea

   if (!(event.target.dataset.symbol === "Del" || event.target.dataset.symbol === "whiteSpace" 
   || event.target.dataset.symbol === "CapsLock" || event.target.dataset.symbol === "Tab" || event.target.dataset.symbol === "Alt" 
   || event.target.dataset.symbol === "Ctrl" || event.target.dataset.symbol === "Shift" || event.target.dataset.symbol === "Enter"
   || event.target.dataset.symbol === "Win" || event.target.dataset.symbol === "Backspace" || event.target.dataset.symbol === "RU"
   || event.target.dataset.symbol === "EN" || event.target.dataset.symbol === "ALT" || event.target.dataset.symbol === "CTRL" || event.target.dataset.symbol === "SHIFT")) {
      
    text.value += letter
     
    // Backspace button

   } else if (event.target.dataset.symbol === "Backspace"){

      const textbefore = text.value.substring( 0, start );    
      const textafter = text.value.substring( end, len );   
      if (start == end) {
        text.value = text.value.substring(0, start-1 ) + text.value.substring(end, len );
        text.focus();
        text.selectionStart = start - 1;
        text.selectionEnd = start - 1;
      } else {
      text.value = textbefore + textafter ;
      text.focus();
      text.selectionStart = start;
      text.selectionEnd = start;
      }

  
    // Tab button

   } else if (event.target.dataset.symbol === "Tab") {
     text.setRangeText("\t", text.selectionStart, text.selectionEnd, "end")
     text.focus() 

     // Enter button

   } else if (event.target.dataset.symbol === "Enter") {
    text.setRangeText("\n", text.selectionStart, text.selectionEnd, "end")
    text.focus() 
   
    // Space

  } else if (event.target.dataset.symbol === "whiteSpace") {
    text.setRangeText(" ", text.selectionStart, text.selectionEnd, "end")
    text.focus() 
  
    // CapsLock

  } else if (event.target.dataset.symbol === "CapsLock") {
     capslock.classList.toggle('active')
     btns.forEach(el => {
       if(!(el.dataset.symbol === "Backspace" || el.dataset.symbol === "Tab" || el.dataset.symbol === "Shift" || 
       el.dataset.symbol === "Alt" || el.dataset.symbol === "whiteSpace" || el.dataset.symbol === "Del" || el.dataset.symbol === "Win" || 
       el.dataset.symbol === "Ctrl" || el.dataset.symbol === "Enter" || el.dataset.symbol === "CapsLock"))
       {
       el.classList.toggle('upperCase')
       }
    })
    
    // Shift buttons

  } else if (event.target.dataset.symbol === "Shift" || event.target.dataset.symbol === "SHIFT") {

    
    const btn1_symbolsShift = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(" , ")"]
    for (let i = 0; i <= 10; i++) {
      btns.forEach(el => {
        if(el.dataset.symbol === "`") {
          el.classList.toggle('none')
        }
        if( el.dataset.symbol === i.toString()) {
        el.classList.toggle('none')
        }
        if(el.dataset.symbol === btn1_symbolsShift[i]) {
          el.classList.toggle('none')
        }
     })
    }
    
    // Switching lang
  
  } else if ((event.target.dataset.symbol === "RU")) {
     localStorage.setItem('lang', 'ru') 
     RU.innerHTML = "EN"
     RU.dataset.symbol = "EN"
    btns.forEach(el => {
      for(let i = 0; i < en.length; i++) {
        if(el.dataset.symbol === en[i]) {
          el.dataset.symbol = ru[i]
          el.innerText = ru[i]   
      }  
      }  
   })
  } else if(event.target.dataset.symbol === "EN") {
    localStorage.clear()
    RU.innerHTML = "RU"
    RU.dataset.symbol = "RU"
    btns.forEach(el => {
      for(let i = 0; i < en.length; i++) {
        if(el.dataset.symbol === ru[i]) {
          el.dataset.symbol = en[i]
          el.innerText = en[i]
      }
      }
   })

   // Delete Button

   } else if (event.target.dataset.symbol === "Del") {
    if (textarea.selectionStart === textarea.selectionEnd) {
      text.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1)
      text.focus()
    } 
   }

}))
 
if ( localStorage.getItem('lang') === 'ru') {
  btns.forEach(el => {
    RU.innerHTML = "EN"
     RU.dataset.symbol = "EN"
    for(let i = 0; i < en.length; i++) {
      if(el.dataset.symbol === en[i]) {
        el.dataset.symbol = ru[i]
        el.innerText = ru[i]   
    }  
    }  
 })
}


// Texting by pressing keys 

document.onkeydown = function(event)  {
  console.log(event.code)
  text.focus()
  btns.forEach(el => {
    
// Highligthing virtual letter-keys when pressing real keyboard

    const keyCode = ["Backquote", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "bracketLeft", "bracketRight", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Backquote"]
    if(event.key === el.dataset.symbol) { //  when keys on virtual keyboard === keys on real keyboard (the same langs)
      el.classList.toggle('active')
      const PressKeyTime = setTimeout(() => {
        el.classList.toggle('active')
      }, 300)
     } 


    //  Highligthing virtual special-keys when pressing real keyboard

    const keys = [ "Ctrl", "Win", "Alt", "ALT", "\u2190", "\u2191", "\u2192", "\u2193", "CTRL", "SHIFT", "Shift", "whiteSpace"]
    const keyCodes = [ "ControlLeft", "MetaLeft", "AltLeft", "AltRight", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "ControlRight", "ShiftRight", "ShiftLeft", "Space"]
    for (let i = 0; i < keys.length; i++) {
      if (event.code === keyCodes[i] && el.dataset.symbol === keys[i]) {
        el.classList.toggle('active')
        const PressKeyTime = setTimeout(() => {
          el.classList.toggle('active')
        }, 300);
      }
    }    
 })
}


 






