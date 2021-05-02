import fs from "fs";
import TemplateGenerator from "./TemplateGenerator.js";

class ComponentCreator {
  constructor(newComponentName) {
    this.name = newComponentName[1];
    this.newComponentPath = "components/" + this.name + "/";
    this.templateGenerator = new TemplateGenerator(this.name);
  }

  createNewExpressComponent() {
    console.log("creating express component");
    this.createNewDirectory();
    this.createNewControllerFile();
    this.createNewServiceFile();
    this.createNewModelFile();
  }

  createNewDirectory() {
    console.log(this.newComponentPath);
    fs.mkdirSync(this.newComponentPath);
  }

  createNewControllerFile() {
    let controllerText = this.templateGenerator.expressController();
    fs.writeFile(
      this.newComponentPath + "Controller.js",
      controllerText,
      function (err) {
        if (err) throw err;
      }
    );
  }

  createNewServiceFile() {
    let serviceText = this.templateGenerator.expressService();
    fs.writeFile(
      this.newComponentPath + "Service.js",
      serviceText,
      function (err) {
        if (err) throw err;
      }
    );
  }

  createNewModelFile() {
    let modelsText = this.templateGenerator.expressModel();
    fs.writeFile(
      this.newComponentPath + "Model.js",
      modelsText,
      function (err) {
        if (err) throw err;
      }
    );
  }
}

export default ComponentCreator;
