'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { dotnet } from './Commands/dotnet';

export let outputTerminal: vscode.Terminal;

export let outputChannel: vscode.OutputChannel;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  
    outputTerminal = vscode.window.createTerminal("dotnet");
    outputChannel = vscode.window.createOutputChannel("dotnet");
    context.subscriptions.push(outputChannel);
    context.subscriptions.push(outputTerminal);
    registerCommands(context);
}

function registerCommands(context: vscode.ExtensionContext) {
    context.subscriptions.push(dotnet);
}

// this method is called when your extension is deactivated
export function deactivate() {
}