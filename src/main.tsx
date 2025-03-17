import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./routes/Dashboard.tsx";
import Login from "./routes/Login.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Login />}></Route>
          <Route path="/app/dashboard" element={<Dashboard />}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There is no cat here</p>
                <Link to="/">Back home</Link>
              </main>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
