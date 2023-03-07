export default class MyFile {
  #parent;
  #level;
  #fileDiv;
  #data;

  constructor(parent, level) {
    this.#parent = parent;
    this.#level = level;
    this.#fileDiv = document.createElement("div");
    this.#fileDiv.classList.add("file");
    this.#fileDiv.style.setProperty("--level", this.#level);
    this.#parent.appendChild(this.#fileDiv);
    this.#fileDiv.addEventListener("click", (e) => {
      this.displayData(e);
    });
  }

  /**
   *
   * @param {string} text
   */
  addName(text) {
    this.#fileDiv.innerText = text;
  }

  /**
   * @param {Object} data
   */
  addData(data) {
    this.#data = data;
  }

  /**
   * @description Display Email
   */
  displayData() {
    let parent = document.getElementById("display");
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    Object.keys(this.#data).forEach((key) => {
      let childContainer = document.createElement("p");
      let val = this.#data[key];
      let string = key + ":" + " " + val;
      childContainer.innerText = string;
      parent.appendChild(childContainer);
    });
  }
}
