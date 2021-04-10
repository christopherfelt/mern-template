import fs from "fs";
import BaseController from "./BaseController.js";
import path from "path";
import { dir } from "console";

export class Paths {
  static get Public() {
    return path.resolve("..", "client");
  }
  static get Server() {
    return path.resolve(".");
  }

  static get Components() {
    // let componentDirs = fs.readdirSync(componentFolder, {
    //   withFileTypes: true,
    // });
    // // this will be in a for loop
    // // Need to confirm is a dir
    // componentDirs.forEach(loadComponents);

    // async function loadComponents(dirent) {
    //   // console.log();
    //   if (dirent.isDirectory()) {
    //     let componentDirFiles = path.resolve(componentFolder, dirent.name);
    //     let dirFiles = fs.readdirSync(componentDirFiles);
    //     if (!dirFiles.includes("Controller.js")) return;
    //     let importHandler = await import(componentDirFiles + "/Controller.js");
    //     console.log(importHandler.default);
    //   }
    // }
    // return dirFiles;
    return path.resolve(".", "components");
  }

  // static get Controllers() {
  //   return this.Server + "/controllers";
  // }
}

export function RegisterControllers(router) {
  let components = fs.readdirSync(Paths.Components, {
    withFileTypes: true,
  });
  components.forEach(loadComponents);

  async function loadComponents(dirent) {
    try {
      if (dirent.isDirectory()) {
        let componentDirFiles = path.resolve(Paths.Components, dirent.name); //Path to component directory
        let dirFiles = fs.readdirSync(componentDirFiles); //Array of files in component directory
        if (!dirFiles.includes("Controller.js")) return; //Checks if Controller.js exists in directory.  If not, exit function
        let importHandler = await import(componentDirFiles + "/Controller.js"); //import the controller file from the component directory
        // console.log(importHandler.default);
        let component = new importHandler.default(); //get the default export in the file
        if (component instanceof BaseController) {
          //check and make sure that it is an instance of the base controller
          router.use(component.mount, component.router); //Add it to the router
        }
      }
    } catch (error) {
      console.error(
        "[CONTROLLER ERROR] unable to load controller, potential duplication, review mount path and controller class name",
        dirent.name,
        error
      );
    }
  }

  // controllers.forEach(loadController);
  // async function loadController(controllerName) {
  //   try {
  //     // const fileCheck = controllerName + "/controller.js";

  //     if (!controllerName.endsWith(".js")) return; //this checks whether the controller file is a js file
  //     //this imports all the exports from the given controller file which in this case is just one
  //     let fileHandler = await import(Paths.Controllers + "/" + controllerName);
  //     //then they grab the exported class that matches the the controller name.  Therefore they need the exported class to match the file name.
  //     // I believe that it was done this way in order to emulate the C# web api model
  //     let controllerClass = fileHandler[controllerName.slice(0, -3)];
  //     // this invokes the import.  I think an improved way of doing this, for my needs, is to remove the line above, make the class in the controller file the defailt
  //     // and add .default() to the end of the next line
  //     let controller = new controllerClass();
  //     // The class is then check to see if it an instance of the BaseController (to mimic an interface?)
  //     if (controller instanceof BaseController) {
  //       router.use(controller.mount, controller.router);
  //     }
  //   } catch (e) {
  //     console.error(
  //       "[CONTROLLER ERROR] unable to load controller, potential duplication, review mount path and controller class name",
  //       controllerName,
  //       e
  //     );
  //   }
  // }
}
