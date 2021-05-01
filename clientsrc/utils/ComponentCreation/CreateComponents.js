import ReactComponentCreator from "./ReactComponentCreator.js";

// npm create component components componentName
// npm create state stateName

export default class ComponentCreator {
  constructor(args) {
    this.componentName = args[args.length - 1];
    this.filePathDirs = args.slice(1, args.length - 2);
  }

  createNewReactComponet() {}
}
