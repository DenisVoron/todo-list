export default class Counter {
    constructor({ count }) {
        this.count = count;
    }

    getCount() {
        return this.count;
    }

    increaseCount() {
        this.count += 1;
    }

    decreaseCount() {
        this.count -= 1;
    }
}

