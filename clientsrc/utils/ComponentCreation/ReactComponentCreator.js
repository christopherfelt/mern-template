import fs from "fs";

export default class ReactComponentCreator {
  constructor(args) {
    this.componentName = args[args.length - 1];
    // TODO check for length of array
    this.filePath =
      args.length <= 2
        ? "src/components/components/" + this.componentName
        : "src/components/" +
          args.slice(1, args.length - 1).join("/") +
          "/" +
          this.componentName;
  }

  createNewReactComponent() {
    console.log("creating react component");
    console.log(this.componentName);
    console.log(this.filePath);
    this.createNewDir();
  }

  createNewDir() {
    fs.mkdirSync(this.filePath);
  }

  createNewJavascriptFile() {
    console.log("Creating new Javascript");
  }

  createNewJSXFile() {
    console.log("Creating new JSX file");
  }

  createNewStyleSheet() {
    console.log("Creating New StyleSheet"); //scss
  }
}
