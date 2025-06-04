import React, { useEffect, useRef } from "react";
import headerCSS from "../styles/header.css";
import Burger from "../services/Burger";
import NavButtonHOC from "../shared/NavButton";
import { useSelector, useDispatch } from "react-redux";
import { setShowBurger } from "../../redux-state/reduces/header";
import Logo from "../../img/Header/hLogo.svg";
import Tg from "../../img/Header/tg.svg";
import Inst from "../../img/Header/inst.svg";
import Wtsp from "../../img/Header/wtsp.svg";
import Num from "../../img/Header/num.svg";


const NavButton = NavButtonHOC(headerCSS.MenuButton)
const LogoButton = NavButtonHOC(headerCSS.LogoContainer)

const Header = () => {
    const dispatch = useDispatch();
    const isShowBurger = useSelector(state => state.headerReducer.showBurger);
    const clientMode = useSelector(state => state.initial.clientMode);
    const sectionPadding = useSelector(state => state.initial.sectionPadding);
    const buttonState = useSelector(state => state.headerReducer.activeButton);

    const burgerRef = useRef(null);
    const menuRef = useRef(null);
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Проверяем, что ref существуют и меню открыто
            if (!burgerRef.current || !isShowBurger) return;
            // Проверяем клик вне элементов
            const clickedBurger = burgerRef.current?.contains(event.target);
            const clickedMenu = menuRef.current?.contains(event.target);
            
            if (!clickedBurger && !clickedMenu) {
                dispatch(setShowBurger(false));
            }
        };

        // Вешаем обработчик только при открытом меню
        if (isShowBurger) {
            document.addEventListener('click', handleClickOutside);
        }
        
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isShowBurger, dispatch])

    return (
        <>
            <headerCSS.Header $pad={sectionPadding}>
                <headerCSS.HeaderContainer>
                    <LogoButton href='#hero'>
                        <img src={Logo} alt="" />
                    </LogoButton>
                    {clientMode === 'desktop' &&
                        <headerCSS.MenuDesktopContainer>
                            <NavButton isActive={buttonState[0]} href='#hero'>Главная</NavButton>
                            <NavButton isActive={buttonState[1]} href='#advantages'>Почему выбирают нас?</NavButton>
                            <NavButton isActive={buttonState[2]} href='#catalog'>Направления подготовки</NavButton>
                            <NavButton isActive={buttonState[3]} href='#reviews'>Отзывы</NavButton>
                            <NavButton isActive={buttonState[4]} href='#contacts'>Контакты</NavButton>
                            <headerCSS.PriceButton><span>Узнать стоимость</span></headerCSS.PriceButton>
                        </headerCSS.MenuDesktopContainer>}
                    {clientMode === 'mobile' && <Burger ref={burgerRef} />}
                </headerCSS.HeaderContainer>
            </headerCSS.Header>
            {clientMode === 'mobile' &&
                <headerCSS.MenuMobileContainer ref={menuRef} $transform={isShowBurger}>
                    <headerCSS.MenuMobileContainerWrap>
                        <NavButton isActive={buttonState[0]} href='#hero'>Главная</NavButton>
                        <NavButton isActive={buttonState[1]} href='#advantages'>Преимущества</NavButton>
                        <NavButton isActive={buttonState[2]} href='#catalog'>Направления</NavButton>
                        <NavButton isActive={buttonState[3]} href='#reviews'>Отзывы</NavButton>
                        <NavButton isActive={buttonState[4]} href='#contacts'>Контакты</NavButton>
                        <headerCSS.PriceButton href="https://wa.me/79289785785?text=Здравствуйте!%20Подскажите,%20пожалуйста,%20стоимость%20обучения%20в%20вашем%20центре." target="_blank" rel="noopener noreferrer"><span>Узнать стоимость</span></headerCSS.PriceButton>
                    </headerCSS.MenuMobileContainerWrap>
                    <headerCSS.MenuMobileContacts>
                    <a href="https://t.me/magistrcenter" target="_blank" rel="noopener noreferrer">
                            <img src={Tg} alt="" />
                        </a>
                        <a href="https://www.instagram.com/magistrcenter?igsh=MXB3eWYxdXh1dWhhMg==" target="_blank" rel="noopener noreferrer">
                            <img src={Inst} alt="" />
                        </a>
                        <a href="https://wa.me/79289785785?text=Здравствуйте!" target="_blank" rel="noopener noreferrer">
                            <img src={Wtsp} alt="" />
                        </a>
                        <a href="tel:79289785785">
                            <img src={Num} alt="" />
                        </a>
                    </headerCSS.MenuMobileContacts>
                </headerCSS.MenuMobileContainer>
            }
        </>
    )
}

export default Header

