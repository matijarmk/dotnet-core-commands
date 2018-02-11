"use strict";
import * as vscode from "vscode";
import { executeCommandInOutputChannel, executeCommandInTerminal } from "../../executeCommand";

export function run() {
  executeCommandInTerminal(["run"]);
}
