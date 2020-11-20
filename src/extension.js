const vscode = require('vscode');

const { mathpixMarkdownPlugin, initMathpixMarkdown } = require('mathpix-markdown-it');

const shouldRefreshConfs = [
  'mathpix-markdown.dark_mode',
  'mathpix-markdown.latex',
  'mathpix-markdown.math',
  'mathpix-markdown.chemistry',
  'mathpix-markdown.htmlTags',
  'markdown.preview.breaks',
  'mathpix-markdown-chemistry.disableColors',
  'mathpix-markdown-chemistry.disableGradient'
];

const getMmdOptions = () => {
  const darkMode = vscode.workspace.getConfiguration('mathpix-markdown').get('dark_mode');
  const htmlTags = vscode.workspace.getConfiguration('mathpix-markdown').get('htmlTags');
  const latexMode = vscode.workspace.getConfiguration('mathpix-markdown').get('latex');
  const mathMode = vscode.workspace.getConfiguration('mathpix-markdown').get('math');
  const chemMode = vscode.workspace.getConfiguration('mathpix-markdown').get('chemistry');
  const disableColors = vscode.workspace.getConfiguration('mathpix-markdown-chemistry').get('disableColors');
  const disableGradient = vscode.workspace.getConfiguration('mathpix-markdown-chemistry').get('disableGradient');

  return {
    width: 1200,
    htmlTags: htmlTags,
    mathJax: {},
    outMath: {},
    auto: false,
    smiles: {
      theme: darkMode ? 'dark' : 'light',
      disableColors: disableColors,
      disableGradient: disableGradient
    }
  }
};


const useMathpixMarkdownPlugin = (md) => {  
  md = initMathpixMarkdown(md, getMmdOptions);
  md.use(mathpixMarkdownPlugin, {});
  return md;
};

function activate(ctx) {
  ctx.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (shouldRefreshConfs.some((c) => e.affectsConfiguration(c))) {
        vscode.commands.executeCommand('markdown.preview.refresh')
      }
    })
  );

  return {
    extendMarkdownIt(md) {
      return useMathpixMarkdownPlugin(md);
    },
  };
}

function deactivate() {
  return {
    extendMarkdownIt(md) {
      return md;
    },
  };
}

module.exports = {
  activate,
  deactivate,
};
