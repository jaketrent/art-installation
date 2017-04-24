import createElement from 'virtual-dom/create-element';

function clear(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

export function render(tree, el) {
  clear(el);
  const rootTree = createElement(tree);
  el.appendChild(rootTree);
  return rootTree;
}
