import { commands, ExtensionContext, languages } from "vscode";
import MyCodeLensProvider from "./myCodeLens";
import { addConsoleLog } from "./commands";

export function activate(context: ExtensionContext) {
  // Register the command
  let commandDisposable = commands.registerCommand(
    "extension.addConsoleLog",
    addConsoleLog
  );

  // Get a document selector for the CodeLens provider
  // This one is any file that has the language of javascript
  let docSelector = {
    language: "javascript",
    scheme: "file"
  };

  // Register our CodeLens provider
  let codeLensProviderDisposable = languages.registerCodeLensProvider(
    docSelector,
    new MyCodeLensProvider()
  );

  // Push the command and CodeLens provider to the context so it can be disposed of later
  context.subscriptions.push(commandDisposable);
  context.subscriptions.push(codeLensProviderDisposable);
}

export function deactivate() {}
