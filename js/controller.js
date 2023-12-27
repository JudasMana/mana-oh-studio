import * as Model from "./model.js";
import * as View from "./view.js";

const loadPage = function (page) {
  Model.app.currentPage = page;
  View.renderPage(Model.app[`${Model.app.currentPage}`]);
  View.addHeaderHandler();
};

const init = function () {
  View.initWindow(loadPage);
  View.addHeaderHandler();
};
init();
