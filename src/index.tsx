import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

// for polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";

const endPoint = document.getElementById("root");

ReactDOM.render(<App />, endPoint);
