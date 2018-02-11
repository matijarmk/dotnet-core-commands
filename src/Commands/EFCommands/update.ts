"use strict";
import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";

export function update() {
    executeCommandInOutputChannel(["ef database update"], true, false);
}
