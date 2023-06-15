import todoItemTemplate from "./todoItemTemplate.js";
import items from './mockDate.js';

// const items = mockDate;

const refs = {
    todoList: document.querySelector('.todo-list'),
    todoInput: document.querySelector('.form-input'),
    todoAddBtn: document.querySelector('.btn-form'),
}

console.log(refs.todoInput);
const renderToDo = (items) => {
    const list = items.map(todoItemTemplate).join('');

    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('afterbegin', list);
    // return items.map(todoItemTemplate).join('');
};

renderToDo(items);

const onBtnAddTodoClick = e => {
    e.preventDefault();

    const newTodo = {
        id: '10',
        text: 'loren',
        isDone: false,
    }
    // console.log('asddsdadd');

    // items.push(newTodo);

    // renderToDo(items);
}

refs.todoAddBtn.addEventListener('submit', onBtnAddTodoClick)
