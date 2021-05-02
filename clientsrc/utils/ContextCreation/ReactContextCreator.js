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
    this.createNewStateFile();
    this.createNewReducerFile();
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
    let reducerText = this.templateGenerator.reactReducer();
    fs.writeFile(
      this.filePath + this.contextName + "Reducer.js",
      reducerText,
      function (err) {
        if (err) throw err;
      }
    );
  }
}
