import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Rating } from "./pages/Rating";
import { paths, roles } from "./shared/constants";
import { AdminPage } from "./pages/AdminPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            {roles.user || roles.postomat ?  <Route path={paths.MAIN} element={<Rating />} /> : <></>}
            {roles.admin ? <Route  path={paths.ADMIN} element={<AdminPage />} /> : <></>}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
