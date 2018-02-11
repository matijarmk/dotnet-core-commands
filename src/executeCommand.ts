"use strict";

import * as vscode from "vscode";
import * as cp from "child_process";
import { runInTerminal } from "run-in-terminal";
import { outputTerminal, outputChannel } from "./extension";
import { ChildProcess } from "child_process";

export function executeCommandInTerminal(args: string[]){
  let cmd = "dotnet " + args.join(" ");
  outputTerminal.show(true);
  outputTerminal.sendText(cmd);
}

export function executeCommandInOutputChannel(
  args: string[],
  showOutputChannel: boolean,
  showInformationMessage: boolean
) {
  let cmd = "dotnet " + args.join(" ");

  var childProcess = cp.exec(cmd, {
    cwd: vscode.workspace.rootPath,
    env: process.env
  });
  showOutput(childProcess, cmd, showOutputChannel, showInformationMessage);

  return {
    stderr: childProcess.stderr,
    stdout: childProcess.stdout
  };
}

function showOutput(
  childProcess: cp.ChildProcess,
  cmd: string,
  showOutputChannel: boolean,
  showInformationMessage: boolean
) {
  outputChannel.show(vscode.ViewColumn.Three);
  if (showOutputChannel) {
    outputChannel.append("Command: " + cmd + "\n");
    outputChannel.append("-----------------------------------------------\n");
  }
  childProcess.stderr.on("data", (data: string) => {
    if (showOutputChannel) {
      outputChannel.append(data);
    }
  });
  childProcess.stdout.on("data", (data: string) => {
    if (showOutputChannel) {
      outputChannel.append(data);
    }
    if (showInformationMessage) {
      vscode.window.showInformationMessage(data);
    }
  });
}
