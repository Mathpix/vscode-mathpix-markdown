# Mathpix Markdown

## Building / testing locally

```
git clone git@github.com:Mathpix/mathpix-markdown-vscode.git
cd mathpix-markdown-cscode
npm install
vsce package
```

Then in VSCODE:

```
command-shift-p
extensions: Install from VSIX
choose the file mathpix-markdown-vscode-0.0.1.vsix
click reload
open SYNTAX.md
command-shift-p
Markdown: Open Preview to the Side
```
