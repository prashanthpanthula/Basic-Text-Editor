const textarea = document.getElementById('textarea');
const boldBtn = document.getElementById('boldBtn');
const italicBtn = document.getElementById('italicBtn');
const underlineBtn = document.getElementById('underlineBtn');
const uppercaseBtn = document.getElementById('uppercaseBtn');
const lowercaseBtn = document.getElementById('lowercaseBtn');
const leftAlignBtn = document.getElementById('leftAlignBtn');
const centerAlignBtn = document.getElementById('centerAlignBtn');
const rightAlignBtn = document.getElementById('rightAlignBtn');
const downloadBtn = document.getElementById('downloadBtn');

// Formatting buttons (similar to your previous code)
boldBtn.addEventListener('click', () => {
  document.execCommand('bold', false, null);
  textarea.focus();
});

italicBtn.addEventListener('click', () => {
  document.execCommand('italic', false, null);
  textarea.focus();
});

underlineBtn.addEventListener('click', () => {
  document.execCommand('underline', false, null);
  textarea.focus();
});

// Load saved text from localStorage when the page loads
window.addEventListener('load', () => {
  const savedText = localStorage.getItem('savedText');
  if (savedText) {
    textarea.value = savedText;
  }
});

// Save text to localStorage when the Save button is clicked
// ... (your existing code for saving text)

// View saved text when the View button is clicked
// ... (your existing code for viewing saved text)

// Uppercase button
uppercaseBtn.addEventListener('click', () => {
  textarea.value = textarea.value.toUpperCase();
  textarea.focus();
});

// Lowercase button
lowercaseBtn.addEventListener('click', () => {
  textarea.value = textarea.value.toLowerCase();
  textarea.focus();
});

// Text alignment buttons
leftAlignBtn.addEventListener('click', () => {
  textarea.style.textAlign = 'left';
  textarea.focus();
});

centerAlignBtn.addEventListener('click', () => {
  textarea.style.textAlign = 'center';
  textarea.focus();
});

rightAlignBtn.addEventListener('click', () => {
  textarea.style.textAlign = 'right';
  textarea.focus();
});

// Download button
downloadBtn.addEventListener('click', () => {
  const textToDownload = textarea.value;
  const blob = new Blob([textToDownload], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'text.txt';
  a.click();
  URL.revokeObjectURL(url);
});
