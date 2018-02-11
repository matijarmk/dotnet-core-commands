"use strict";
import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";

export function script() {
    executeCommandInOutputChannel(["ef migrations script"], true, false);
}
