import * as Model from "./model.js";
import * as View from "./view.js";

const loadHome = function () {
  View.addObserver(Model.app.home.slidingElements);
};

const init = function () {
  loadHome();
  View.addHeaderHandler(Model.app);
};
init();
