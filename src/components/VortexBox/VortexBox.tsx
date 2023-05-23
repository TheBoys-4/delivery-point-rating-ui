import React, { FC } from "react";
import { Vortex } from "../../shared/assets";
import "./VortexBox.scss";

export const VortexBox: FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div id="firstVortex">
        <Vortex />
      </div>
      <div id="secondVortex">
        <Vortex />
      </div>
    </div>
  );
};
