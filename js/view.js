import { capitalizeWords } from "./helper";

// add event listeners to window, runs LoadPage when it recievs an event
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

// add events listener to header. Fires a locationchange event when clicked, giving the name of the target page
export const addHeaderHandler = function () {
  const header = document.querySelector("header");
  if (!header) return;
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

// render a page based on the page data
export const renderPage = function (pageData) {
  document.title =
    pageData.name === "home"
      ? "OH.STUDIO"
      : `${capitalizeWords(pageData.name)} \u2015 OH.STUDIO`;

  document.querySelector("body").innerHTML = pageData.markup;
  addObserver(pageData.slidingElements);
  window.scrollTo(0, 0);
};

// add observer to sliding elements of page
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

// remove "slided" class from sliding elements of page
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
