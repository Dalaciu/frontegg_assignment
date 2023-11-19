import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: "https://login-demo.frontegg.com",
  clientId: import.meta.env.VITE_APP_CLIENT_ID,
};

const authOptions = {
  keepSessionAlive: true,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={true}
      authOptions={authOptions}
    >
      <App />
    </FronteggProvider>
  </React.StrictMode>
);
