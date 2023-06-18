const counterTemplate = (count) =>
    `<fieldset class="widgets-fieldset widgets-counter">
        <legend>Counter</legend>
        <button class="button decrease pointer" type="button">-</button>
        <span class="js-field-counter">${count}</span>
        <button class="button increase pointer" type="button">+</button>
     </fieldset>`;

export default class Counter {
    constructor({ count, selector }) {
        this.refs = {};
        this.count = count;
        this.parent = document.querySelector(selector);
        this.parent.insertAdjacentHTML('beforeend', counterTemplate(this.count));

        this.refs.valueCount = this.parent.querySelector('.js-field-counter');
        this.refs.increaseBtn = this.parent.querySelector('.increase');
        this.refs.decreaseBtn = this.parent.querySelector('.decrease');

        this.refs.increaseBtn.addEventListener('click', this.increaseCount.bind(this));
        this.refs.decreaseBtn.addEventListener('click', this.decreaseCount.bind(this));
    }

    render() {
        this.refs.valueCount.textContent = this.count;
    }


    increaseCount() {
        this.count += 1;
        this.render();
    }

    decreaseCount() {
        this.count -= 1;
        this.render();
    }
}