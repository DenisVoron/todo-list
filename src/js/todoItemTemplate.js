const todoItemTemplate = ({ id, text, isDone }) => `
        <li class="todo-item" data-id="${id}">
          <input class="todo-input" type="checkbox" name="todo-done" ${isDone ? 'checked' : ''}/>
          <p class="todo-deskr">${text}</p>
          <button class="button-delete" type="">X</button>
        </li>
        `;

export default todoItemTemplate;