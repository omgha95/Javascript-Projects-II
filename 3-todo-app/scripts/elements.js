const themeToggleButton = document.querySelector(".DarkThemeToggle");
const AppElement = document.querySelector(".App");

const addTaskButton = document.querySelector(".TaskSearchBar__button");

const inputElement = document.querySelector(".TaskSearchBar__input");
const taskListElement = document.querySelector(".TaskList__list");

const getDeleteIcons = () => document.querySelectorAll(".TaskList__deleteIcon");
const getCheckboxElements = () =>
  document.querySelectorAll(".TaskList__checkbox");

const taskListLink = document.querySelector(".TaskList__link");

export {
  themeToggleButton,
  AppElement,
  addTaskButton,
  inputElement,
  taskListElement,
  getDeleteIcons,
  getCheckboxElements,
  taskListLink,
};
