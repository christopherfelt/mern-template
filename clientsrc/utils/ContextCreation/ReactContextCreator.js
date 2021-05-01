import fs from "fs";
import TemplateGenerator from "./TemplateGenerator.js";

export default class ReactContextCreator {
  constructor(args) {
    this.contextName = args[args.length - 1];
    this.filePath = "src/context/" + this.contextName + "/";
    this.templateGenerator = new TemplateGenerator(this.contextName);
  }

  createNewReactContext() {
    console.log("creating react context" + this.filePath);
    this.createNewDir();
  }

  createNewDir() {
    fs.mkdirSync(this.filePath);
  }

  createNewStateFile() {
    let stateText = this.templateGenerator.reactState();
    fs.writeFile(
      this.filePath + this.contextName + "State.js",
      stateText,
      function (err) {
        if (err) throw err;
      }
    );
  }

  createNewReducerFile() {
    console.log("Creating reducer file");
  }
}
