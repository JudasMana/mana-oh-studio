import * as Model from "./model.js";
import * as View from "./view.js";
import * as ProjectView from "./projectView.js";

/**
 * This function loads a page on the window load, a click on the header or an url change
 * @param {str} page the name of the page or project to load
 * @param {str} category whether a main page or a project needs to be loaded
 */
const loadPage = function (page, category) {
  if (category === "main") {
    Model.app.currentPage = page;
    View.renderPage(Model.app[`${Model.app.currentPage}`]);
    ProjectView.addProjectsHandler(controlProjects);
    View.addHeaderHandler();
  }
  if (category === "project") {
    controlProjects(page);
  }
};

/**
 * This function lets you exit a project page an go back to the home page
 */
const closeProject = function () {
  loadPage("home", "main");
};

/**
 * This function recives the name of a project and renders the project page. It also attaches the needed event listeners to the correct elements
 * @param {str} projectName the name of the project to render
 */
const controlProjects = function (projectName) {
  const projectData = Model.app.projects.find(
    (proj) => proj.name === projectName
  );
  ProjectView.renderProject(projectData);
  ProjectView.addExitHandler(closeProject);
};

/**
 * This function initializes the website, adding event listeners to the window (also on load, so it load the page in the url) and to the header of the main pages
 */
const init = function () {
  View.initWindow(loadPage);
  View.addHeaderHandler();
};
init();
