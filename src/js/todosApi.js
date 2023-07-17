const STORAGE_KEY = 'todo';

export const createTodo = newTodo => {

    readTodos().then(items => {
        items.unshift(newTodo);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    })
};
// export const readTodos = () => {
//     let items = [];
//     try {
//         items = JSON.parse(localStorage.getItem(STORAGE_KEY));

//     } catch (error) {
//         console.log(error.message)
//     }
//     // return Promise.resolve(items || []);
//     return items || [];
// };

export const readTodos = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let items = [];
            try {
                items = JSON.parse(localStorage.getItem(STORAGE_KEY));

            } catch (error) {
                console.log(error.message)
            }
            resolve(items || []);
        }, 500);
    })



export const updateTodo = id => {

    readTodos().then(items => {
        items = items.map(item => item.id === id
            ? {
                ...item,
                isDone: !item.isDone
            }
            : item
        );
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    })
};
export const removeTodo = id => {

    readTodos().then(items => {
        items = items.filter(item => item.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    })
};