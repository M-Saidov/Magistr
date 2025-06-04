import styled from "styled-components";
import mainCSS from "./main.css";
import Back from "../../img/BlockSubjects/background.png"

const subjectsCSS = {
    Subjects: styled(mainCSS.NewSection)`

    `,
    SubjectsContainer: styled(mainCSS.NewSectionContainer)`
        position: relative;
        justify-content: space-between;
        flex-direction: row;
        align-items: start;
        padding: 52px;
        background: url(${Back}) left/cover no-repeat;
        border-radius: 34px;
        background-color: rgb(67, 149, 231);
        overflow: hidden;
        @media (max-width: 1024px) {
            flex-direction: column;
        }
        @media (max-width: 768px) {
            padding: 32px;
        }
    `,
    Title: styled(mainCSS.Title)`
        margin-bottom: 17px;
    `,
    Desk: styled.div`
        max-width: 38%;
        min-height: 800px;
        text-align: left;
        @media (max-width: 1024px) {
            max-width: 100%;
            min-height: auto;
            margin-bottom: 20px;
        }
    `,
    InnerTitle: styled(mainCSS.Title)`
        color: rgb(255, 255, 255);
        font-size: 42.46px;
        line-height: 52px;
        margin-bottom: 30px;
        text-align: left;
        @media (max-width: 1200px) {
            font-size: 33px;
            line-height: 34px;
        }
        @media (max-width: 1024px) {
            margin-bottom: 15px;
        }
        @media (max-width: 425px) {
            font-size: 26px;
            line-height: 27px;
        }
    `,
    InnerSubtitle: styled.span`
        color: rgb(255, 255, 255);
        font-size: 20.9px;
        font-weight: 300;
        line-height: 25px;
        letter-spacing: 0.11rem;
        @media (max-width: 425px) {
            font-size: 17px;
            line-height: 20px;
        }
    `,
    InnerImg: styled.img`
        position: absolute;
        left: 0;
        bottom: -20px;
        user-select: none;
        @media (max-width: 1024px) {
            visibility: hidden;
            font-size: 33px;
            line-height: 34px;
        }
    `,
    PointsWrapper: styled.div`
        width: 60%;
        @media (max-width: 1024px) {
            width: 100%;
        }
    `,
    Point: styled.div`
        border-radius: 21px;
        background: rgb(255, 255, 255);
        padding: 20px 29px;
        margin-bottom: 20px;
        overflow: hidden;
        max-height: ${props => props.$active ? '500px' : '74px'};
        transition: all 0.2s linear;
        img{
            user-select: none;
            transition: all 0.2s linear;
            width: 34px;
            transform: ${props => props.$active ? 'rotate(-45deg)' : 'rotate(0deg)'};
        }
        &:last-child{
            margin-bottom: 0;
        }
        @media (max-width: 768px) {
            padding: 10px 19px;
            max-height: ${props => props.$active ? '500px' : '51px'};
        }
    `,
    PointTop: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 22px;
        span{
            color: rgb(0, 0, 0);
            font-size: 18.88px;
            font-weight: 500;
            line-height: 23px;
            letter-spacing: 0.09rem;
            @media (max-width: 768px) {
                font-size: 11px;
                line-height: 13px;
            }
            @media (max-width: 372px) {
                font-size: 9px;
                line-height: 11px;
            }
        }
        
        img{
            @media (max-width: 768px) {
                width: 16px;
            }
        }
        @media (max-width: 768px) {
            height: 31px;
            margin-bottom: 12px;
        }
        
    `,
    PointMain: styled.div`
        p{
            margin-bottom: 22px;
            color: rgb(0, 0, 0);
            font-size: 16.4px;
            font-weight: 275;
            line-height: 20px;
            letter-spacing: 0.082rem;
            text-align: left;
            span{
                font-weight: 400;
            }
            &:last-child{
                margin-bottom: 0;
            }
            @media (max-width: 768px) {
                font-size: 12.12px;
                line-height: 15px;
                margin-bottom: 10px;
            }
            @media (max-width: 372px) {
                font-size: 9px;
                line-height: 11px;
                font-weight: 325;
            }
        }
    `,
}

export default subjectsCSS