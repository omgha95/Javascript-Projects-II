import { AppElement, taskListElement } from "./elements.js";

const toggleTheme = () => {
  AppElement.classList.toggle("App--isDark");
};

const addTask = (e) => {
  e.preventDefault();

  const inputElement = document.querySelector(".TaskSearchBar__input");
  const taskValue = inputElement.value;

  if (!taskValue) return;

  taskListElement.innerHTML += `<li class="TaskList__taskContent">
    <div class="TaskList__checkbox" tabIndex="0" role="button">
        <img class="TaskList__checkboxImg" src="./assets/icon-checkmark.svg" alt="checkmark-icon"/>
    </div>
    <div class="TaskList__valueContent">
        <p class="TaskList__value">
            ${taskValue}
        </p>
        <img class="TaskList__deleteIcon" src="./assets/icon-basket.svg" alt="basket-icon" />
    </div>
  </li>`;
};

export { toggleTheme, addTask };
