const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Bonus: Keyboard support
document.addEventListener("keydown", (event) => {
  const allowedKeys = '0123456789+-*/.=EnterBackspaceDelete';
  if (!allowedKeys.includes(event.key)) return;

  if (event.key === 'Enter') {
    calculateResult();
  } else if (event.key === 'Backspace') {
    deleteLast();
  } else if (event.key === 'Delete') {
    clearDisplay();
  } else if (event.key === '=') {
    calculateResult();
  } else {
    appendValue(event.key);
  }
});