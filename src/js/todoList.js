import { v4 as uuidv4 } from 'uuid';
import flatpickr from "flatpickr";
import moment from 'moment';
import todoItemTemplate from "./template/todoItemTemplate.js";
import * as apiTodo from "./todosApi.js";
import { clearTextTodoImput } from "../js/todoForm.js";
import instance from './modalAddTodo.js';

//style import
import 'flatpickr/dist/flatpickr.min.css'

let items = [];

const refForm = instance.element().querySelector('.form-todo');
const refInputDeadline = refForm.querySelector('.js-input-deadline');
const refs = {
    todoList: document.querySelector('.todo-list'),
    todoInput: document.querySelector('.form-input'),
    todoItem: document.querySelector('.todo-item'),
    loader: document.querySelector('.js-loader'),
}

const showLoader = () => {
    refs.loader.classList.add('show');
}

const hideLoader = () => {
    refs.loader.classList.remove('show');
}

const renderToDo = () => {
    const list = items.map(todoItemTemplate).join('');

    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('afterbegin', list);
};

const addItems = (text) => {
    const newTodo = {
        id: uuidv4(),
        text,
        isDone: false,
        date: Date.now(),
        deadline: moment(refInputDeadline.value).valueOf(),
    }

    apiTodo.createTodo(newTodo);

    updateRenderItems();
    instance.close();
    clearTextTodoImput();
}

const onBtnAddTodoClick = e => {
    e.preventDefault();
    const { text } = e.currentTarget;
    addItems(text.value);
    text.value = '';
}

const deleteItemTodo = ({ id }) => {
    apiTodo.removeTodo(id);
    updateRenderItems();
}

const updateItemTodo = ({ id }) => {
    apiTodo.updateTodo(id);
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


function updateRenderItems() {
    showLoader();
    apiTodo.readTodos().then(data => {
        items = data;
    }).then(renderToDo).finally(() => hideLoader());
}
updateRenderItems();

flatpickr(refInputDeadline);

refForm.addEventListener('submit', onBtnAddTodoClick);
refs.todoList.addEventListener('click', onBtnDeleteClick);

export default renderToDo;