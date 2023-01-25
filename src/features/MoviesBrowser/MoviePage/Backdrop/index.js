import React from "react";
import { BackdropImage } from "./styled";
import {ReactComponent as Pleksa} from "./images/pleksa.svg"
import posterBig from "./images/poster-big.png"

const Backdrop = () => (
    <>
    <Pleksa />
    <BackdropImage src={posterBig} alt="" />
    </>
);

export default Backdrop;