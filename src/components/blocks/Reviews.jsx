import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import reviewsCSS from "../styles/reviews.css";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, Perspective, Fade, AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import "../styles/Sliders.css";

const Reviews = forwardRef((props, ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));
    const importAll = (r) => r.keys().map(r);
    const ScreenShots = importAll(require.context("../../img/BlockReviews/", false, /\.(png|jpe?g|svg)$/));
    const _plugins = [
        new Arrow({
            parentEl: document.querySelector(".slider-container"), // Укажите ваш класс
            moveByViewportSize: true,
        }),
        new Fade(),
        new Perspective({ rotate: 0.3, scale: 0.2, perspective: 700 }),
        new AutoPlay(
            { duration: 2000, }
        ),
    ];

    return (
        <>
            <reviewsCSS.Reviews $pad={sectionPadding}>
                <reviewsCSS.Title ref={ref} id='reviews'>Что говорят наши выпускники</reviewsCSS.Title>
                <reviewsCSS.ReviewsContainer>
                    <reviewsCSS.SliderWrapper>
                        <Flicking plugins={_plugins}
                            align="center"
                            circularFallback="bound"
                            duration="500"
                            circular="true"
                            moveType="strict"
                            threshold="40"
                        >
                            {ScreenShots.map((img, i) => (
                                <reviewsCSS.SliderItem key={`${i}`}>
                                    <img src={img} alt="" />
                                </reviewsCSS.SliderItem>
                            ))}
                            <ViewportSlot>
                                <span className="flicking-arrow-prev is-thin is-circle sliderArrow"></span>
                                <span className="flicking-arrow-next is-thin is-circle sliderArrow"></span>
                            </ViewportSlot>
                        </Flicking>
                        
                    </reviewsCSS.SliderWrapper>
                </reviewsCSS.ReviewsContainer>
            </reviewsCSS.Reviews>
        </>
    );
});

export default Reviews