let items = ["apple", "pineapple", "orange", "grapes"];

function foo(items) {
  return items.map((p) => <li>{p}</li>);
}

let list = render(<ul>{items.map(item)}</ul>);

document.body.appendChild(list);

// JSX to VDOM
let vdom = (
  <div id="foo">
    <p>A imple JSX DOX renderer!</p>
    <ul>{foo(ITEMS)}</ul>
  </div>
);

// VDOM to DOM
let dom = render(vdom);

// Add the tree to <body>
document.body.appendChild(dom);

// Virtual DOM is just a JSON - each "VNode" is an object w/ 3 properties
let json = JSON.stringify(vdom, null, "  ");

// JSX -> DOM -> DOM in one step
document.body.appendChild(render(<pre>{json}</pre>));

// Render virtual DOM to real DOM
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

function h(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;
  return { nodeName, attributes, children };
}
