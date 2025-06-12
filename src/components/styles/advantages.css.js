import styled from "styled-components";
import mainCSS from "./main.css";

const advantagesCSS = {
    Advantages: styled(mainCSS.NewSection)`

    `,
    AdvantagesContainer: styled(mainCSS.NewSectionContainer)`
        display: grid;
        min-height: 705.96px;
        /* height: 444px; */
        /* grid-template-rows: 37% 26% 37%; */
        grid-template-rows: 1fr 0.7fr 1fr;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 26px;
        row-gap: 20px;
        @media (max-width: 768px) {
            display: flex;
        }
    `,
    Title: styled(mainCSS.Title)`
        margin-bottom: 17px;
    `,
        
    Block: styled.div`
        position: relative;
        width: 100%;
        height: 100%;
        padding: 35px 32px;
        border-radius: 38px;
        overflow: hidden;
        background: ${({ $back }) => $back 
            ? `url(${$back}) center/cover no-repeat`
            : 'rgb(192, 106, 238)'
        };
        &:first-child{
            grid-row: span 2;
        }
        &:nth-child(2),
        &:nth-child(3) {
            img{
                right: -10px;
                bottom: -40px;
            }
        }
        @media (max-width: 840px) {
            &:first-child{
                img{
                    bottom: -60px;
                }
            }
        }
        @media (max-width: 768px) {
            &:first-child{
                img{
                    bottom: 0px;
                    width: 157px;
                }
            }
            &:nth-child(2),
            &:nth-child(3) {
                img{
                    width: 190px;
                    bottom: -20px;
                }
            }
            &:nth-child(4),
            &:nth-child(5) {
                img{
                    width: 190px;
                }
            }
        }
        
    `,
    BlockImg: styled.img`
        position: absolute;
        right: 0;
        bottom: 0;
    `,
    BlockTitle: styled.div`
        /* max-width: 70%; */
        margin-bottom: 22px;
        color: rgb(255, 255, 255);
        font-size: 20.24px;
        font-weight: 700;
        line-height: 22px;
        @media (max-width: 425px) {
            font-size: 14.7px;
            line-height: 15.5px;
            margin-bottom: 17px;
        }
    `,
    BlockDesk: styled.div`
        max-width: 70%;
        position: relative;
        margin-bottom: 16px;
        color: rgb(255, 255, 255);
        font-size: 16px;
        font-weight: 250;
        line-height: 17px;
        text-indent: 20px;
        span{
            font-weight: 550;
        }
        &:before{
            position: absolute;
            content: '';
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: rgb(255, 255, 255);
            top: 8px;
            left: 9px;
            transform: translateY(-50%);
            @media (max-width: 425px) {
                top: 6px;
        }
        }
        @media (max-width: 840px) {
            max-width: 100%;
        }
        @media (max-width: 768px) {
            max-width: 70%;
        }
        @media (max-width: 425px) {
            font-size: 11.68px;
            line-height: 14.5px;
            margin-bottom: 12px;
        }
    `,
    

}

export default advantagesCSS