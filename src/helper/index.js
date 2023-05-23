import { TEXT } from "../constant/index.js";

function createTextElement(text) {
  return {
    type: TEXT,
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function isChildrenProp(key) {
  return key !== "children";
}

export function addPropToNode(nodeProps, callback) {
  Object.keys(nodeProps)
    .filter(isChildrenProp)
    .forEach((name) => callback(name));
}

export function createChildren(children) {
  return children.map((child) => {
    if (typeof child === "object") {
      return child;
    }
    return createTextElement(child);
  });
}
