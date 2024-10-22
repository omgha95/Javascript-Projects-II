import { addTaskButton, themeToggleButton } from "./scripts/elements.js";
import { toggleTheme, addTask } from "./scripts/utils.js";

themeToggleButton.onclick = () => {
  toggleTheme();
};

addTaskButton.onclick = (e) => {
  addTask(e);
};
