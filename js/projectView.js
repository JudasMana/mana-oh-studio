import { addObserver } from "./view";
import logo from "../resources/icons/logo.webp";

/**
 * Adds events listeners for clicks on active projects on the main page
 * @param {function} handler function to be fired on event listened
 */
export const addProjectsHandler = function (handler) {
  document.querySelectorAll(".project--active").forEach((el) => {
    el.addEventListener("click", (e) => {
      const project = e.target.closest(".project");
      if (!project) return;

      const projectName = project.dataset.projectName;
      handler(projectName);
    });
  });
};

/**
 * Renders a project to the screen
 * @param {Object} projectData the data of an object (see model module)
 */
export const renderProject = function (projectData) {
  if (!projectData) return;

  const markup = generateProjecteMarkup(projectData);
  document.querySelector("body").innerHTML = markup;
  addObserver(projectData.slidingElements);

  window.scrollTo(0, 0);
  document.title = projectData.title;
  window.history.pushState(null, "", `/projects/${projectData.name}`);
};

/**
 * Creates the markup of a project page
 * @param {Object} data the data of an object (see model module)
 * @returns the markup ass a string
 */
const generateProjecteMarkup = function (data) {
  let elements = [];

  const shadowBox = `
    <div class="shadow__container"></div>
  `;
  elements.push(shadowBox);

  const header = `
    <header class="project__header">&#10005;</header>
    `;
  elements.push(header);

  const projectTitle = `
    <section class="project__title">
    <p class="project__caption slided" data-slide-delay="0">${data.caption}</p>
    <p class="project__name slided" data-slide-delay="100">${data.title}</p>
  </section>
    `;
  elements.push(projectTitle);

  let main = [];
  let mainVisual;
  if (data.mainVisual.type === "image") {
    mainVisual = `
    <section class="main__visual">
      <div class="visual__container ${data.elementsId}">
          <img
          src="${data.mainVisual.file}"
          alt=""
          class="visual"
          />
      </div>
    </section>
    `;
  }
  if (data.mainVisual.type === "video") {
    mainVisual = `
    <section class="main__visual">
      <div class="visual__container ${data.elementsId}">
          <video autoplay loop muted preload playsinline class="visual">
            <source src="${data.mainVisual.file}" type="video/mp4">
          </video>
      </div>
    </section>
    `;
  }
  main.push(mainVisual);

  const projectDetails = `
  <section class="project__details ${data.elementsId}">
    ${
      data.client
        ? `<div class="project__info">
    <p class="info__label">Client</p>
    <p class="info__data">${data.name}</p>
  </div>`
        : ""
    }
  ${
    data.studio
      ? `<div class="project__info">
  <p class="info__label">Studio</p>
  <p class="info__data">${data.studio}</p>
  </div>`
      : ""
  }
  ${
    data.project
      ? `<div class="project__info">
  <p class="info__label">Project</p>
  <p class="info__data">${data.project}</p>
  </div>`
      : ""
  }
  ${
    data.role
      ? `<div class="project__info">
  <p class="info__label">Role</p>
  <p class="info__data">${data.role}</p>
  </div>`
      : ""
  }
  ${
    data.focus
      ? `<div class="project__info">
  <p class="info__label">Focus</p>
  <p class="info__data">${data.focus}</p>
  </div>`
      : ""
  }
  </section>
  `;
  main.push(projectDetails);

  const secondaryVisual = `
  <section class="secondary__visuals">
    ${data.secondaryVisual
      .map((visual, i) => {
        if (visual.type === "image") {
          return `
          <div class="visual__container ${
            data.elementsId
          }" id="${`${data.elementsId}-${i}`}">
              <img
              src="${visual.file}"
              alt=""
              class="visual"
              />
          </div>
          `;
        }
        if (visual.type === "video") {
          return `
          <div class="visual__container ${
            data.elementsId
          }" id="${`${data.elementsId}-${i}`}">
              <video autoplay loop muted preload playsinline class="visual">
                <source src="${visual.file}" type="video/mp4">
              </video>
          </div>
          `;
        }
      })
      .join("")}
  </section>
    `;
  main.push(secondaryVisual);

  const projectOverview = `
  <section class="project__overview ${data.elementsId}">
    <p class="label">Overview</p>
    <p class="description">
      ${data.overview}
    </p>
  </section>
  `;
  main.push(projectOverview);

  const convertGalleryFile = function (visualFile, i) {
    if (visualFile.type === "image") {
      return `
      <div class="single__visual ${
        data.elementsId
      }" id="${`${data.elementsId}-${i}`}">
        <img
          src="${visualFile.file}"
          alt=""
          class="visual"
        />
      </div>`;
    }
    if (visualFile.type === "video") {
      return `
      <div class="single__visual ${
        data.elementsId
      }" id="${`${data.elementsId}-${i}`}">
        <video autoplay loop muted playsinline preload class="visual">
          <source src="${visualFile.file}" type="video/mp4">
        </video>
      </div>`;
    }
  };
  const visualGallery = `
  <section class="project__visual__gallery">
  ${data.imageGallery
    .map((imagesSet, i) => {
      if (imagesSet.length === 1) {
        return convertGalleryFile(imagesSet[0], i);
      }
      if (imagesSet.length === 2) {
        return `
        <div class="double__visual">
          ${convertGalleryFile(imagesSet[0], `${i}-1`)}${convertGalleryFile(
          imagesSet[1],
          `${i}-2`
        )}
        </div>
        `;
      }
    })
    .join("")}
  </section>
  `;
  main.push(visualGallery);
  elements.push(`
  <main class="slided" data-slide-delay="200">${main.join("")}</main>
  `);

  const contact = `
  <section class="contact__me">
    <p class="work slided" data-slide-delay="0">Let's work together.</p>
    <a href="mailto:oli@ohstudio" class="get__in__touch slided" data-slide-delay="50">Get in touch.</a>
    </section>
  `;
  elements.push(contact);

  const footer = `
  <footer>
    <div class="left__footer">
        <img src="${logo}" alt="Logo" class="star" />
        <p class="copyright">&copy; Oli Harris 2023</p>
    </div>
    <div class="socials">
        <a href="https://twitter.com/olvhrs" class="social__link">Twitter</a
        ><a href="https://www.linkedin.com/in/oliiharris/" class="social__link"
        >LinkedIn</a
        ><a href="mailto:oli@ohstudio" class="social__link">Mail</a>
    </div>
    </footer>
  `;
  elements.push(footer);

  return elements.join("");
};

/**
 * Adds event listener to the header of project pages
 * @param {function} handler the function fired on click event
 */
export const addExitHandler = function (handler) {
  const exit = document.querySelector(".project__header");
  if (!exit) return;

  exit.addEventListener("click", () => {
    handler();
    window.scrollTo(0, 0);
    document.title = "OH.STUDIO";
    window.history.pushState(null, "", `/`);
  });
};
