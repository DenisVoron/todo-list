const moment = require('moment');
const DATE_FORMAT = 'DD/MM/YYYY HH:mm:ss';

const todoItemTemplate = ({ id, text, isDone, date, deadline }) => {
  const createdAt = moment(date).format(DATE_FORMAT);
  const endDate = deadline ? moment(deadline).format('DD/MM/YYYY') : '--';

  return `<li class="todo-item" data-id="${id}">
           <input class="todo-input" type="checkbox" name="todo-done" ${isDone ? 'checked' : ''}/>
            <div class="todo-text-wrapper">
              <p class="todo-deskr">${text}</p>
              <p class="todo-timer">created:  ${createdAt}</p>
              <p class="todo-timer">deadline: ${endDate}</p>
            </div>
           <button class="button-delete pointer" type="button" data-action="delete">X</button>
        </li>`
};

export default todoItemTemplate;





//============================ default format date
// function formatDate(date) {
//   const year = createdAt.getFullYear();
//   const month = (createdAt.getMonth() + 1).toString().padStart(2, 0);
//   const day = createdAt.getDate().toString().padStart(2, 0);
//   const hours = createdAt.getHours();
//   const minuts = createdAt.getMinutes();
//   const seconds = createdAt.getSeconds();

//   return `${year}/${month}/${day}/ ${hours}:${minuts}:${seconds}`;
// }