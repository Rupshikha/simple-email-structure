import data from "./data.js";
import LeftContainer from "./LeftContainer.js";
import displayFolder from "./API.js";

const dataObject = [
  {
    name: "Inbox",
    isDir: true,
    children: [
      {
        name: "Primary",
        isDir: true,
        children: [
          {
            name: "Subject Line1",
            isDir: false,
            data: data(),
          },
          {
            name: "Subject Line2",
            isDir: false,
            data: data(),
          },
        ],
      },
    ],
  },
  {
    name: "Sent",
    isDir: true,
    children: [
      {
        name: "Messages",
        isDir: true,
        children: [
          {
            name: "message1",
            isDir: false,
            data: data(),
          },
          {
            name: "message2",
            isDir: false,
            data: data(),
          },
        ],
      },
    ],
  },
  {
    name: "Draft",
    isDir: true,
    children: [
      {
        name: "message1",
        isDir: false,
        data: data(),
      },
      {
        name: "TEST LABEL",
        isDir: false,
        children: [],
        data: { test: 123 },
      },
    ],
  },
];

const container = document.querySelector(`#sidebar`);
const parentContainer = new LeftContainer(container);

displayFolder(dataObject, parentContainer);
