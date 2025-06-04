import styled from "styled-components";
import mainCSS from "./main.css";
import Back from "../../img/BlockBest/background.png";

const bestCSS = {
    Best: styled(mainCSS.NewSection)``,
    BestContainer: styled(mainCSS.NewSectionContainer)`
        position: relative;
        background: url(${Back}) center/cover no-repeat;
        justify-content: start;
        align-items: start;
        border-radius: 34px;
        padding: 46px 70px;
        @media (max-width: 755px) {
            justify-content: center;
            align-items: center;
            padding: 20px 25px;
        }
    `,
    Title: styled(mainCSS.Title)`
        color: rgb(255, 255, 255);
        max-width: 602px;
        z-index: 1;
        @media (max-width: 755px) {
            font-size: 26px;
            line-height: 27px;
        }
        @media (max-width: 410px) {
            font-size: 17px;
            line-height: 18px;
        }
    `,
    CoursesContainer: styled.div`
        max-width: 602px;
        margin: 81.5px 0;
        z-index: 1;
        @media (max-width: 755px) {
            margin: 21.5px 0;
        }
    `,
    Course: styled.div`
        display: inline-block;
        padding: 8px 12px;
        margin: 7.5px 10px;
        border-radius: 51px;
        backdrop-filter: blur(12.8px);
        -webkit-backdrop-filter: blur(12.8px);
        background: rgba(0, 163, 90, 0.3);
        color: rgb(255, 255, 255);
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.038rem;
        &:last-child{margin-right: 0px;}
        @media (max-width: 755px) {
            font-size: 13px;
            line-height: 14px;
        }
        @media (max-width: 755px) {
            margin: 4.5px 7px;
        }
    `,
    PriceButton: styled.a`
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
        @media (max-width: 940px) {
            z-index: 1;
        }
        @media (max-width: 755px) {
            width: 100%;
            max-width: none;
        }
        @media (max-width: 410px) {
            padding: 13px 13px;
            font-size: 16px;
            line-height: 17px;
            height: auto;
        }
    `,
    Stud: styled.div`
        position: absolute;
        right: 0px;
        bottom: 0;
        pointer-events: none;
        img{
                width: 100%;
            }
        @media (max-width: 992px) {
            right: -50px;
        }
        @media (max-width: 940px) {
            width: 456px;
        }
        @media (max-width: 755px) {
            position: relative;
            bottom: -20px;
            width: 80%;
            right: auto;
        }
        
    `,

}

export default bestCSS