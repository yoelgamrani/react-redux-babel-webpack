import React from "react";
import { render } from "react-dom";

export default function hi() {
  return <p>Hi</p>;
}

render(<Hi />, document.getElementById("app"));
