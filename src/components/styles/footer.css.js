import styled from "styled-components";


const footerCSS = {
    Footer: styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 486px;
        padding: 35px 40px;
        margin-top: auto;
        border-radius: 40px 40px 0px 0px;
        box-shadow: 0px 0px 9.8px 0px rgba(0, 0, 0, 0.29);
        background: rgb(255, 255, 255);
        z-index: 900;
        @media (max-width: 992px) { 
            height: auto;
        }
        @media (max-width: 425px) {
            padding: 35px 20px;
        }
    `,
    FooterContainer: styled.div`
        height: 100%;
        width: 100%;
        max-width: 1440px;
        position: relative;
        display: flex;
        justify-content: space-between;
        @media (max-width: 992px) { 
            flex-direction: column;
        }

    `,
    Logo: styled.div`
        min-width: 132px;
        height: fit-content;
        margin-right:50px;
        img{
            width: 100%;
        }
        @media (max-width: 992px) { 
            min-width: auto;
            width: 100%;
            margin-bottom: 34px;
        }
    `,
    InfoContainer: styled.div`
        display: flex;
        justify-content: space-between;
        max-width: 345px;
        height: fit-content;
    `,
    Nav: styled.div`
        margin-right: 40px;
        h3{
            
            color: rgb(139, 139, 139);
            font-size: 22.65px;
            font-weight: 600;
            line-height: 28px;
        }
        @media (max-width: 992px) { 
            display: none;
        }
    `,
    NavPointsCont: styled.div`
        margin-top: 25px;
    `,
    NavPoint: styled.div`
        margin-bottom: 9px;
        color: rgb(0, 0, 0);
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        cursor: pointer;
    `,
    Adress: styled.div`
        h3{
            margin-bottom: 51px;
            color: rgb(139, 139, 139);
            font-size: 22.65px;
            font-weight: 600;
            line-height: 28px;
        }
        span{
            display: block;
            color: rgb(0, 0, 0);
            font-size: 14px;
            font-weight: 500;
            line-height: 17px;
            cursor: pointer;
        }
        @media (max-width: 992px) { 
            margin-bottom: 11px;
            h3{
                margin-bottom: 8px;
                font-size: 16.75px;
                font-weight: 600;
                line-height: 20px;
            }
            span{
                font-size: 12.15px;
                font-weight: 300;
                line-height: 15px;
            }
        }
    `,
    Contacts: styled.div`
        position: absolute;
        bottom: 0;
        display: flex;
        width: 100%;
        max-width: 265px;
        justify-content: space-between;
        a{
            img{
                width: 56px;
            }
        }
        @media (max-width: 992px) {
            position: inherit;
        }
    `,
    Map: styled.div`
        flex-grow: 1;
        margin-left: 40px;
        width: 42%;
        @media (max-width: 992px) {
            margin-left: 0;
            margin-bottom: 16px;
            width: 100%;
            aspect-ratio: 2 / 1;
        }
        @media (max-width: 425px) {
            aspect-ratio: 1 / 1;
        }
    `,
}

export default footerCSS