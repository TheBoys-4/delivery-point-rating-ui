import { FC, PropsWithChildren } from "react";
import "./Rating.scss";

export const Rating: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="main">
      <div className="container"> {children}</div>
    </div>
  );
};
