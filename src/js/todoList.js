import todoItemTemplate from "./todoItemTemplate.js";
import items from './mockDate.js';

// const items = mockDate;

const refs = {
    formTodo: document.querySelector('.form-todo'),
    todoList: document.querySelector('.todo-list'),
    todoInput: document.querySelector('.form-input'),
    todoDeleteBtn: document.querySelector('.todo-list'),
}


const renderToDo = (items) => {
    const list = items.map(todoItemTemplate).join('');

    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('afterbegin', list);
};

renderToDo(items);

const addItems = (text) => {

    const newTodo = {
        id: '10',
        text,
        isDone: false,
    }

    items.unshift(newTodo);

    renderToDo(items);
}

const onBtnAddTodoClick = e => {
    e.preventDefault();
    const { text } = e.currentTarget;
    addItems(text.value);
    text.value = '';
}

refs.formTodo.addEventListener('submit', onBtnAddTodoClick);

export default renderToDo;


