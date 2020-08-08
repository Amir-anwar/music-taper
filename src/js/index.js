window.onload = () => {
  const pads = document.querySelectorAll('.pads > div');
  const sounds = document.querySelectorAll('.pads > div audio');
  const visual = document.querySelector('.visual');
  const colors = [
    '#27ae60',
    '#3498db',
    '#e67e22',
    '#f1c40f',
    '#9b59b6',
    '#e74c3c',
  ];

  function createCircle(index) {
    const circle = document.createElement('div');
    visual.appendChild(circle);

    circle.classList.add('circle');
    circle.style.backgroundColor = colors[index];

    circle.addEventListener('animationend', () => {
      circle.remove();
    });
  }

  pads.forEach((pad, index) => {
    pad.addEventListener('click', () => {
      sounds[index].currentTime = '';
      sounds[index].play();
      createCircle(index);
    });
  });
};
