import fs from "fs";
import TemplateGenerator from "./TemplateGenerator.js";

export default class SetupFileCreator {
  constructor(args) {
    // this.componentFilePath = "/";
    this.templateGenerator = new TemplateGenerator();
  }

  createSetupFiles() {
    this.createDotEnvFile();
  }

  createDotEnvFile() {
    let dotEnvText = this.templateGenerator.dotEnv();
    fs.writeFile(".env2", dotEnvText, function (err) {
      if (err) throw err;
    });
  }
}
