// Get elements
const button = document.getElementById('click-me');
const inputField = document.getElementById('input-field');
const mouseOverDiv = document.getElementById('mouse-over-me');
const selectMe = document.getElementById('select-me');

// Mouse events
button.addEventListener('click', function() {
  alert('Button clicked!');
});

button.addEventListener('dblclick', function() {
  alert('Button double-clicked!');
});

button.addEventListener('mousedown', function() {
  console.log('Button mouse down!');
});

button.addEventListener('mouseup', function() {
  console.log('Button mouse up!');
});

mouseOverDiv.addEventListener('mouseover', function() {
  console.log('Mouse over div!');
});

mouseOverDiv.addEventListener('mouseout', function() {
  console.log('Mouse out of div!');
});

mouseOverDiv.addEventListener('mousemove', function() {
  console.log('Mouse moving over div!');
});

// Keyboard events
document.addEventListener('keydown', function(event) {
  console.log('Key down:', event.key);
});

document.addEventListener('keyup', function(event) {
  console.log('Key up:', event.key);
});

// Form events
inputField.addEventListener('input', function() {
  console.log('Input field changed:', inputField.value);
});

inputField.addEventListener('focus', function() {
  console.log('Input field focused!');
});

inputField.addEventListener('blur', function() {
  console.log('Input field blurred!');
});

selectMe.addEventListener('change', function() {
  console.log('Select changed:', selectMe.value);
});

// Window/Document events
window.addEventListener('load', function() {
  console.log('Window loaded!');
});

window.addEventListener('unload', function() {
  console.log('Window unloading!');
});

window.addEventListener('resize', function() {
  console.log('Window resized!');
});

window.addEventListener('scroll', function() {
  console.log('Window scrolled!');
});

window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
  console.log('Window about to unload!');
  return 'Are you sure you want to leave?';
});