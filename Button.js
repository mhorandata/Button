// Button.js

let storedText = '';

function storeText() {
  const input = document.getElementById('textInput');
  storedText = input.value;
  input.value = ''; // Clear the input field
}

function copyText() {
  if (storedText) {
    const textarea = document.createElement('textarea');
    textarea.value = storedText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showAlert('Copied to clipboard!', 'success');
  } else {
    showAlert('No value stored!', 'error');
  }
}

function showAlert(message, type) {
  const alert = document.createElement('div');
  alert.textContent = message;
  alert.className = `alert alert-${type}`;
  document.body.appendChild(alert);
  setTimeout(() => {
    document.body.removeChild(alert);
  }, 2000);
}
