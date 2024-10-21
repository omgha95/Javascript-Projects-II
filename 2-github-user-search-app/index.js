import { buttonElement, searchInput, userRadio } from "./scripts/elements";
import performSearch from "./scripts/performSearch.js";

buttonElement.onclick = (e) => {
  e.preventDefault();
  performSearch(searchInput.value, userRadio.checked);
};
