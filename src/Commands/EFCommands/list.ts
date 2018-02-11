"use strict";
import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";

export function list() {
    executeCommandInOutputChannel(["ef migrations list"], true, false);
}
