import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./utils/SideBar";
import rutas from "./route-config";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <SideBar />
            <div className="col mt-5">
              <Routes>
                {rutas.map((ruta) => (
                  <Route
                    key={ruta.path}
                    path={ruta.path}
                    element={<ruta.componente />}
                  />
                ))}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
