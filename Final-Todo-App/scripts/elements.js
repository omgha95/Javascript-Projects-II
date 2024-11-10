const darkThemeButton = document.querySelector(".DarkThemeToggle");
const bodyElement = document.querySelector("body");

const taskInputElement = document.querySelector(".TaskList__input");
const taskForm = document.querySelector(".TaskList__form");
const taskListElement = document.querySelector(".TaskList__list");
const taskContentElement = document.querySelector(".TaskList__taskContent");

const activeTaskCountElement = document.querySelector(
  ".TaskList__incompleteTasksCount"
);

const getCheckboxElements = () =>
  document.querySelectorAll(".TaskList__checkbox");

const getDeleteIconElements = () =>
  document.querySelectorAll(".TaskList__deleteIcon");

export {
  darkThemeButton,
  bodyElement,
  taskInputElement,
  taskForm,
  taskListElement,
  taskContentElement,
  activeTaskCountElement,
  getCheckboxElements,
  getDeleteIconElements,
};
