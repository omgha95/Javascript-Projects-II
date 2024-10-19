import { labelClickHandler, observeElements } from "./utils";

const labelElements = document.querySelectorAll(".faq__question");
const sectionElements = document.querySelectorAll(".section");

labelElements.forEach((element) => labelClickHandler(element));
observeElements(sectionElements);
