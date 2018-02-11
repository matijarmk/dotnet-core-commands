"use strict";

import * as vscode from "vscode";
import { sdkCommands } from "./SDKCommands/_sdkCommands";
import { efCommands } from "./EFCommands/_efCommands";
import { nugetCommands } from "./NuGetCommands/_nugetCommands";

export var dotnet = vscode.commands.registerCommand("extension.Dotnet", () => {
  let param: string[];
  let items = ["SDK commands", "EF commands", "NuGet Packages"];
  let options = { matchOnDescription: false, placeHolder: "select Type" };

  vscode.window.showQuickPick(items, options).then(data => {
    switch (data) {
      case "SDK commands": {
        sdkCommands();
        break;
      }
      case "EF commands": {
        efCommands();
        break;
      }
      case "NuGet Packages": {
        nugetCommands();
        break;
      }
    }
  });
});
