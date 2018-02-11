"use strict";

import * as vscode from "vscode";
import { add } from "./add";
import { list } from "./list";
import { remove } from "./remove";
import { script } from "./script";
import { update } from "./update";
import { dbcontextList } from "./dbcontextlist";
import { dbcontextInfo } from "./dbcontexinfo";
import { dbcontextScaffold } from "./dbcontextscaffold";

export function efCommands() {
  let param: string[] = ["ef migrations"];
  let items = [
    {
      label: "Add",
      description: "Adds a new migration."
    },
    {
      label: "Remove",
      description: "Removes the last migration."
    },
    {
      label: "Update",
      description: "Updates the database to a specified migration."
    },
    {
      label: "List",
      description: "Lists available migrations."
    },
    {
      label: "Script",
      description: "Generates a SQL script from migrations."
    },
    {
      label: "Dbcontext list",
      description: "Lists available DbContext types."
    },
    {
      label: "Dbcontext info",
      description: "Gets information about a DbContext type."
    },
    {
      label: "Dbcontext scaffold",
      description: "Scaffolds a DbContext and entity types for a database."
    }
  ];
  let options = { matchOnDescription: false, placeHolder: "select Type" };

  vscode.window.showQuickPick(items, options).then(data => {
    switch (data.label) {
      case "Add": {
        add();
        break;
      }
      case "Remove": {
        remove();
        break;
      }
      case "Update": {
        update();
        break;
      }
      case "List": {
        list();
        break;
      }
      case "Script": {
        script();
        break;
      }
      case "Dbcontext list": {
        dbcontextList();
        break;
      }
      case "Dbcontext info": {
        dbcontextInfo();
        break;
      }
      case "Dbcontext scaffold": {
        dbcontextScaffold();
        break;
      }
    }
  });
}
