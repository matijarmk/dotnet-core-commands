"use strict";
import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";

export function dbcontextInfo() {
    executeCommandInOutputChannel(["ef dbcontext info"], true, false);
}
