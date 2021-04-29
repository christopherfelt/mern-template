import fs from "fs";
import TemplateGenerator from "./TemplateGenerator.js";

class ComponentCreator {
  constructor(newComponentName) {
    this.name = newComponentName;
    this.newComponentPath = "components/" + newComponentName + "/";
    this.templateGenerator = new TemplateGenerator(this.name);
  }

  createNewDirectory() {
    console.log(this.newComponentPath);
    fs.mkdirSync(this.newComponentPath);
  }

  createNewModelFile() {
    let modelsText = "//This is a new model";
    fs.writeFile(
      this.newComponentPath + "models.js",
      modelsText,
      function (err) {
        if (err) throw err;
      }
    );
  }

  createNewControllerFile() {
    let controllerText = this.templateGenerator.expressController();
    fs.writeFile(
      this.newComponentPath + "controller.js",
      controllerText,
      function (err) {
        if (err) throw err;
      }
    );
  }

  createNewServiceFile() {
    let serviceText = "//This is a new service";
    fs.writeFile(
      this.newComponentPath + "service.js",
      serviceText,
      function (err) {
        if (err) throw err;
      }
    );
  }
}

export default ComponentCreator;
