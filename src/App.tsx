import "./index.css";

import { Route } from "wouter-preact";

import { Home } from "./Home";

export function App() {
  return (
    <>
      <Route path="/" component={Home} />
    </>
  );
}
