import Heat from "./core/index.js";

const element = Heat.createElement(
  "div",
  { id: "foo" },
  Heat.createElement("a", {}, "bar"),
  Heat.createElement("span")
);

const container = document.getElementById("root");

Heat.render(element, container);
