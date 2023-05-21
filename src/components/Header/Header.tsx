import React, { FC } from "react";
import { Logo } from "../../shared/assets";
import "./Header.scss";

export const Header: FC = () => {
  return (
    <header className="mainHeader">
      <div className="logo">
        <Logo />
      </div>
      <div className="tagline">Это удобно, быстро, безопасно</div>
    </header>
  );
};
