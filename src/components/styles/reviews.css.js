import styled from "styled-components";
import mainCSS from "./main.css";

const reviewsCSS = {
    Reviews: styled(mainCSS.NewSection)`

    `,
    ReviewsContainer: styled(mainCSS.NewSectionContainer)`

    `,
    Title: styled(mainCSS.Title)`
        margin-bottom: 32px;
    `,
    SliderWrapper: styled.div`
        display: flex;
        overflow: hidden;
        /* background-color: red; */
        max-width: 90%;
        height: 410px;
        @media (max-width: 595px) {
            height: 300px;
            max-width: 110%;
        }
    `,
    SliderItem: styled.div`
        aspect-ratio: 1 / 1;
        height: 380px;
        margin: 15px 18px;
        border-radius: 31px;
        overflow: hidden;
        box-shadow: 0px 4px 8.6px 0px rgba(0, 0, 0, 0.25);
        img{
            width: 100%;
        }
        @media (max-width: 595px) {
            height: 270px;
            margin: 15px 0;
        }
    `,

}

export default reviewsCSS