# Mathpix Markdown

### Issues

- Needs to auto-reload when changing settings
  - https://github.com/microsoft/vscode/issues/70936
- Equation numbering is wrong, starts at 7 for SYNTAX.md
  - apparently related to reloading, doesn't reset
- Lines not breaking between paragraphs, etc...

### Building / testing locally

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