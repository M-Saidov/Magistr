import React, { forwardRef }from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowBurger } from "../../redux-state/reduces/header";
import headerCSS from "../styles/header.css";


const Burger = forwardRef((props, ref) => {

    const dispatch = useDispatch();
    const isShowBurger = useSelector(state => state.headerReducer.showBurger);

    const transformBurger = () => {
        dispatch(setShowBurger(!isShowBurger));
    }

    return (
        <>
            <headerCSS.BurgerButton ref={ref} onClick={transformBurger} >
                <headerCSS.BurgerBar $transform={isShowBurger} />
                <headerCSS.BurgerBarMid $transform={isShowBurger} />
                <headerCSS.BurgerBar $transform={isShowBurger} />
            </headerCSS.BurgerButton>
        </>
    )
});

export default Burger