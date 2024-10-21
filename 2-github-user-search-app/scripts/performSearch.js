import getMessage from "./getMessage.js";
import setLoadingState from "./setLoadingState.js";
import setMessage from "./setMessage.js";
import setSearchResult from "./setSearchResult.js";

const USERS_API = "https://api.github.com/search/users?q=";

const performSearch = (searchTerm, isUserSelected) => {
  getMessage() && setMessage("");

  const queryType = isUserSelected ? "+type:user" : "+type:org";

  if (!searchTerm.trim()) {
    setMessage("Please enter a valid search query!");
    return;
  }

  setLoadingState(true);

  fetch(`${USERS_API}${searchTerm}${queryType}`)
    .then((result) => result.json())
    .then((response) => setSearchResult(response.items))
    .finally(() => {
      setLoadingState(false);
    });
};

export default performSearch;
