const vscode = require('vscode');

const MathJaxPlugin = require('../node_modules/mathpix-markdown-it/lib/markdown/mdPluginRaw.js').default;
const highlightPlugin = require('../node_modules/mathpix-markdown-it/lib/markdown/mdHighlightCodePlugin.js').default;
const mdPluginText = require('../node_modules/mathpix-markdown-it/lib/markdown/mdPluginText.js').default;
const mdPluginTOC = require('../node_modules/mathpix-markdown-it/lib/markdown/mdPluginTOC.js').default;
const mdPluginAnchor = require('../node_modules/mathpix-markdown-it/lib/markdown/mdPluginAnchor.js').default;
const mdPluginTableTabular = require('../node_modules/mathpix-markdown-it/lib/markdown/mdPluginTableTabular.js').default;
const mdPluginList = require('../node_modules/mathpix-markdown-it/lib/markdown/mdPluginLists.js').default;
const mdChemistry = require('../node_modules/mathpix-markdown-it/lib/markdown/md-chemistry').default;

function activate(ctx) {
  ctx.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration('mathpix-markdown.dark_mode')) {
        vscode.commands.executeCommand('markdown.preview.refresh');
      }
    })
  );

  let darkMode = vscode.workspace.getConfiguration('mathpix-markdown.dark_mode');
  let latexMode = vscode.workspace.getConfiguration('mathpix-markdown.latex');
  let mathMode = vscode.workspace.getConfiguration('mathpix-markdown.math');
  let chemMode = vscode.workspace.getConfiguration('mathpix-markdown.chemistry');

  let smileConfig = {
    theme: 'light',
  };

  if (darkMode) {
    smileConfig.theme = 'dark';
  }

  return {
    extendMarkdownIt(md) {
      return md
        .use(mdPluginTOC)
        .use(mdPluginTableTabular, { width: 1200, outMath: {} })
        .use(mdPluginList, { width: 1200, outMath: {} })
        .use(MathJaxPlugin({ width: 1200, outMath: {} }))
        .use(mdPluginText())
        .use(highlightPlugin, { auto: false })
        .use(mdPluginAnchor)
        .use(mdChemistry, smileConfig);
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
