import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TheNameProvider } from "./context/TheName";
import { AuthProvider } from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <TheNameProvider>
        <App />
      </TheNameProvider>
    </AuthProvider>
  </React.StrictMode>
);
