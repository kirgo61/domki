import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>,
  document.getElementById("root")
);
registerServiceWorker();
