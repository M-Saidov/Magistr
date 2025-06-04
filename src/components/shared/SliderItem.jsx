import React, { forwardRef } from "react";
import catalogCSS from "../styles/catalog.css";

const SliderItem = forwardRef((props, ref) => {


    return (
        <>
            <catalogCSS.Slide ref={ref} href={props.href} target="_blank" rel="noopener noreferrer">
                <img src={props.item} alt="" />
            </catalogCSS.Slide>
        </>
    );
});

export default SliderItem