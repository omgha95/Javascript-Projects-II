import { darkThemeButton } from "./scripts/elements";

import {
  loadTasksFromLocalStorage,
  initTaskList,
  toggleDarkTheme,
  tasks,
} from "./scripts/functions";

const initializeApp = () => {
  const darkModeFlag = localStorage.getItem("darkModeFlag");

  if (darkModeFlag === "true") {
    document.body.classList.add("isDark");
  } else {
    document.body.classList.remove("isDark");
  }

  loadTasksFromLocalStorage();
  initTaskList(tasks);
};

darkThemeButton.onclick = () => toggleDarkTheme();

window.onload = initializeApp;
