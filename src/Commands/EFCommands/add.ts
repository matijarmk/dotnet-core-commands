"use strict";
import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";


export function add() {
  vscode.window
    .showInputBox({ placeHolder: " The name of the migration" })
    .then(name => {
      executeCommandInOutputChannel(["ef migrations add", name], true, false);
    });
}
