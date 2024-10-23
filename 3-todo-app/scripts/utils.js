import { AppElement, inputElement, taskListElement } from "./elements";
import { initTaskListeners } from "./eventListeners";

export const toggleTheme = () => {
  AppElement.classList.toggle("App--isDark");
  saveToDB("darkModeFlag", AppElement?.classList.contains("App--isDark"));
};

export const fetchData = (key) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : null;
};

export const renderTaskList = (tasks) => {
  let taskList = "";
  tasks.forEach((task) => {
    taskList += `<li class="TaskList__taskContent${
      task.isCompleted ? " TaskList__taskContent--isActive" : ""
    }">
    <div class="TaskList__checkbox" tabIndex="0" role="button">
        <img class="TaskList__checkboxImg" src="./assets/icon-checkmark.svg" alt="checkmark-icon"/>
    </div>
    <div class="TaskList__valueContent">
        <p class="TaskList__value">
            ${task.value}
        </p>
        <img class="TaskList__deleteIcon" src="./assets/icon-basket.svg" alt="basket-icon" />
    </div>
  </li>`;
  });

  taskListElement.innerHTML = taskList;
  inputElement.value = "";
};

export const addTask = async (e) => {
  e.preventDefault();

  const taskValue = inputElement.value.trim();

  if (!taskValue) return;

  const task = {
    value: taskValue,
    isCompleted: false,
  };

  let tasks = fetchData("tasks") || []; // Ensure tasks is always an array
  if (!Array.isArray(tasks)) {
    tasks = []; // Fallback if somehow tasks is not an array
  }

  tasks.push(task);
  saveToDB("tasks", tasks);

  initTaskList(tasks);
};

export const saveToDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const deleteTask = (e, index) => {
  const answer = confirm("هل أنت متأكد من رغبتك في حذف المهمة؟");
  if (answer === false) return;

  const tasks = fetchData("tasks");

  tasks.splice(index, 1);
  saveToDB("tasks", tasks);

  initTaskList(tasks);
};

export const initDataOnStartup = () => {
  fetchData("darkModeFlag") && toggleTheme();
  initTaskList(fetchData("tasks"));
};

export const renderEmptyState = () => {
  taskListElement.innerHTML = `<li class="EmptyList">
  <img class="EmptyList__img" src="./assets/icon-empty.svg" alt="List is empty!"/>
  <p>قائمة المهام فارغة</p>
  </li>`;
};

export const initTaskList = (tasks) => {
  if (tasks?.length) {
    renderTaskList(tasks);
    initTaskListeners();
  } else {
    renderEmptyState();
  }
};

export const toggleTask = (e, index) => {
  const tasks = fetchData("tasks");

  e.currentTarget.parentElement.classList.toggle(
    "TaskList__taskContent--isActive"
  );

  tasks[index].isCompleted = !tasks[index].isCompleted;
  saveToDB("tasks", tasks);
};
