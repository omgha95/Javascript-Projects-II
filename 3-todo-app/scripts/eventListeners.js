import { addTask, deleteTask, toggleTask, toggleTheme } from "./utils";
import {
  addTaskButton,
  getCheckboxElements,
  getDeleteIcons,
  taskListElement,
  taskListLink,
  themeToggleButton,
} from "./elements";

export const initTaskListeners = () => {
  getDeleteIcons().forEach((icon, index) => {
    icon.onclick = (e) => deleteTask(e, index);
  });
  getCheckboxElements().forEach((box, index) => {
    box.onclick = (e) => toggleTask(e, index);
    box.onkeydown = (e) => e.key === "Enter" && toggleTask(e, index);
  });
};

export const initListeners = () => {
  themeToggleButton.onclick = () => toggleTheme();

  addTaskButton.onclick = (e) => {
    addTask(e);
  };

  taskListLink.onclick = () => {
    taskListElement.classList.toggle("TaskList__list--hideCompleted");
    taskListLink.classList.toggle("TaskList__link--isActive");
  };
};
