import React, { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useSelector } from "react-redux";
import footerCSS from "../styles/footer.css";
import NavButtonHOC from "../shared/NavButton";
import DesktopLogo from "../../img/Footer/desktop.svg";
import MobileLogo from "../../img/Footer/mobile.svg";
import Tg from "../../img/Footer/tg.svg";
import Inst from "../../img/Footer/inst.svg";
import Wtsp from "../../img/Footer/wtsp.svg";
import Num from "../../img/Footer/num.svg";

const NavButton = NavButtonHOC(footerCSS.NavPoint);

const Footer = () => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));
    const center = [42.964623, 47.503370];
    let [logo, setLogo] = useState(MobileLogo);

    const ReloadLogo = () => {
        setLogo((window.innerWidth <= 992) ? MobileLogo : DesktopLogo);
    }

    window.onresize = ReloadLogo;
    window.onload = ReloadLogo;

    return (
        <>
            <footerCSS.Footer $pad={sectionPadding}>
                <footerCSS.FooterContainer>
                    <footerCSS.Logo>
                        <img src={logo} alt="" />
                    </footerCSS.Logo>
                    <footerCSS.InfoContainer>
                        <footerCSS.Nav>
                            <h3>навигация по сайту</h3>
                            <footerCSS.NavPointsCont>
                                <NavButton href='#hero'>главная</NavButton>
                                <NavButton href='#advantages'>почему выбирают нас?</NavButton>
                                <NavButton href='#catalog'>направления подготовки</NavButton>
                                <NavButton href='#reviews'>отзывы</NavButton>
                                <NavButton href='#contacts'>контакты</NavButton>
                            </footerCSS.NavPointsCont>
                        </footerCSS.Nav>
                        <footerCSS.Adress>
                            <h3>адрес</h3>

                            
                            <a href="https://yandex.ru/maps/org/magistr/137602209975/?indoorLevel=1&ll=47.503371%2C42.964623&z=16.57" target="_blank" rel="noopener noreferrer"><span style={{marginBottom: '20px'}}>г. Махачкала, ул. Ирчи Казака, д. 46а</span></a>
                            <h3>контакты</h3>
                            <a href="tel:79289785785">
                                <span>+7 (9289) 785&nbsp; 785</span>
                            </a>
                            <a href="tel:79896501660">
                                <span>+7 (989) 650 16-60</span>
                            </a>
                        </footerCSS.Adress>
                    </footerCSS.InfoContainer>
                    <footerCSS.Map>
                        <YMaps query={{ apikey: "0e41cf21-dcbb-4f07-aad8-3cb488036754" }}>
                            <Map
                                defaultState={{
                                    center: center,
                                    zoom: 16,
                                    controls: [],
                                }}
                                width="100%"
                                height="100%"
                                modules={["control.ZoomControl"]}
                                options={{
                                    yandexMapDisablePoiInteractivity: true,
                                    suppressMapOpenBlock: true,
                                    scrollZoom: false,
                                    theme: "dark",
                                }}
                            >
                                <Placemark
                                    geometry={center}
                                    options={{
                                        preset: "islands#greenDotIcon",
                                    }}
                                />
                            </Map>
                        </YMaps>
                    </footerCSS.Map>
                    <footerCSS.Contacts>
                        <a href="https://t.me/magistrcenter" target="_blank" rel="noopener noreferrer">
                            <img src={Tg} alt="" />
                        </a>
                        <a href="https://www.instagram.com/magistrcenter?igsh=MXB3eWYxdXh1dWhhMg==" target="_blank" rel="noopener noreferrer">
                            <img src={Inst} alt="" />
                        </a>
                        <a href="https://wa.me/79289785785?text=Здравствуйте!%20Хочу%20записаться%20к%20вам%20на%20пробное%20занятие." target="_blank" rel="noopener noreferrer">
                            <img src={Wtsp} alt="" />
                        </a>
                        <a href="tel:79289785785">
                            <img src={Num} alt="" />
                        </a>
                    </footerCSS.Contacts>
                </footerCSS.FooterContainer>
            </footerCSS.Footer>
        </>
    );


}



export default Footer