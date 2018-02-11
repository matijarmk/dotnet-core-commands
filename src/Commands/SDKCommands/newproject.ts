"use strict";
import * as vscode from "vscode";
import { executeCommandInOutputChannel } from "../../executeCommand";

export function newproject() {
  projectTemplates();
}

function projectTemplates() {
  vscode.window
    .showOpenDialog({
      canSelectFiles: false,
      canSelectFolders: true,
      canSelectMany: false
    })
    .then(folder => {
      if (folder.length > 0 && folder[0].fsPath.length > 0) {
        vscode.window.showQuickPick(items, options).then(template => {
          vscode.window
            .showInputBox({
              placeHolder: "Enter project name."
            })
            .then(projectName => {
              if (projectName != undefined && projectName != "") {
                vscode.window
                  .showInputBox({
                    placeHolder:
                      "Optional paramaters: --auth {None, Individual, IndividualB2C, SingleOrg, MultiOrg, Windows}"
                  })
                  .then(optionalParams => {
                    executeCommandInOutputChannel(
                      [
                        "new",
                        template.label,
                        `-n ${projectName}`,
                        `-o "${folder[0].fsPath}"`,
                        optionalParams
                      ],
                      true,
                      false
                    ).stdout.on("end", () => {
                      vscode.commands.executeCommand(
                        "vscode.openFolder",
                        vscode.Uri.parse(folder[0].fsPath)
                      );
                    });
                  });
              }
            });
        });
      }
    });
}
let items = [
  {
    label: "console",
    description: "Console application."
  },
  {
    label: "classlib",
    description: "Class library."
  },
  {
    label: "mstest",
    description: "Unit test project."
  },
  {
    label: "xunit",
    description: "xUnit test project."
  },
  {
    label: "web",
    description: "ASP.NET Core."
  },
  {
    label: "mvc",
    description: "ASP.NET Core Web App (Model-View-Controller)."
  },
  {
    label: "razor",
    description: "ASP.NET Core Web App."
  },
  {
    label: "angular",
    description: "ASP.NET Core with Angular"
  },
  {
    label: "react",
    description: "ASP.NET Core with React.js."
  },
  {
    label: "reactredux",
    description: "ASP.NET Core with React.js and Redux."
  },
  {
    label: "webapi",
    description: "ASP.NET Core Web API."
  },
  {
    label: "globaljson",
    description: " global.json file."
  },
  {
    label: "nugetconfig",
    description: "Nuget config."
  },
  {
    label: "Web config",
    description: "webconfig."
  },
  {
    label: "sln",
    description: "Solution file."
  },

  {
    label: "page",
    description: "Razor page."
  },
  {
    label: "viewimports",
    description: " MVC/ViewImports."
  },
  {
    label: "viewstart",
    description: "MVC ViewStart	."
  }
];
let options = {
  matchOnDescription: false,
  placeHolder: "Select project template."
};
