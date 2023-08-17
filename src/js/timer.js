const templateTimer = time => {
    return `<fieldset class="widgets-fieldset">
              <legend>Timer</legend>
              <span class="js-timer-field">${time}</span>
              <button class="button success pointer js-btn-start">start</button>
              <button class="button danger pointer js-btn-stop">stop</button>
            </fieldset>`;
}


export default class Timer {
    constructor({ time, selector }) {
        this.date = Date.now();
        this.time = time;
        this.intervalId = 0;
        this.refs = {};

        this.refsTimer = document.querySelector(selector);
        this.refsTimer.insertAdjacentHTML('beforeend', templateTimer(this.time));

        this.refs.refsField = document.querySelector('.js-timer-field')

        this.refs.btnStart = document.querySelector('.js-btn-start');
        this.refs.btnStop = document.querySelector('.js-btn-stop');

        this.refs.btnStop.addEventListener('click', this.timerStop.bind(this));
        this.refs.btnStart.addEventListener('click', this.timerStart.bind(this));
    }

    render(time) {
        this.refs.refsField.textContent = time;
    }

    timerStart() {
        if (this.intervalId) {
            return
        }
        this.intervalId = setInterval(() => {
            this.time += 1;
            this.render(this.time);
        }, 1000);
    }

    timerStop() {
        clearInterval(this.intervalId);
    }

    convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
    }
}