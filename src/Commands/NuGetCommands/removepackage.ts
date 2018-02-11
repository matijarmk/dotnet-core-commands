"use strict";

import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";
import { outputChannel } from "./../../extension";
import * as WebRequest from "web-request";
import * as xmljs from "xml-js";

import * as fs from "file-system";

var items = [];

export function removePackage() {
  outputChannel.clear();
  outputChannel.show();
  vscode.workspace.findFiles("*.{csproj}").then(files => {
    var packages = {};
    var data: Array<any> = JSON.parse(
      xmljs.xml2json(fs.readFileSync(files[0].fsPath), {
        compact: true
      })
    ).Project.ItemGroup;

    data.forEach(element => {
      if (element.PackageReference) {
        element.PackageReference.forEach(packageReference => {
          items.push({
            label: packageReference._attributes.Include,
            detail: packageReference._attributes.Version
          });
        });
      }
    });

    vscode.window
      .showQuickPick(items, { placeHolder: "Select package to remove." })
      .then(fulfilled => {
        if (fulfilled.label != undefined) {
          executeCommandInOutputChannel(
            ["remove package", fulfilled.label],
            true,
            false
          );
        }
      });
  });
}
