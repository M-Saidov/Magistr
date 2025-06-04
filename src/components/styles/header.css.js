import styled from "styled-components";

const headerCSS = {
    Header: styled.section`
        position: fixed;
        top:0;
        display: flex;
        justify-content: center;
        width: 103%;
        height: 86px;
        padding: 0px ${props => (props.$pad)};
        background: rgb(255, 255, 255);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px); /*Для Safari */
        z-index: 1000;
    `,
    HeaderContainer: styled.div`
        display: flex;
        width: 100%;
        max-width: 1440px;
        height: 86px;
        justify-content: space-between;
        align-items: center;
    `,
    LogoContainer: styled.div`
        height: 58.2px;
        user-select: none;
        cursor: pointer;
        img{
            height: 100%;
        }
        @media (max-width: 540px) { 
            height: 34px;
        }
    `,
    MenuDesktopContainer: styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        margin-left: 30px;
        height: 40px;
        justify-content: space-between;
    `,
    MenuMobileContainer: styled.div`
        box-sizing: border-box;
        position: fixed;
        height: calc(100% - 86px);
        width: 75%;
        margin-top: 86px;
        max-width: 240px;
        background: rgb(255, 255, 255);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px); /* Для Safari */
        overflow-y: auto;
        z-index: 1000;
        right: ${props => (props.$transform ? '0px' : '-240px')};
        transition: right 400ms ease-in-out;
        &::-webkit-scrollbar {
            width: 0;
        }
    `,
    MenuMobileContainerWrap: styled.div`
        flex-direction: column;
    `,
    MenuMobileContacts: styled.div`
        position: absolute;
        bottom: 15px;
        display: flex;
        width: 100%;
        justify-content: space-around;
        a{

            img{
                width: 43px;
            }
        }
        
    `,
    BurgerButton: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        height: 36px;
        width: 36px;
        @media (min-width: 993px) { 
            display: none;
        }
    `,
    BurgerBar: styled.div`
        height: 2px;
        width: 100%;
        background-color: rgb(0, 0, 0);
        border-radius: 1px;
        transition: transform 400ms ease-in-out;
        &:first-child{
            transform-origin: center;
            transform: ${props => (props.$transform ? 'translateY(17px) rotate(-225deg) scaleX(1.4142)' : '0')};
        } 
        &:last-child{
            transform-origin: center;
            transform: ${props => (props.$transform ? 'translateY(-17px) rotate(225deg) scaleX(1.4142)' : '0')};
        }
    `,
    BurgerBarMid: styled.div`
        height: 2px;
        width: ${props => (props.$transform ? '0%' : '80%')};
        background-color: rgb(0, 0, 0);
        border-radius: 1px;
        transition: width 400ms cubic-bezier(.52,0,.27,2);
    `,
    MenuButton: styled.a`
        height: 100%;
        position: relative;
        display: flex;
        width: fit-content;
        align-items: center;
        border-bottom: 1px solid rgb(0, 0, 0);
        border-color: ${props => props.$focus ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)'};
        transition: all 0.3s linear;
        font-family: Montserrat;
        font-size: 12.43px;
        font-weight:  ${props => props.$focus ? '450' : '350'};
        letter-spacing: 0.08em;
        text-align: center;
        color: rgb(0, 0, 0);
        line-height: 15px;
        cursor: pointer;
        user-select: none;
        @media (max-width: 1240px) { 
            font-size: 10px;
        }
        @media (min-width: 993px) {
            margin: 0 10px;
        }
        @media (max-width: 992px) {
            height: 46px;
            width: 100%;
            font-size: clamp(1.5rem, 0.85vw, 1.5rem);
            font-weight: ${props => props.$focus? '600' : '400'};
            padding-left: 18px;
            margin-bottom: 15px;
            border: none;
            border-radius: 0px;
            transition: all 300ms ease-in-out, border-color 0.3s linear;
            &:first-child{
                margin-top: 17px; 
            }
            &:before{
                /* position: absolute;
                content: '';
                width: 2px;
                height: 2px;
                border-radius: 50%;
                background-color: #000;
                top:50%;
                left: 9px;
                transform: translate(50%, -50%); */
            }
            &:active{
                background: rgb(246, 246, 246);
            }
        }
    `,
    PriceButton: styled.a`
        min-width: 187px;
        height: 40px;
        border-radius: 24.72px;
        background: rgb(52, 199, 113);
        padding: 11px 20px 16px;
        color: rgb(255, 255, 255);
        font-size: 12.99px;
        font-weight: 800;
        line-height: 14px;
        letter-spacing: 0.08rem;
        cursor: pointer;
        user-select: none;
        transition: all 0.2s ease-in-out;
        @media (max-width: 1240px) { 
            min-width: 147px;
            padding: 8px 13px 10px;
            font-size: 10px;
            line-height: 11px;
            height: 27px;
        }
        @media (max-width: 992px) {
            display: block;
            height: auto;
            width: fit-content;
            font-weight: ${props => props.$focus? '600' : '400'};
            margin-left: 18px;
            font-size: 12.99px;
            padding: 11px 20px 13px;
        }
        @media (min-width: 1024px) {
            &:hover{
                transform: scale(1.05);
            }
        }
        &:active{
            transform: scale(0.8);
        }
    `
}

export default headerCSS