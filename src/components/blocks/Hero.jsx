import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import NavButtonHOC from "../shared/NavButton";
import heroCSS from "../styles/hero.css";
import Poster from "../../img/BlockHero/hero.png";
import Arrow from "../../img/BlockHero/arrow.svg";

const NavButton = NavButtonHOC(heroCSS.Arrow);

const Hero = forwardRef((props, ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));

    return (
        <>
            <heroCSS.Hero $pad={sectionPadding}>
                <heroCSS.HeroTrigger ref={ref} id="hero" />
                <heroCSS.HeroContainer>
                    <heroCSS.Info>
                        <heroCSS.Title>МАГИСТР</heroCSS.Title>
                        <heroCSS.Subtitle>Путь к знаниям начинается здесь</heroCSS.Subtitle>
                    </heroCSS.Info>
                    <heroCSS.HeroImg>
                        <img src={Poster} alt="" />
                    </heroCSS.HeroImg>
                </heroCSS.HeroContainer>
                <NavButton href='#best'>
                        <img src={Arrow} alt="" />
                </NavButton>
            </heroCSS.Hero>
        </>
    );
});

export default Hero