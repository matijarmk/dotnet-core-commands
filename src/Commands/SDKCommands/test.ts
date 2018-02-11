"use strict";
import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";

export function test() {
  executeCommandInOutputChannel(["test"], true, false);
}
