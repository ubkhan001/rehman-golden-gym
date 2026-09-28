import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Membership from "./component/Membership.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<App />} />

        {/* HOME - /home */}
        <Route path="/home" element={<App />} />

        {/* MEMBERSHIP */}
        <Route path="/membership" element={<Membership />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);