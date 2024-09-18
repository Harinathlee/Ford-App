import React from "react";
import "react-app-polyfill/stable";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";

// reading the configs
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const appConfigUrl = import.meta.env.VITE_APP_CONFIG_URL;
console.log(`
  apiBaseURL : ${apiBaseUrl} 
  appConfigURL : ${appConfigUrl}
  `)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
