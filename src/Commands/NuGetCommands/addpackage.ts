"use strict";
import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";
import { outputChannel } from "./../../extension";
import * as WebRequest from "web-request";

var items = [];

export function addPackage() {
  showInputBox();
 
}

function showInputBox(value: string = "") {
  vscode.window
    .showInputBox({
      placeHolder: "Search NuGet package.",
      value: value
    })
    .then(value => {
      if (value !== undefined) {
        getPackageByName(value, 15).then(() => {
          vscode.window
            .showQuickPick(items, { placeHolder: "Select NuGet package." })
            .then(fulfilled => {
              if (fulfilled === undefined) {
                showInputBox(value);
              } else {
                executeCommandInOutputChannel(["add package",fulfilled.label], true, false);
              }
            });
        });
      }
    });
}

async function getPackageByName(name: string, take: number) {
  var result = await WebRequest.get(
    `https://api-v2v3search-0.nuget.org/query?q=${name}&prerelease=false&take=${take}`
  );
  var data: Array<any> = (JSON.parse(result.content) as any).data;
  items = [];
  data.forEach(element => {
    items.push({
      label: element.id,
      description: element.description,
      detail: element.version
    });
  });
}
