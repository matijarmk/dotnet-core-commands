"use strict";
import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";

export function dbcontextScaffold() {
  vscode.window
    .showInputBox({
      placeHolder:
        "Connection string {Server=.\\SQLEXPRESS;Database=dbname;Trusted_Connection=True;MultipleActiveResultSets=true}",
      ignoreFocusOut: true
    })
    .then(connectionString => {
      if (connectionString != undefined && connectionString != "") {

        vscode.window
          .showInputBox({
            placeHolder: "Provider {Microsoft.EntityFrameworkCore.SqlServe}",
            ignoreFocusOut: true
          })
          .then(provider => {
            if (provider != undefined && connectionString != "") {
              executeCommandInOutputChannel(
                ["ef dbcontext scaffold", `"${connectionString}"`, provider],
                true,
                false
              );
            }
          });
      }
    });
}
