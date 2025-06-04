import styled from "styled-components";

const mainCSS = {
    Body: styled.section`
        display: flex;
        flex-direction: column;
        width: 100%;
    `,
    NewSection: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        padding: 40px ${props => (props.$pad)};
        @media (max-width: 992px) {
            padding-top: 40px;
            padding-bottom: 40px;
        }
        @media (max-width: 992px) {
            padding-top: 30px;
            padding-bottom: 30px;
        }
        @media (max-width: 425px) {
            padding-top: 20px;
            padding-bottom: 20px;
        }
        /* background-color: red; */
        *{
            /* background-color: green; */
        } 
    `,
    NewSectionContainer: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        max-width: 1400px;
        *{
            /* background-color: blue; */
        }    
    `,
    Title: styled.h2`
        width: 100%;
        color: rgb(0, 0, 0);
        font-size: 37.47px;
        font-weight: 600;
        line-height: 38px;
        letter-spacing: 0.28rem;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 27.95px;
            line-height: 29px;
        }
        @media (max-width: 425px) {
            font-size: 20px;
            line-height: 22px;
        }
    `,
    Conclusion: styled.div`
        width: fit-content;
        color: rgb(0, 0, 0);
        font-size: 25.97px;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: 0.06rem;
        text-align: left;
        @media (max-width: 768px) {
            font-size: 22.95px;
            line-height: 23px;
        }
        @media (max-width: 425px) {
            font-size: 12.29px;
            line-height: 13px;
        }
    `,
    Slider: styled.div`
        width: 100%;
        height: 442px;
        margin: 70px 0;
        padding: 0 16px;
        @media (max-width: 1400px) {
            margin: 70px 30px;
        }
        @media (max-width: 665px) {
            margin: 30px 15px;
        }
    `,
    Chat: styled.a`
        position: fixed;
        right: 10px;
        bottom: 35px;
        width: 73px;
        height: 73px;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid white;
        z-index: 500;
        img{
            width: 100%;
        }
    `
}

export default mainCSS;