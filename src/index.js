import lottie from 'lottie-web';

window.addEventListener('load', event => {
  init();
});

const init = () => {
  lottie.loadAnimation({
    container: document.getElementById('lottie'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'hamburger-transition.json', // the path to the animation json
  });
};
