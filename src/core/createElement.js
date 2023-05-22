import { createChildren } from "../helper/index.js";

export default function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: createChildren(children),
    },
  };
}
