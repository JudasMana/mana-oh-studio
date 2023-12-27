export const addObserver = function (elementTags) {
  const observer = new IntersectionObserver(removeSlidedClass, {
    root: null,
    threshold: 0,
  });

  elementTags.forEach((tag) => {
    const element = document.querySelector(tag);
    observer.observe(element);
  });
};

const removeSlidedClass = function (entries) {
  entries.forEach((intersection) => {
    if (!intersection.isIntersecting) return;
    setTimeout(
      () => intersection.target.classList.remove("slided"),
      +intersection.target.dataset.slideDelay
    );
  });
};

export const addHeaderHandler = function () {
  const header = document.querySelector("header");
  header.addEventListener("click", function (e) {
    const btn = e.target.closest(".header__link");
    if (!btn) return;

    const destination = btn.dataset.destination;
    return destination;
  });
};

const loadPage = function (appData) {
  switch (appData.currentPage) {
    case "home":
      if (appData.currentPage != "home") loadHomePage();
      break;
    case "profile":
      if (appData.currentPage != "profile") loadProfilePage();
      break;
    case "contact":
      if (appData.currentPage != "contact") loadContactPage();
      break;
  }
};
const loadHomePage = function () {
  console.log("CHECK home");
  window.history.pushState("object or string", "HOME PAGE", "/");
};

const loadProfilePage = function () {
  console.log("CHECK profile");
  window.history.pushState("object or string", "PROFILE PAGE", "/profile");
};

const loadContactPage = function () {
  console.log("CHECK contact");
  window.history.pushState("object or string", "CONTACT PAGE", "/contact");
};
