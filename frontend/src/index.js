import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.scss";
import { AuthContextProvider } from "./context/AuthContext";
import { SocketContextProvider } from "./context/SocketContext.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <App />
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
