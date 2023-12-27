// add event listeners to window, runs LoadPage when it recievs an event
export const initWindow = function (handler) {
  window.history.replaceState(null, "", "/home");
  document.title = "Home \u2015 OH.STUDIO";

  ["load", "popstate", "locationchange"].forEach((event) => {
    window.addEventListener(event, (e) => {
      handler(e.currentTarget.location.pathname.slice(1));
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
    window.history.pushState(null, "", `/${btn.dataset.destination}`);
    window.dispatchEvent(new Event("locationchange"));
  });
};

// render a page based on the page data
export const renderPage = function (pageData) {
  document.title = `${pageData.name.slice(0, 1).toUpperCase()}${pageData.name
    .slice(1)
    .toLowerCase()} \u2015 OH.STUDIO`;

  document.querySelector("body").innerHTML = pageData.markup;
  addObserver(pageData.slidingElements);
  window.scrollTo(0, 0);

  // initProjects();
};

// add observer to sliding elements of page
const addObserver = function (elementTags) {
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

export const initProjects = function () {
  console.log(document.querySelectorAll(".project"));
  document.querySelectorAll(".project").forEach((el) => {
    el.addEventListener("click", (e) => {
      console.log(e);
      e.preventDefault();
      window.open();
    });
  });
};
