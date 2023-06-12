import todoItemTemplate from "./js/todoItemTemplate.js";
import items from './js/mockDate.js';

// const items = mockDate;

const refs = {
    todoList: document.querySelector('.todo-list'),
}

const renderToDo = (items) => {
    const list = items.map(todoItemTemplate).join('');

    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('afterbegin', list);
    // return items.map(todoItemTemplate).join('');
};

renderToDo(items);