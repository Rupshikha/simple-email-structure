import MyDirectory from "./MyDirectory.js";

export default class LeftContainer {
  #container;
  constructor(container) {
    if (!container || !(container instanceof HTMLElement)) {
      throw new Error("Container must be an HTML Element");
    }
    this.#container = container;
  }

  /**
   *
   * @param {String} text
   * @returns {MyDirectory}
   */
  addDirectory(text) {
    const directory = new MyDirectory(this.#container, 0);
    directory.addName(text);
    return directory;
  }
}
