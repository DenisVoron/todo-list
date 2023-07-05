const STORAGE_KEY = 'todo';

export const createTodo = newTodo => {
    const items = readTodos();
    items.unshift(newTodo);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};
export const readTodos = () => {
    let items = [];
    try {
        items = JSON.parse(localStorage.getItem(STORAGE_KEY));

    } catch (error) {
        console.log(error.message)
    }
    return items || [];
};
export const updateTodo = id => {
    let items = readTodos();

    items = items.map(item => item.id === id
        ? {
            ...item,
            isDone: !item.isDone
        }
        : item
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};
export const removeTodo = id => {
    let items = readTodos();

    items = items.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};