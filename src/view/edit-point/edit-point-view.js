import { createElement } from '../../render.js';


const createEditPointTemplate = () => '<form class="event event--edit" action="#" method="post"></form>';


export default class EditPointView {
  getTemplate() {
    return createEditPointTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
