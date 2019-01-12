import { Range, window, SnippetString } from "vscode";

async function addConsoleLog() {
  let lineNumStr = await window.showInputBox({
    prompt: "Line Number"
  });

  let lineNum = +lineNumStr;

  let insertionLocation = new Range(lineNum - 1, 0, lineNum - 1, 0);
  let snippet = new SnippetString("console.log($1);\n");

  window.activeTextEditor.insertSnippet(snippet, insertionLocation);
}

export { addConsoleLog };
