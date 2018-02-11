"use strict";
import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";

export function restore() {
  executeCommandInOutputChannel(["restore"], true, false);
}
