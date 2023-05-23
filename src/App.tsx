import React from "react";
import "./App.css";
import { Rating } from "./pages/Rating";
import { Header } from "./components/Header";
import { VortexBox } from "./components/VortexBox";
import { RatingModal } from "./components/RatingModal";

function App() {
  return (
    <Rating>
      <Header />
      <RatingModal />
        <VortexBox />
    </Rating>
  );
}

export default App;
