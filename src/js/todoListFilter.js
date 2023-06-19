import items from './mockDate.js';
import renderToDo from './todoList.js';

const refs = {
    todoFilter: document.querySelector('.js-filter-input'),
    todoFilterSelector: document.querySelector('.js-filter-select'),
}

let filterValue;

const onQueryInputFilter = (e) => {

    const queryValue = e.target.value;

    const todoFilter = items.filter(el => el.text.toLocaleLowerCase().includes(queryValue.toLocaleLowerCase()));

    renderToDo(todoFilter);

    filterValue = todoFilter;
};

refs.todoFilter.addEventListener('input', onQueryInputFilter);


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

refs.todoFilterSelector.addEventListener('change', onFilterSelectorChange);