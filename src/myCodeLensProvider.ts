import {
  CodeLensProvider,
  TextDocument,
  CodeLens,
  Range,
  Command
} from "vscode";

class MyCodeLensProvider implements CodeLensProvider {
  // Each provider requires a provideCodeLenses function which will give the various documents
  // the code lenses
  async provideCodeLenses(document: TextDocument): Promise<CodeLens[]> {
    // Define where the CodeLens will exist
    let topOfDocument = new Range(0, 0, 0, 0);

    // Define what command we want to trigger when activating the CodeLens
    let c: Command = {
      command: "extension.addConsoleLog",
      title: "Insert console.log"
    };

    let codeLens = new CodeLens(topOfDocument, c);

    return [codeLens];
  }
}

export default MyCodeLensProvider;
