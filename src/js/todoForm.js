import instance from './modalAddTodo.js';
const refFormImput = instance.element().querySelector('.form-input');

const TEXTINPUT_KEY = 'input-text';

const saveTextTodoImput = textValue => {
    if (!textValue) {
        return;
    }

    localStorage.setItem(TEXTINPUT_KEY, textValue);
}

const loadTextTodoImput = () => {
    try {
        return localStorage.getItem(TEXTINPUT_KEY);
    } catch (error) {
        console.log(error)
    }
}

export const clearTextTodoImput = () => {
    localStorage.removeItem(TEXTINPUT_KEY);
}

refFormImput.value = loadTextTodoImput() || '';

refFormImput.addEventListener('input', (e) => {
    saveTextTodoImput(e.target.value);
});