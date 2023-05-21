import React from 'react';
import './App.css';
import { Rating } from "./pages/Rating";
import { Header } from "./components/Header";
import { VortexBox } from "./components/VortexBox";

function App() {
  return (<Rating>
    <Header />
    <VortexBox />
  </Rating>);
}

export default App;
