/*
    [x] create function => performSearch(searchTerm, isUserSelected)
    [x] call performSearch inside Button eventListener
    - performSearch Implementation:
      [x] fetch data from url
      [-] if OK then show data in the page
      * if not, show error message
*/

import { searchInput, buttonElement, cardsElement, usersInputElement } from "./scripts/elements";
import performSearch from "./scripts/performSearch";

buttonElement?.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch(searchInput.value, usersInputElement.checked);
});
