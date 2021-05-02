// npm create component components(folder location) componentName
// npm create state stateName
// npm create setup

import ReactComponentCreator from "./ComponentCreation/ReactComponentCreator.js";
import ReactContextCreator from "./ContextCreation/ReactContextCreator.js";

let argTrunc = process.argv.slice(2);

function creationDispatch(args) {
  if (args[0] == "component") {
    console.log("creating component");
    let componentCreator = new ReactComponentCreator(args);
    componentCreator.createNewReactComponent();
  } else if (args[0] == "context") {
    console.log("creating state");
    let contextCreator = new ReactContextCreator(args);
    contextCreator.createNewReactContext();
  } else if (args[0] == "setup") {
    console.log("creating setup files");
  }
}

creationDispatch(argTrunc);
