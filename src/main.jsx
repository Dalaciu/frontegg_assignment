import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: "https://app-obibx0spf0j9.frontegg.com",
  clientId: "72f47cb7-2234-42bc-a9ea-ffa0e4066de1",
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
