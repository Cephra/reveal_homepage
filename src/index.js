import('reveal.js/dist/reveal.css');
import('reveal.js/dist/theme/solarized.css');

import Reveal from 'reveal.js';

let deck = new Reveal({
  autoSlide: 3000,
  progress: false,
  controlsBackArrows: 'visible',
  loop: true,
});
deck.initialize();
