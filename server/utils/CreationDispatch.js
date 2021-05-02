import ExpressComponentCreator from "./ComponentCreation/ExpressComponentCreator.js";

let argTrunc = process.argv.slice(2);

function creationDispatch(args) {
  if (args[0] == "component") {
    console.log("creating component");
    let componentCreator = new ExpressComponentCreator(args);
    componentCreator.createNewExpressComponent();
  }
}

creationDispatch(argTrunc);
