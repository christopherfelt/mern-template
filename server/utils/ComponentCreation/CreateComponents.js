console.log("Creating ... ");
console.log(process.argv);

import fs from "fs";
import ComponentCreator from "./ExpressComponentCreator.js";

let newDirName = process.argv[2];

// TODO don't allow users to create folders that start with numbers

function createNewExpressComponent(newComponentName) {
  const cc = new ComponentCreator(newComponentName);
  cc.createNewDirectory();
  cc.createNewModelFile();
  cc.createNewControllerFile();
  cc.createNewServiceFile();
}

createNewExpressComponent(newDirName);

// function createNewReactComponent(newComponentName, ...folderNames) {
//   //expected would be to put them in either they will just go into the component folder
//   console.log(newComponentName);
//   console.log(folderNames);
// }
