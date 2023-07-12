import moment from 'moment';

const refClock = document.querySelector('.js-clock');

const clockInitialization = () => {

    setInterval(() => {
        const timeMoment = moment().format();
        refClock.textContent = timeMoment;
    }, 1000);
}

clockInitialization();