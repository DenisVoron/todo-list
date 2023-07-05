import * as basicLightbox from 'basiclightbox';
// const basicLightbox = require('basiclightbox')

const instance = basicLightbox.create(`
    <div class="modal">
        <form class="form-todo">
            <label class="form-label">
              <span class="form-text">Enter text</span>
              <input type="text" name="text" class="form-input" />
            </label>
            <button class="btn-form pointer" type="submit">Add Todo</button>
          </form>
    </div>`,
);

const refBtnOpenModal = document.querySelector('.btn-add');

refBtnOpenModal.addEventListener('click', () => instance.show());

export default instance;