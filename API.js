/**
 *
 * @param {*} dataObject
 * @param {*} parentContainer
 */

export default function displayFolder(dataObject, parentContainer) {
  for (let i = 0; i < dataObject.length; i++) {
    if (dataObject[i].isDir) {
      const name = dataObject[i].name;
      const currentDir = parentContainer.addDirectory(name);
      displayFolder(dataObject[i].children, currentDir);
    } else {
      const name = dataObject[i].name;
      const currentFile = parentContainer.addFile(name);
      currentFile.addData(
        dataObject[i].data ?? {
          From: "",
          To: "",
          Subject: "",
          Time: "",
          Message: "",
        }
      );
    }
  }
}
