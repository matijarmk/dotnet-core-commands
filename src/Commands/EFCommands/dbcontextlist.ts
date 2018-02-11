"use strict";
import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";

export function dbcontextList() {
    executeCommandInOutputChannel(["ef dbcontext list"], true, false);
}
