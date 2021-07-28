const vscode = require('vscode');

const { mathpixMarkdownPlugin, initMathpixMarkdown } = require('mathpix-markdown-it');

const shouldRefreshConfs = [
  'markdown.preview.breaks',
  'mathpix-markdown.html.disableRendering',
  'mathpix-markdown.smiles.disableColors',
  'mathpix-markdown.smiles.disableGradient'
];

const getMmdOptions = () => {
  const disableHTMLTags = vscode.workspace.getConfiguration('mathpix-markdown.html').get('disableRendering');
  const disableColors = vscode.workspace.getConfiguration('mathpix-markdown.smiles').get('disableColors');
  const disableGradient = vscode.workspace.getConfiguration('mathpix-markdown.smiles').get('disableGradient');

  return {
    width: 1200,
    htmlTags: disableHTMLTags ? false : true,
    mathJax: {},
    outMath: {},
    auto: false,
    smiles: {
      disableColors: disableColors,
      disableGradient: disableGradient
    }
  }
};


const useMathpixMarkdownPlugin = (md) => {
  md = initMathpixMarkdown(md, getMmdOptions);
  md.use(mathpixMarkdownPlugin, {enableFileLinks: true});
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
