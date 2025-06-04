import React from "react";
import { useSelector } from "react-redux"
import bestCSS from "../styles/best.css";
import Student from "../../img/BlockBest/student.png"

const BestTeachers = () => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));


    return (
        <>
            <bestCSS.Best $pad={sectionPadding}>
                <bestCSS.BestContainer>
                    <bestCSS.Title id='best'>Подготовка с лучшими преподавателями!</bestCSS.Title>
                    <bestCSS.CoursesContainer>
                        <bestCSS.Course>ЕГЭ</bestCSS.Course>
                        <bestCSS.Course>ОГЭ</bestCSS.Course>
                        <bestCSS.Course>Дошкольная подготовка</bestCSS.Course>
                        <bestCSS.Course>Математика</bestCSS.Course>
                        <bestCSS.Course>Русский язык</bestCSS.Course>
                        <bestCSS.Course>Английский язык</bestCSS.Course>
                        <bestCSS.Course>Каллиграфия</bestCSS.Course>
                        <bestCSS.Course>Скорочтение</bestCSS.Course>
                    </bestCSS.CoursesContainer>
                        <bestCSS.PriceButton href="https://wa.me/79289785785?text=Здравствуйте!%20Подскажите,%20пожалуйста,%20стоимость%20обучения%20в%20вашем%20центре." target="_blank" rel="noopener noreferrer"><span>Узнать стоимость</span></bestCSS.PriceButton>
                    <bestCSS.Stud>
                        <img src={Student} alt="" />
                        
                    </bestCSS.Stud>
                </bestCSS.BestContainer>
            </bestCSS.Best>
        </>
    );
}

export default BestTeachers