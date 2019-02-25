import './styles.scss';

import { tween, styler } from 'popmotion';

const vanilla = styler(window.document.getElementById('vanilla'));

tween({
  to: 300,
  duration: 500,
}).start((v) => {
  vanilla.set('x', v);
});
// https://popmotion.io/learn/get-started/


const button = document.getElementById('btn');
