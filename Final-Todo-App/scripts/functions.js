import {
  activeTaskCountElement,
  bodyElement,
  taskInputElement,
  taskListElement,
} from "./elements";
import { initTaskEvents } from "./events";

export let tasks = [];
const toggleDarkTheme = () => {
  bodyElement.classList.toggle("isDark");

  const currentDarkModeFlag = localStorage.getItem("darkModeFlag");

  if (currentDarkModeFlag === "true") {
    localStorage.setItem("darkModeFlag", "false");
  } else {
    localStorage.setItem("darkModeFlag", "true");
  }
};

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadTasksFromLocalStorage = () => {
  const data = localStorage.getItem("tasks");
  const loadedTasks = data ? JSON.parse(data) : [];
  tasks.length = 0;
  tasks.push(...loadedTasks);
  return tasks;
};

const getIncompleteTasks = () => {
  const tasks = loadTasksFromLocalStorage();
  return tasks.filter((task) => !task.isCompleted).length;
};

const setIncompleteTasks = () => {
  const pendingTasksCount = getIncompleteTasks();

  activeTaskCountElement.innerHTML = pendingTasksCount;
};

const initDragEvents = () => {
  const taskItems = taskListElement.querySelectorAll(".TaskList__taskContent");

  taskItems.forEach((task) => {
    task.addEventListener("dragstart", handleDragStart);
    task.addEventListener("dragover", handleDragOver);
    task.addEventListener("drop", handleDrop);
  });
};

const handleDragStart = (e) => {
  e.dataTransfer.setData("text/plain", e.target.dataset.index);
  e.target.classList.add("dragging");
};

const handleDragOver = (e) => {
  e.preventDefault();
};

const handleDrop = (e) => {
  e.preventDefault();
  const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"));
  const dropIndex = parseInt(
    e.target.closest(".TaskList__taskContent").dataset.index
  );

  if (draggedIndex === dropIndex) return;

  const tasks = loadTasksFromLocalStorage();
  const draggedTask = tasks[draggedIndex];

  tasks.splice(draggedIndex, 1);
  tasks.splice(dropIndex, 0, draggedTask);

  saveTasksToLocalStorage(tasks);
  renderTasks(tasks);
};

const renderTasks = (tasks) => {
  let taskList = "";
  tasks.forEach((task, index) => {
    taskList += `
    <li class="TaskList__taskContent${task.isCompleted ? " isChecked" : ""}" 
        draggable="true" 
        data-index="${index}">
      <div class="TaskList__checkbox" tabindex="0" role="button">
        <img
          class="TaskList__checkboxImg"
          src="./images/icon-check.svg"
          alt="check mark icon"
        />
      </div>
      <div class="TaskList__valueContent">
        <p class="TaskList__value">${task.taskContent}</p>
        <img
          class="TaskList__deleteIcon"
          src="./images/icon-cross.svg"
          alt="cross-icon"
        />
      </div>
    </li>
    `;
  });
  taskListElement.innerHTML = taskList;

  setIncompleteTasks();
  initTaskEvents();
  initDragEvents();
};

const renderEmptyState = () => {
  taskListElement.innerHTML = `<li class="TaskList__taskContent">
    <p>Hooray! You have no pending tasks. 🎉</p>
  </li>`;
};

const initTaskList = (tasks) => {
  if (tasks?.length) {
    renderTasks(tasks);
  } else {
    renderEmptyState();
  }
};

const addTask = (taskText) => {
  const task = {
    taskContent: taskText,
    isCompleted: false,
  };
  tasks.push(task);
  taskInputElement.value = "";
  saveTasksToLocalStorage(tasks);
  initTaskList(tasks);
};

const deleteTask = (taskId) => {
  console.log;
  const tasks = loadTasksFromLocalStorage();
  tasks.splice(taskId, 1);
  saveTasksToLocalStorage(tasks);
  initTaskList(tasks);
};

const toggleTask = (e, index) => {
  const tasks = loadTasksFromLocalStorage();
  e.currentTarget.parentElement.classList.toggle("isChecked");
  tasks[index].isCompleted = !tasks[index].isCompleted;
  saveTasksToLocalStorage(tasks);
  initTaskList(tasks);
};

const filterTasks = (filter) => {
  const tasks = loadTasksFromLocalStorage();
  let filteredTasks;

  switch (filter) {
    case "Active":
      filteredTasks = tasks.filter((task) => !task.isCompleted);
      break;
    case "Completed":
      filteredTasks = tasks.filter((task) => task.isCompleted);
      break;
    default:
      filteredTasks = tasks;
  }

  initTaskList(filteredTasks);
};

const clearCompleted = () => {
  const tasks = loadTasksFromLocalStorage();
  const activeTasks = tasks.filter((task) => !task.isCompleted);
  saveTasksToLocalStorage(activeTasks);
  initTaskList(activeTasks);
};

export {
  toggleDarkTheme,
  addTask,
  loadTasksFromLocalStorage,
  initTaskList,
  deleteTask,
  toggleTask,
  initDragEvents,
  filterTasks,
  clearCompleted,
};
