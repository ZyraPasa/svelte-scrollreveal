import SR from "scrollreveal";

export class ScrollReaval {
  options: scrollReveal.ScrollRevealObjectOptions = {};
  constructor(element: HTMLElement, options: scrollReveal.ScrollRevealObjectOptions = {}) {
    this.options = options;
    SR(this.options).reveal(element);
  }
}
