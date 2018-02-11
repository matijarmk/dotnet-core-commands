"use strict";
import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";

export function clean() {
  executeCommandInOutputChannel(["clean"], true, false);
}
