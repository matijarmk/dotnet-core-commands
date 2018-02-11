"use strict";

import * as vscode from "vscode";
import { newproject } from "./newproject";
import { restore } from "./restore";
import { build } from "./build";
import { version } from "./version";
import { publish } from "./publish";
import { run } from "./run";
import { clean } from "./clean";
import { test } from "./test";

export function sdkCommands() {
  let param: string[] = ["ef migrations"];
  let items = [
    {
      label: "New",
      description: "Creates a new project, configuration file, or solution based on the specified template."
    },
    {
      label: "Restore",
      description: "Restores the dependencies and tools of a project."
    },
    {
      label: "Run",
      description: "Runs source code without any explicit compile or launch commands."
    },
    {
      label: "Build",
      description: "Builds a project and all of its dependencies."
    },
    {
      label: "Clean",
      description: "Clean build output(s)."
    },
    {
      label: "Test",
      description: "Runs unit tests using the test runner specified in the project."
    },
    {
      label: "Publish",
      description: "Packs the application and its dependencies into a folder for deployment to a hosting."
    },
    {
      label: "Version",
      description: "Displays version."
    }
  ];
  let options = { matchOnDescription: false, placeHolder: "select Type" };

  vscode.window.showQuickPick(items, options).then(data => {
    switch (data.label) {
      case "New": {
        newproject();
        break;
      }
      case "Restore": {
        restore();
        break;
      }
      case "Build": {
        build();
        break;
      }
      case "Clean": {
        clean();
        break;
      }
      case "Test": {
        test();
        break;
      }
      case "Publish": {
        publish();
        break;
      }
      case "Run": {
        run();
        break;
      }
      case "Version": {
        version();
        break;
      }
    }
  });
}
