import {
  getCheckboxElements,
  getDeleteIconElements,
  taskForm,
  taskInputElement,
} from "./elements";
import {
  addTask,
  clearCompleted,
  deleteTask,
  filterTasks,
  toggleTask,
} from "./functions";

const initTaskEvents = () => {
  const checkboxes = getCheckboxElements();
  checkboxes.forEach((checkbox, index) => {
    checkbox.onclick = (e) => {
      toggleTask(e, index - 1);
      // checkbox.parentElement.classList.toggle("isChecked");
    };
    checkbox.onkeydown = (e) => e.key === "Enter" && toggleTask(e, index);
  });

  const deleteIcons = getDeleteIconElements();
  deleteIcons.forEach((icon, index) => {
    icon.onclick = () => {
      deleteTask(index);
    };
  });
};

taskForm.onsubmit = (e) => {
  e.preventDefault();
  const inputValue = taskInputElement.value.trim();
  addTask(inputValue);
};

const filterButtons = document.querySelectorAll(".TaskList__navList-button");
filterButtons.forEach((button) => {
  button.onclick = (e) => {
    filterTasks(e.target.textContent);

    // Update active button state
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
  };
});

const clearCompletedButton = document.querySelector(
  ".TaskList__clearCompletedBtn"
);

clearCompletedButton.onclick = () => clearCompleted();

export { initTaskEvents };
