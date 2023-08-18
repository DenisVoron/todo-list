const templateTimer = time => {
    return `<fieldset class="widgets-fieldset">
              <legend>Timer</legend>
              <span class="timer-field js-timer-field">${time}</span>
              <button class="button timer success pointer js-btn-start">start</button>
              <button class="button timer danger pointer js-btn-stop">stop</button>
              <button class="button timer pointer js-btn-clear">clear</button>
            </fieldset>`;
}

export default class Timer {
    constructor({ time, selector }) {
        this.time = 0;
        this.startTime = time;
        this.elapsedTime = 0;
        this.currentTime = 0;
        this.hrs = 0;
        this.mins = 0;
        this.secs = 0;

        this.intervalId;
        this.refs = {};

        this.refsTimer = document.querySelector(selector);
        this.refsTimer.insertAdjacentHTML('beforeend', templateTimer(this.time));

        this.refs.refsField = document.querySelector('.js-timer-field')

        this.refs.btnStart = document.querySelector('.js-btn-start');
        this.refs.btnStop = document.querySelector('.js-btn-stop');
        this.refs.btnClear = document.querySelector('.js-btn-clear');

        this.refs.btnStart.addEventListener('click', this.timerStart.bind(this));
        this.refs.btnStop.addEventListener('click', this.timerStop.bind(this));
        this.refs.btnClear.addEventListener('click', this.timeClear.bind(this))
    }

    render(time) {
        this.refs.refsField.textContent = time;
    }

    timerStart() {
        if (this.intervalId) {
            return
        }

        this.startTime = Date.now() - this.elapsedTime;

        this.intervalId = setInterval(this.updateTime.bind(this), 75);
    }

    timerStop() {
        clearInterval(this.intervalId);
        this.intervalId = 0;
    }

    timeClear() {
        this.refs.refsField.textContent = `00:00:00`;

        clearInterval(this.intervalId);
        this.intervalId = 0;

        this.startTime = 0;
        this.elapsedTime = 0;
        this.currentTime = 0;
    }

    updateTime() {
        this.elapsedTime = Date.now() - this.startTime;

        this.secs = Math.floor((this.elapsedTime / 1000) % 60);
        this.mins = Math.floor((this.elapsedTime / (1000 * 60)) % 60);
        this.hrs = Math.floor((this.elapsedTime / (1000 * 60 * 60)) % 60);

        this.secs = this.pad(this.secs);
        this.mins = this.pad(this.mins);
        this.hrs = this.pad(this.hrs);

        this.time = `${this.hrs}:${this.mins}:${this.secs}`;
        this.render(this.time)

    }

    pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}