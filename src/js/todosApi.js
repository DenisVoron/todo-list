import axios from 'axios';
axios.defaults.baseURL = 'https://637d094a16c1b892ebc62efc.mockapi.io';


//================AXIOS ===================
export const createTodo = newTodo => axios.post('/todos', newTodo);

export const readTodos = () => axios.get('/todos').then(({ data }) => data);

export const updateTodo = (id, payload) => axios.put(`/todos/${id}`, payload);

export const removeTodo = id => axios.delete(`/todos/${id}`);








//=====================FETCH ====================
// const URL = 'https://637d094a16c1b892ebc62efc.mockapi.io/todos';
// export const createTodo = newTodo => {
//     return fetch(URL, {
//         method: 'POST',
//         headers: { 'content-type': 'application/json' },
//         body: JSON.stringify(newTodo)
//     }).then(res => res.json());
// };

// export const readTodos = () => fetch(URL).then(res => res.json());

// export const updateTodo = (id, payload) => {
//     return fetch(`${URL}/${id}`, {
//         method: 'PUT',
//         headers: { 'content-type': 'application/json' },
//         body: JSON.stringify(payload)
//     }).then(res => res.json());
// };

// export const removeTodo = id => fetch(`${URL}/${id}`, { method: 'DELETE', }).then(res => res.json());