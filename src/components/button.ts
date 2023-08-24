export class Button {
  element: HTMLButtonElement;

  constructor(label: string) {
    this.element = document.createElement("button");
    this.element.innerText = label;
  }
}
