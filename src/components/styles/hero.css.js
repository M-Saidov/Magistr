import styled from "styled-components";
import mainCSS from "./main.css";
import Back from '../../img/BlockHero/lines.png'

const heroCSS = {
    Hero: styled(mainCSS.NewSection)`
        position: relative;
        margin-top: 86px;
        background: url(${Back}) center bottom no-repeat;
        height: 606px;
        @media (max-width: 992px){
            background: url(${Back}) center 0 no-repeat;
            height:auto;
            padding-bottom: 50px;
        }
        @media (max-width: 420px){
            background: url(${Back}) center -70px no-repeat;
            padding-bottom: 35px;
        }
    `,
    HeroContainer: styled(mainCSS.NewSectionContainer)`
        align-items: start;
        justify-content: start;
        @media (min-width: 1600px){
            position: relative;
        }
        @media (max-width: 992px){
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center; 
        }
    `,
    HeroTrigger: styled.div`
        position: absolute;
        top: 0;
    `,
    Info: styled.div`
        z-index: 1;
        @media (max-width: 992px){
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `,
    Title: styled.div`
        /* margin: 0 0 15px 0; */
        color: rgb(0, 0, 0);
        font-size: 7vw;
        font-weight: 800;
        line-height: 7vw;
        letter-spacing: 0.62rem;
        text-transform: uppercase;
        @media (min-width: 1600px){
            font-size:9.5rem;
            line-height:9.5rem;
        }
        @media (max-width: 600px){
            font-size: 9vw;
            line-height: 9vw;
            letter-spacing: 0.42rem;
        }
    `,
    Subtitle: styled.div`
        margin: 9px 0 0 83px;
        color: rgb(0, 0, 0);
        font-size: 2.2vw;
        font-style: italic;
        font-weight: 300;
        line-height: 2.2vw;
        letter-spacing: 0.08rem;
        @media (min-width: 1600px){
            font-size:2.5rem;
            line-height:2.5rem;
        }
        @media (max-width: 992px){
            font-size: 14.95px;
            margin: 9px 0 8px 0;
        }
        @media (max-width: 350px){
            font-size: 12px;
        }
    `,
    HeroImg: styled.div`
        position: absolute;
        width: calc(100% * (573 / 1440));
        right: 85px;
        top: 10px;
        img{
            width: 100%;
        }
        @media (max-width: 992px){
            position: inherit;
            width: 55%;
        }
        @media (max-width: 700px){
            width: 90%;
        }
        @media (max-width: 425px){
            width: 100%;
        }
    `,
    Arrow: styled.div`
    /* background-color: #fff; */
        position: absolute;
        display: flex;
        justify-content: center;
        width: 40px;
        bottom: 0;
        right: 50%;
        transform: translateX(50%);
        cursor: pointer;
        @media (max-width: 992px){
            img{
                width: 27px;
            }
        }
        @media (max-width: 425px){
            img{
                width: 17px;
            }
        }
    `,
}

export default heroCSS