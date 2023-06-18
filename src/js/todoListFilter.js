import items from './mockDate.js';
import renderToDo from './todoList.js';

const refs = {
    todoFilter: document.querySelector('.js-filter-input'),
    todoList: document.querySelector('.todo-list'),
}

const onQueryInputFilter = (e) => {

    const queryValue = e.target.value;

    const todoFilter = items.filter(el => el.text.toLocaleLowerCase().includes(queryValue.toLocaleLowerCase()));

    renderToDo(todoFilter);
};

refs.todoFilter.addEventListener('input', onQueryInputFilter);