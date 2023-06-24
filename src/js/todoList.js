import { v4 as uuidv4 } from 'uuid';
import todoItemTemplate from "./todoItemTemplate.js";
import mockDate from './mockDate.js';
import instance from './modalAddTodo.js';

let items = mockDate;

const refForm = instance.element().querySelector('.form-todo');
const refs = {
    todoList: document.querySelector('.todo-list'),
    todoInput: document.querySelector('.form-input'),
    todoItem: document.querySelector('.todo-item'),
}

const renderToDo = (items) => {
    const list = items.map(todoItemTemplate).join('');

    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('afterbegin', list);
};

renderToDo(items);

const addItems = (text) => {
    const newTodo = {
        id: uuidv4(),
        text,
        isDone: false,
        date: Date.now()
    }

    items.unshift(newTodo);
    instance.close();
    renderToDo(items);
}

const onBtnAddTodoClick = e => {
    e.preventDefault();
    const { text } = e.currentTarget;
    addItems(text.value);
    text.value = '';
}

refForm.addEventListener('submit', onBtnAddTodoClick);

const deleteItemTodo = ({ id }) => {

    for (const item of items) {
        if (item.id === id) {
            const indxEl = items.indexOf(item);
            items.splice(indxEl, 1);
        }
    }

    renderToDo(items);
}

const updateItemTodo = ({ id }) => {
    items = items.map(item => item.id === id
        ? {
            ...item,
            isDone: !item.isDone
        }
        : item
    );
}

const onBtnDeleteClick = (e) => {
    const itemNode = e.target;
    const parent = itemNode.closest('li');

    switch (itemNode.nodeName) {
        case 'BUTTON':
            deleteItemTodo(parent.dataset);
            break;
        case 'INPUT':
            updateItemTodo(parent.dataset);
            break;
    }
}

refs.todoList.addEventListener('click', onBtnDeleteClick);

export default renderToDo;