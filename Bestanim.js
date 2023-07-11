// Add interactivity to the animation
const box = document.querySelector('.box');

box.addEventListener('mouseenter', () => {
  box.style.backgroundColor = '#ff6699';
});

box.addEventListener('mouseleave', () => {
  box.style.backgroundColor = '#ffcc00';
});
