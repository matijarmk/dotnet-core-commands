"use strict";
import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";

let items = [
  {
    label: "Debug",
    description: "Defines the build configuration."
  },
  {
    label: "Release",
    description: "Defines the build configuration."
  }
];
let options = {
  matchOnDescription: false,
  placeHolder: "Select build configuration."
};

export function build() {
  buildConfiguration();
}

function buildConfiguration() {

  vscode.window.showQuickPick(items, options).then(data => {
    vscode.window
      .showInputBox({
        placeHolder:
          "Enter optional paramaters if any, example --runtime ubuntu.16.04-x64"
      })
      .then(optionalParams => {
        executeCommandInOutputChannel(
          ["build", "--configuration " + data.label, optionalParams],
          true,
          false
        );
      });
  });
}
