import Counter from './counter.js';
import Timer from "./timer.js";
console.log(Timer)


const newCounter = new Counter({ count: 0, selector: '.counter' });
// console.log(newCounter);

const newTimer = new Timer({ time: 0, selector: '.timer' });
// console.log(newTimer.refs.refsTimer)