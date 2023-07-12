import { v4 as uuidv4 } from 'uuid';
import flatpickr from "flatpickr";
import moment from 'moment';
import todoItemTemplate from "./template/todoItemTemplate.js";
import * as apiTodo from "./todosApi.js";
import { clearTextTodoImput } from "../js/todoForm.js";
import instance from './modalAddTodo.js';

//style import
import 'flatpickr/dist/flatpickr.min.css'

let items = apiTodo.readTodos();

const refForm = instance.element().querySelector('.form-todo');
const refInputDeadline = refForm.querySelector('.js-input-deadline');
const refs = {
    todoList: document.querySelector('.todo-list'),
    todoInput: document.querySelector('.form-input'),
    todoItem: document.querySelector('.todo-item'),
}

const renderToDo = () => {
    const list = items.map(todoItemTemplate).join('');

    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('afterbegin', list);
};

renderToDo();

const addItems = (text) => {
    const newTodo = {
        id: uuidv4(),
        text,
        isDone: false,
        date: Date.now(),
        deadline: moment(refInputDeadline.value).valueOf(),
    }

    apiTodo.createTodo(newTodo);
    items = apiTodo.readTodos();
    instance.close();
    clearTextTodoImput();
    renderToDo();

}

const onBtnAddTodoClick = e => {
    e.preventDefault();
    const { text } = e.currentTarget;
    addItems(text.value);
    text.value = '';
}

refForm.addEventListener('submit', onBtnAddTodoClick);

const deleteItemTodo = ({ id }) => {
    apiTodo.removeTodo(id);
    items = apiTodo.readTodos();
    renderToDo();
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

flatpickr(refInputDeadline);

refs.todoList.addEventListener('click', onBtnDeleteClick);

export default renderToDo;