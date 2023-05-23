import { TEXT } from "../constant/index.js";
import { addPropToNode } from "../helper/index.js";

export default function render(element, container) {
  const dom =
    element.type === TEXT
      ? document.createTextNode("")
      : document.createElement(element.type);

  if (element.props) {
    addPropToNode(element.props, (name) => {
      dom[name] = element.props[name];
    });
  }

  if (element.props?.children) {
    element.props.children.forEach((child) => render(child, dom));
  }

  container.appendChild(dom);
}
