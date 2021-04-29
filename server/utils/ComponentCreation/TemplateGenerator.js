import ExpressController from "./Templates/ExpressController.js";

class TemplateGenerator {
  constructor(appName) {
    this.appName = appName;
  }

  expressController() {
    return ExpressController(this.appName);
  }
}

export default TemplateGenerator;
