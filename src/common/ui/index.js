import * as dom from './dom';

let tree;
let rootNode;

export function render(ui, el) {
  tree = ui;
  rootNode = dom.render(tree, el);
}
