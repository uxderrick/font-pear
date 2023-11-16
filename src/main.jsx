import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Theme>
    <App />
    <Analytics />
  </Theme>
);
