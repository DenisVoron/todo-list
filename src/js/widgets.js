import Counter from './counter.js';

const newCounter = new Counter({ count: 0 });

const ref = {
    btnIncreaseCount: document.querySelector('.js-btn-counter__increase'),
    btnDecreaseCount: document.querySelector('.js-btn-counter__decrease'),
    counterNumericField: document.querySelector('.js-number-field-counter'),
}

function updateFieldCount() {
    ref.counterNumericField.textContent = newCounter.getCount();
}

function onBtnClickIncreaseCount() {
    newCounter.increaseCount();
    updateFieldCount();
}

ref.btnIncreaseCount.addEventListener('click', onBtnClickIncreaseCount);

function onBtnClickDecreaseCount() {
    newCounter.decreaseCount();
    updateFieldCount();
}

ref.btnDecreaseCount.addEventListener('click', onBtnClickDecreaseCount);