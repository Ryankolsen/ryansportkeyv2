import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout.jsx";
import FooterPage from "./components/FooterPage.jsx";
import Home from "./components/Home";
import ReactPage from "./components/ReactPage";
import About from "./components/About";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ReactPage" element={<ReactPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
      <FooterPage />
    </BrowserRouter>
  </React.StrictMode>
);
