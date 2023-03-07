import MyFile from "./MyFile.js";

export default class MyDirectory {
  #parent;
  #level;
  #directoryDiv;

  constructor(parent, level) {
    this.#parent = parent;
    this.#level = level;

    this.#directoryDiv = document.createElement("details");
    this.#directoryDiv.classList.add("directory");
    this.#directoryDiv.style.setProperty("--level", this.#level);
    this.#parent.appendChild(this.#directoryDiv);
  }

  /**
   *
   * @param {String} text
   */
  addName(text) {
    const summary = document.createElement("summary");
    summary.innerText = text;
    this.#directoryDiv.appendChild(summary);
  }

  /**
   *
   * @param {String} text
   * @returns {MyDirectory} directory
   */
  addDirectory(text) {
    const directory = new MyDirectory(this.#directoryDiv, this.#level + 1);
    directory.addName(text);
    return directory;
  }

  /**
   *
   * @param {String} text
   * @returns {MyFile} file
   */
  addFile(text) {
    const file = new MyFile(this.#directoryDiv, this.#level + 1);
    file.addName(text);
    return file;
  }
}
