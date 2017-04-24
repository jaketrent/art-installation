import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';

export function update(tree, newTree, rootNode) {
  var patches = diff(tree, newTree);
  rootNode = patch(rootNode, patches);
  return newTree;
}
