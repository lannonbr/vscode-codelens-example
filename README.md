# CodeLens example extension

This is an example extension showing off how you can implement custom CodeLenses.

It adds a CodeLens called "Add console.log" to the top of all JS files. When
activated, it requests a line number and then will insert a console.log snippet
at that line number.

## Setup

To Test out the extension, download this repo, run `npm i`, and then go to the
debug panel in VS Code and run the "Extension" launch config.
