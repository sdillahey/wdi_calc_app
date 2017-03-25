console.log('WDI Calc script loaded!');

/*--- variables ---*/

var input, op, result, firstNum; //declares variables
var displayEl = document.getElementById('display');


/*--- event listeners ---*/

document.querySelector('table')
  .addEventListener('click', handleClick);

/*--- functions ---*/

function initialize () {
  input = '';
  op = result = firstNum = null;
}

function updateDisplay () {
  if (result){
      displayEl.textContent = result;
      initialize(); // programmed so you can't carry on computations with the result
  } else displayEl.textContent = input ? input : '0'; // displays the current input or if cleared, 0
}

function setOp(opFunc) {
  if (!input) return;
  firstNum = parseFloat(input);
  op = opFunc; // saves the function of the operator clicked
  input='';
}

function handleClick(evt) {
  console.log(evt.target.textContent);
  if (evt.target.id ==='display') return;
  var buttonText = evt.target.textContent
  switch (buttonText) {   // TARGET is the DOM element to see where the event happened
    case 'AC':
      initialize();
      updateDisplay();
      break;
    case 'C':
      input = '';

      break;
    case '±':

      break;
    case '÷':
      setOp(div);
      break;
    case '×':
      setOp(mult);
      break;
    case '-':

      break;
    case '+':
      setOp(add);
      break;
    case '.':
      input += input.includes('.')? '' : '.';
      break;
    case '=':
      if (firstNum && op && input) {
        result = op(firstNum, parseFloat(input));
        input = '';
      }

      break;
    default:
      console.log('digit clicked');
      input+=buttonText;


  }
  updateDisplay();
}

initialize (); //calls the initialized variables

/* --- operator functions ---*/

function add (n1, n2) {
  return n1 + n2;

}function div (n1, n2) {
  return n1 / n2;

}function mult (n1, n2) {
  return n1 * n2;

}function sub (n1, n2) {
  return n1 - n2;
}

