function appendValue(value) {
    let display = document.getElementById('display');
    display.value = display.value + value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = 'Error';
    }
  }
  
  function toggleTheme() {
    // Toggle light/dark theme
    document.body.classList.toggle('light-mode');
  }
  