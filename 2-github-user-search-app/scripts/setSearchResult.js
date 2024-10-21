import { cardsElement } from "./elements.js";

const setSearchResult = (data) => {
  let result = "";

  if (!data?.length) {
    result = `<p>No results found!</p>`;
  } else if (data === null) {
    result = "";
  } else if (data?.length) {
    data.map((item) => {
      result += `
      <article class="card">
          <a href="${item.html_url}" target="_blank">
            <img class="img" loading="lazy" src="${item.avatar_url}" />
            <h2 class="name">${item.login}</h2>
            </a>
      </article>
      `;
    });
  }

  cardsElement.innerHTML = result;
};

export default setSearchResult;
