import('reveal.js/dist/reveal.css');
import('reveal.js/dist/theme/solarized.css');

import Reveal from 'reveal.js';

let deck = new Reveal({
  autoSlide: 3000,
  progress: false,
  controlsBackArrows: 'visible',
  controls: false,
  keyboard: false,
  touch: false,
  pause: false,
  loop: true,
  autoSlideStoppable: false,
});
deck.initialize();
