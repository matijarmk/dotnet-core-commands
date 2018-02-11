"use strict";
import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";


export function version() {
  executeCommandInOutputChannel(["--version"], true, true);
}
