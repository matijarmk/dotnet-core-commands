"use strict";

import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";

export function remove() {
    executeCommandInOutputChannel(["ef migrations remove"], true, false);
}
