import { capitalizeWords } from "./helper";

/**
 * Adds the event handlers to the window. The "locationchange" event is fired by the header (see addHeaderHandler function)
 * @param {function} handler The function to run when the events fire
 */
export const initWindow = function (handler) {
  ["load", "popstate", "locationchange"].forEach((event) => {
    window.addEventListener(event, (e) => {
      const path = e.currentTarget.location.pathname;
      if (path.indexOf("/projects/") !== -1) {
        handler(path.slice("/projects/".length), "project");
      } else if (["/", "/profile", "/contact"].includes(path)) {
        handler(path === "/" ? "home" : path.slice(1), "main");
      } else {
        e.currentTarget.location.pathname = "/";
        handler("home", "main");
      }
    });
  });
};

/**
 * Adds a click event listener to the header of the main pages. A click fires a "locationchange" event listened by the window
 */
export const addHeaderHandler = function () {
  const header = document.querySelector("header");
  if (!header || header.classList.contains("project__header")) return;
  header.addEventListener("click", function (e) {
    const btn = e.target.closest(".header__link");
    if (!btn) return;

    window.scrollTo(0, 0);
    window.history.pushState(
      null,
      "",
      btn.dataset.destination === "home" ? "/" : `/${btn.dataset.destination}`
    );
    window.dispatchEvent(new Event("locationchange"));
  });
};

/**
 * renders the page html (see js/js-html folder) to the screen
 * @param {Object} pageData the data object of a main page (see model module)
 */
export const renderPage = function (pageData) {
  document.title =
    pageData.name === "home"
      ? "OH.STUDIO"
      : `${capitalizeWords(pageData.name)} \u2015 OH.STUDIO`;

  document.querySelector("body").innerHTML = pageData.markup;
  addObserver(pageData.slidingElements);
  window.scrollTo(0, 0);
};

/**
 * Creates an observer and observes all the elements passed. The observer is used to give the sliding effect to the elements in the page
 * @param {array} elementTags List of all the tags (class or id) of the elements that need to be observed
 */
export const addObserver = function (elementTags) {
  const observer = new IntersectionObserver(removeSlidedClass, {
    root: null,
    threshold: 0,
  });

  elementTags.forEach((tag) => {
    const elements = document.querySelectorAll(tag);
    elements.forEach((el) => {
      observer.observe(el);
    });
  });
};

/**
 * On intersetion, removes the "slided" clasas to elements which need to be slided
 * @param {entry Object Array} entries The array given back by an intersection observed by the IntersectionObserver
 */
const removeSlidedClass = function (entries) {
  entries.forEach((intersection) => {
    if (!intersection.isIntersecting) return;
    setTimeout(
      () => intersection.target.classList.remove("slided"),
      +intersection.target.dataset.slideDelay
    );
    if (intersection.time < 100) {
      window.scrollTo(0, 0);
    }
  });
};
