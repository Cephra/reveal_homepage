import('reveal.js/dist/reveal.css');
import('reveal.js/dist/theme/solarized.css');

import './css/main.css';
import './css/custom.css';

import Reveal from 'reveal.js';

let reveal = new Reveal({
  autoSlide: 1000,
  autoSlideStoppable: false,
  loop: true,
  progress: false,
  controls: false,
  keyboard: false,
  touch: false,
  pause: false,
});
reveal.initialize();
