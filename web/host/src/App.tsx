import React from "react";
import { Router } from "./routing/Router";
import { GlobalStyles } from "./styles/Global";

export const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Router />
  </React.Fragment>
);
