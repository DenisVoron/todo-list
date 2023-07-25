import renderToDo from './todoList.js';
import { readTodos } from "../js/todosApi.js";


let filterValue;
let items = [];

const refs = {
    todoFilter: document.querySelector('.js-filter-input'),
    todoFilterSelector: document.querySelector('.js-filter-select'),
}

const onQueryInputFilter = (e) => {

    const queryValue = e.target.value;
    const todoFilter = items.filter(el => el.text.toLocaleLowerCase().includes(queryValue.toLocaleLowerCase()));

    renderToDo(todoFilter);

    filterValue = todoFilter;
};

const onFilterSelectorChange = (e) => {
    const sortByValue = e.target.value;
    const filterValueForSortBy = filterValue ? filterValue : items;

    switch (sortByValue) {
        case 'name-asc':
            const nameAscChange = [...filterValueForSortBy].sort((a, b) => a.text.localeCompare(b.text));
            renderToDo(nameAscChange);
            break;
        case 'name-desc':
            const nameDescChange = [...filterValueForSortBy].sort((a, b) => b.text.localeCompare(a.text));
            renderToDo(nameDescChange);
            break;
        case 'done-first':
            const doneFirstChange = [...filterValueForSortBy].sort((a, b) => b.isDone - a.isDone);
            renderToDo(doneFirstChange);
            break;
        case 'done-last':
            const doneLastChange = [...filterValueForSortBy].sort((a, b) => a.isDone - b.isDone);
            renderToDo(doneLastChange);
            break;
        case 'date-asc':
            console.log('date-asc')
            break;
        case 'date-desc':
            console.log('date-desc')
            break;
        default:
            renderToDo(items);
            break;
    }
}

readTodos()
    .then(data => items = data)
    .catch(console.log);

refs.todoFilter.addEventListener('input', onQueryInputFilter);
refs.todoFilterSelector.addEventListener('change', onFilterSelectorChange);