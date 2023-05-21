import React from "react";
import "./App.css";
import { Rating } from "./pages/Rating";
import { Header } from "./components/Header";
import { RatingModal } from "./components/RatingModal/RatingModal";

function App() {
  return (
    <Rating>
      <Header />
      <RatingModal />
    </Rating>
  );
}

export default App;
