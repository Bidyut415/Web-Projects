function appendValue(value) {
    //console.log(value);
    // this function add all string or all the charcter in the display box 
    document.getElementById('display').value += value;
  }
  
  /** this function make the display box clear */
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  /** here calculate all the equation or mathematical work  */
  function calculateResult() {
    const display = document.getElementById('display');
    try {
        /**
         * The eval() function evaluates 
         * JavaScript code represented as a string and returns its completion value
         *  */
      display.value = eval(display.value);
    } catch (e) {
      display.value = 'Error';
    }
  }
  