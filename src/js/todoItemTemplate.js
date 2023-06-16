const todoItemTemplate = ({ id, text, isDone }) => `
        <li class="todo-item" data-id="${id}">
          <input class="todo-input" type="checkbox" name="todo-done" ${isDone ? 'checked' : ''}/>
          <div class="todo-text-wrapper">
          <p class="todo-deskr">${text}
          </p>
          <p class="todo-timer">2023-06-15 02:02:02</p>
          </div>
          <button class="button-delete" type="button" data-action="delete">X</button>
        </li>
        `;

export default todoItemTemplate;