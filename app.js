// https://www.omnicalculator.com/conversion/square-feet-to-acres-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const acresRadio = document.getElementById('acresRadio');
const squareFeetRadio = document.getElementById('squareFeetRadio');

let acres;
let squareFeet = v; 

// labels of the inpust
const variable = document.getElementById('variable');

acresRadio.addEventListener('click', function() {
  variable.textContent = 'Square Feet';
  squareFeet = v;
  result.textContent = '';
});

squareFeetRadio.addEventListener('click', function() {
  variable.textContent = 'Acres';
  acres = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(acresRadio.checked)
    result.textContent = `Acres = ${computeacres().toFixed(5)}`;

  else if(squareFeetRadio.checked)
    result.textContent = `Square Feet = ${computesquareFeet().toFixed(5)}`;
})

// calculation

function computeacres() {
  return Number(squareFeet.value) / 43560;
}

function computesquareFeet() {
  return Number(acres.value) * 43560;
}