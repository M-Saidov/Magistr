import styled from "styled-components";
import mainCSS from "./main.css";


const freeLessonCSS = {
    FreeLesson: styled(mainCSS.NewSection)`
        
    `,
    FreeLessonContainer: styled(mainCSS.NewSectionContainer)`
        height: 467px;
        align-items: start;
        justify-content: start;
        background: url(${props => (props.$backDesktop)}) right/cover no-repeat;
        border-radius: 28.26px;
        padding: 44px;
        @media (max-width: 1000px) {
            height: 367px;
        }
        @media (max-width: 870px) {
            background: url(${props => (props.$backDesktop)}) -180px/cover no-repeat;
        }
        @media (max-width: 755px) {
            height: 577px;
            justify-content: end;
            background: url(${props => (props.$backMobile)}) 0 top/cover no-repeat;
        }
        @media (max-width: 455px) {
            height: 430px;
            padding: 20px;
        }
    `,
    Title: styled(mainCSS.Title)`
        max-width: 452px;
        color: rgb(255, 255, 255);
        font-size: 48.38px;
        font-weight: 700;
        line-height: 59px;
        text-align: left;
        @media (max-width: 1110px) {
            font-size: 34px;
            line-height: 36px;
        }
        @media (max-width: 455px) {
            font-size: 27px;
            line-height: 28px;
        }
        @media (max-width: 340px) {
            font-size: 20px;
            line-height: 22px;
        }
    `,
    Subtitle: styled.span`
        max-width: 370px;
        margin: 20px 0;
        color: rgb(255, 255, 255);
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.11rem;
        @media (max-width: 1110px) {
            font-size: 17px;
            line-height: 20px;
        }
        @media (max-width: 455px) {
            margin: 13px 0;
            font-size: 16px;
            line-height: 17px;
        }
        @media (max-width: 340px) {
            font-size: 14px;
            line-height: 15px;
        }
    `,
    LetsGoButton: styled.a`
        margin-top: auto;
        max-width: 425px;
        width: 100%;
        height: 66px;
        border-radius: 51px;
        background: rgb(255, 255, 255);
        padding: 21px 21px;
        color: rgb(0, 0, 0);
        font-size: 20.1px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0.08rem;
        cursor: pointer;
        user-select: none;
        transition: all 0.2s ease-in-out;
        &:active{
            transform: scale(0.8);
        }
        span{
            display: block;
            width: fit-content;
            margin: 0 auto;
        }
        @media (min-width: 1024px) {
            &:hover{
                transform: scale(1.05);
            }
        }
        @media (max-width: 1110px) {
            max-width: 350px;
        }
        @media (max-width: 755px) {
            width: 100%;
            max-width: none;
            margin-top: 0;
        }
        @media (max-width: 455px) {
            padding: 13px 13px;
            font-size: 16px;
            line-height: 17px;
            height: auto;
        }
    `,
}

export default freeLessonCSS