import React from "react";
import { DarkModeProvider } from "./components/DarkModeContext";
import {  HashRouter, Route, Routes } from "react-router-dom";
import Home from "./sections/Home";

const App = () => {
  return (
    <>
      <DarkModeProvider>
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </HashRouter>

      </DarkModeProvider>
    </>
  );
};

export default App;
