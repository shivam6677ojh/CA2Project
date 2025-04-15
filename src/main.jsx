import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Determine if we're in development or production
const isDevelopment = import.meta.env.DEV;
const basename = isDevelopment ? "" : "/CA2Project";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
