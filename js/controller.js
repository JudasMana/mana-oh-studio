import * as Model from "./model.js";
import * as View from "./view.js";
import * as ProjectView from "./projectView.js";

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

const closeProject = function () {
  View.renderPage(Model.app[`${Model.app.currentPage}`]);
  ProjectView.addProjectsHandler(controlProjects);
  View.addHeaderHandler();
};

const controlProjects = function (projectName) {
  const projectData = Model.app.projects.find(
    (proj) => proj.name === projectName
  );
  ProjectView.renderProject(projectData);
  ProjectView.addExitHandler(closeProject);
};

const init = function () {
  View.initWindow(loadPage);
  View.addHeaderHandler();
};
init();
