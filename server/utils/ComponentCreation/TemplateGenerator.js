import ExpressController from "./Templates/ExpressController.js";
import ExpressService from "./Templates/ExpressService.js";
import ExpressModel from "./Templates/ExpressModel.js";

class TemplateGenerator {
  constructor(appName) {
    this.appName = appName;
  }

  expressController() {
    return ExpressController(this.appName);
  }

  expressService() {
    return ExpressService(this.appName);
  }

  expressModel() {
    return ExpressModel(this.appName);
  }
}

export default TemplateGenerator;
