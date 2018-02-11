"use strict";

import * as vscode from "vscode";
import { addPackage } from "./addpackage";
import { removePackage } from "./removepackage";

export function nugetCommands() {
  let items = [
    {
      label: "Add package",
      description: "Adds a package reference to a project file."
    },
    {
      label: "Remove package",
      description: "Removes a package reference from a project file."
    }
  ];
  let options = { matchOnDescription: false, placeHolder: "select Type" };

  vscode.window.showQuickPick(items, options).then(data => {
    switch (data.label) {     
      case "Add package":{
        addPackage();
        break;
      }
      case "Remove package":{
        removePackage();
        break;
      }
    }
  });
}
