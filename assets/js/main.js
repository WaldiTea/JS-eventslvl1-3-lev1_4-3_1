// -----lev1_4-----
console.log('%c-----lev1_4-----', 'color: lightgreen');
const eventParagraph = document.getElementById('eventParagraph');

eventParagraph.addEventListener('click', function() {
  console.log('Du hast auf den Event-Paragraphen geklickt.');
});


// -----lev1_5-----
const clickMe = document.getElementById('clickMe');

let anzahl = 0;

clickMe.addEventListener('click', () => {
  anzahl++;
  clickMe.innerHTML = `Click me: ${anzahl}`;
});


// -----lev1_6-----
const mySelect = document.getElementById('my-select');
const output = document.getElementById('option-selected');

mySelect.addEventListener('change', () => {
  output.innerHTML = `Sie haben ausgewählt: ${mySelect.value}`;
});


// -----lev2_1-----
const section = document.getElementsByTagName('section')[1];
const item = document.getElementsByTagName('li');

let colors = ['gray', 'white', 'blue', 'yellow'];

for(let i = 0; i < item.length; i++) {
  item[i].addEventListener('click', () => {
    section.style.backgroundColor = colors[i];

    if(section.style.backgroundColor === 'gray' || section.style.backgroundColor === 'blue') {
      section.style.color = 'white';
    } else {
      section.style.color = 'black';
    }
  });
}


// -----lev2_2-----
const printKeyCode = document.getElementById('print-keycode');
const key = document.getElementById('key');
const theKeyCode = document.getElementById('keycode');
const code = document.getElementById('code');

document.body.addEventListener('keydown', (e) => {
    key.innerHTML = e.key;
});

document.body.addEventListener('keydown', (e) => {
  theKeyCode.innerHTML = e.keyCode;
  printKeyCode.innerHTML = e.keyCode;
  console.log(e);
});

document.body.addEventListener('keydown', (e) => {
  code.innerHTML = e.code;
});


// -----lev3_1-----
const colorSection = document.getElementsByTagName('section')[3];
const red = document.getElementById('rot');
const green = document.getElementById('grun');
const blue = document.getElementById('blau');
const demo = document.getElementById('demo');

let count = 0;

changeBackground = (bgColor) => {
  colorSection.style.backgroundColor = bgColor;
  count++;
  demo.innerHTML = `Wir haben die Frabe mal ${count} geändert!`
}

changeHandle = () => {
  colorSection.style.backgroundColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')'

  demo.innerHTML = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')' + ' = ' + '#' + rgbToHex(red.value) + rgbToHex(green.value) + rgbToHex(blue.value);
}

let rgbToHex = (rgb) => { 
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};