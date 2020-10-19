function h(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;
  return { nodeName, attributes, children };
}

function render(vnode) {
  // Strings just convert to #text Nodes
  if (vnode.split) {
    return document.createTextNode(vnode);
  }

  // Create a DOM element with nodeName of our VDOM element
  let n = document.createElement(vnode.nodeName);

  // Copy attributes onto the new node
  let a = vnode.attributes || {};
  Object.keys(a).forEach((k) => n.setAttribute(k, a[k]));

  // Render and append child nodes
  (vnode.children || []).forEach((c) => n.appendChild(render(c)));

  return n;
}
