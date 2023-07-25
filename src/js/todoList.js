import flatpickr from "flatpickr";
import moment from 'moment';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
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

// const showLoader = () => {
//     refs.loader.classList.add('show');
// }

// const hideLoader = () => {
//     refs.loader.classList.remove('show');
// }


const renderToDo = arrData => {
    console.log(arrData)
    const list = arrData.map(todoItemTemplate).join('');

    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('afterbegin', list);
};

const addItems = (text) => {
    const newTodo = {
        text,
        isDone: false,
        date: Date.now(),
        deadline: moment(refInputDeadline.value).valueOf(),
    }

    apiTodo.createTodo(newTodo)
        .then(() => updateRenderItems())
        .catch(console.log);

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
    apiTodo.removeTodo(id)
        .then(() => updateRenderItems())
        .catch(console.log);
}

const updateItemTodo = ({ id }) => {
    const idx = items.findIndex(item => item.id === id);
    items[idx].isDone = !items[idx].isDone

    apiTodo.updateTodo(id, { isDone: items[idx].isDone });
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
    // showLoader();
    Loading.standard({ svgColor: '#2196f3' });
    apiTodo.readTodos().then(data => {
        items = data;
        renderToDo(data);

    }).catch(console.log)
        .finally(() => Loading.remove());
};

updateRenderItems();

flatpickr(refInputDeadline);

refForm.addEventListener('submit', onBtnAddTodoClick);
refs.todoList.addEventListener('click', onBtnDeleteClick);

export default renderToDo;