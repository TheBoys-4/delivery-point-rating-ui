import React, { FC } from "react";
import "./Rating.scss";
import { Header } from "../../components/Header";
import { RatingModal } from "../../components/RatingModal";
import { VortexBox } from "../../components/VortexBox";

export const Rating: FC = () => {
  return (
    <div className="main">
      <Header />
      <RatingModal />
      <VortexBox />
    </div>
  );
};
