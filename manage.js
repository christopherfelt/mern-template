const fs = require("fs");
const { ComponentCreator } = require("./utils/ComponentCreator.js");

// let newDirName = process.argv[2];

// TODO don't allow users to create folders that start with numbers

function createNewExpressComponent(newComponentName) {
  const cc = new ComponentCreator(newComponentName);
  cc.createNewDirectory();
  cc.createNewModelFile();
  cc.createNewControllerFile();
  cc.createNewServiceFile();
  return ""; //Something has to be returned or make-runnable with return undefined in the console
}

function createNewReactComponent(newComponentName, ...folderNames) {
  //expected would be to put them in either they will just go into the component folder
  console.log(newComponentName);
  console.log(folderNames);
}

module.exports = { createNewExpressComponent, createNewReactComponent };
require("make-runnable/custom")({
  printOutputFrame: false,
});
