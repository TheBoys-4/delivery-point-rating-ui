import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Rating } from "./pages/Rating";
import { paths } from "./shared/constants";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={paths.MAIN} element={<Rating />} />
            <Route path="*" element={<div><h1>Страница не найдена</h1></div>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
