import React, { FC } from "react";
import { Vortex } from "../../shared/assets";
import './VortexBox.scss';

export const VortexBox: FC = () => {
    return (
        <>
            <div id="firstVortex">
                <Vortex />
            </div>
            <div id="secondVortex">
                <Vortex />
            </div>
        </>
    )
}