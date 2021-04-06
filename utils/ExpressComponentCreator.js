const fs = require("fs");

class ComponentCreator {
  constructor(newComponentName) {
    this.name = newComponentName;
    this.newComponentPath = "./" + newComponentName + "/";
  }

  createNewDirectory() {
    fs.mkdirSync(this.name);
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
    let controllerText = "//This is a new controller";
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

module.exports.ComponentCreator = ComponentCreator;
