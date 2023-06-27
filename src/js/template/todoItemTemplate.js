const todoItemTemplate = ({ id, text, isDone, date }) => `
        <li class="todo-item" data-id="${id}">
          <input class="todo-input" type="checkbox" name="todo-done" ${isDone ? 'checked' : ''}/>
          <div class="todo-text-wrapper">
          <p class="todo-deskr">${text}</p>
          <p class="todo-timer">${new Date(date)}</p>
          </div>
          <button class="button-delete" type="button" data-action="delete">X</button>
        </li>
        `;

export default todoItemTemplate;