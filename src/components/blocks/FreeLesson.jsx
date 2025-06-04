import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import freeLessonCSS from "../styles/freeLesson";
import Desktop from "../../img/BlockFreeLesson/desktop.png";
import Mobile from "../../img/BlockFreeLesson/mobile.png";

const FreeLesson = forwardRef((props, ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));

    return (
        <>
            <freeLessonCSS.FreeLesson $pad={sectionPadding}>
                <freeLessonCSS.FreeLessonContainer $backDesktop={Desktop} $backMobile={Mobile}>
                    <freeLessonCSS.Title>
                        Давайте познакомимся
                    </freeLessonCSS.Title>
                    <freeLessonCSS.Subtitle>Приходите к нам на бесплатное пробное занятие</freeLessonCSS.Subtitle>
                    <freeLessonCSS.LetsGoButton ref={ref} id='contacts' href="https://wa.me/79289785785?text=Здравствуйте!%20Хочу%20записаться%20к%20вам%20на%20пробное%20занятие." target="_blank" rel="noopener noreferrer"><span>Конечно приду!</span></freeLessonCSS.LetsGoButton>
                </freeLessonCSS.FreeLessonContainer>
            </freeLessonCSS.FreeLesson>
        </>
    );
});

export default FreeLesson