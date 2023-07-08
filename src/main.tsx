import { render } from "preact";
import { Router } from "wouter-preact";

import { App } from "./App";

const base = import.meta.env.BASE_URL.slice(0, -1);

render(
  <Router base={base}>
    <App />
  </Router>,
  document.body
);
