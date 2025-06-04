import React, { useState, forwardRef } from "react";
import { useSelector } from "react-redux"
import subjectsCSS from "../styles/subjects.css";
import Boy from "../../img/BlockSubjects/boy.png"
import CrossImg from "../../img/BlockSubjects/cross.svg"

const Cross = () => {
    return (
        <>
            <img src={CrossImg} alt="" />
        </>
    )
}

const Subjects = forwardRef((props, ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));
    const [isActive, setIsActive] = useState([0, 0, 0, 0, 0]);
    const ChangeOpenedPoints = (index) => {
        setIsActive(
            prev => {
                const newStates = [...prev];
                newStates[index] = !newStates[index];
                console.log('eee');
                return newStates;
            }
        )
    }

    return (
        <>
            <subjectsCSS.Subjects $pad={sectionPadding}>
                <subjectsCSS.Title ref={ref} id='catalog'>Направления подготовки</subjectsCSS.Title>
                <subjectsCSS.SubjectsContainer>
                    <subjectsCSS.Desk>
                        <subjectsCSS.InnerTitle>Направления обучения</subjectsCSS.InnerTitle>
                        <subjectsCSS.InnerSubtitle>Выбирай предмет — готовься с лучшими преподавателями</subjectsCSS.InnerSubtitle>
                    </subjectsCSS.Desk>
                    <subjectsCSS.InnerImg src={Boy} alt=""></subjectsCSS.InnerImg>
                    <subjectsCSS.PointsWrapper>
                        <subjectsCSS.Point $active={isActive[0]} onClick={() => { ChangeOpenedPoints(0) }}>
                            <subjectsCSS.PointTop>
                                <span>Подготовка к ЕГЭ и ОГЭ</span>
                                <Cross $active={isActive} />
                            </subjectsCSS.PointTop>
                            <subjectsCSS.PointMain>
                                <p><span>Готовим к любому уровню сложности.</span> <br />
                                    Мы помогаем школьникам уверенно подготовиться к выпускным экзаменам — ЕГЭ и ОГЭ — по всем основным предметам: русский язык, математика, общество, история, физика, химия, биология, английский и другие.Наши преподаватели — опытные педагоги и эксперты с реальным пониманием экзаменационных требований.</p>
                                <p>
                                    <span>Что входит в курс:</span><br />
                                    • Диагностика уровня знаний<br />
                                    • Индивидуальный план подготовки<br />
                                    • Решение заданий всех уровней сложности<br />
                                    • Отработка структуры экзамена и тайм-менеджмента<br />
                                    • Регулярные пробные экзамены<br />
                                </p>
                                <p><span>Результат:</span> повышение баллов, уверенность на экзамене и поступление в желаемый вуз или колледж.</p>
                            </subjectsCSS.PointMain>
                        </subjectsCSS.Point>
                        <subjectsCSS.Point $active={isActive[1]} onClick={() => { ChangeOpenedPoints(1) }}>
                            <subjectsCSS.PointTop>
                                <span>Репетиторство по всем школьным предметам</span>
                                <Cross $active={isActive} />
                            </subjectsCSS.PointTop>
                            <subjectsCSS.PointMain>
                                <p><span>Мы помогаем ученикам 1–11 классов</span> по всем школьным предметам. Занятия подходят как для устранения пробелов, так и для углублённого изучения материала.</p>
                                <p>
                                    <span>Что предлагаем:</span><br />
                                    • Индивидуальный подход к каждому ученику<br />
                                    • Понятные объяснения сложных тем<br />
                                    • Поддержка по текущей школьной программе<br />
                                    • Помощь с домашними заданиями, проектами и контрольными работами
                                </p>
                                <p><span>Цель:</span> уверенность в себе и стабильная успеваемость в школе.</p>
                            </subjectsCSS.PointMain>
                        </subjectsCSS.Point>
                        <subjectsCSS.Point $active={isActive[2]} onClick={() => { ChangeOpenedPoints(2) }}>
                            <subjectsCSS.PointTop>
                                <span>Курсы английского языка</span>
                                <Cross $active={isActive} />
                            </subjectsCSS.PointTop>
                            <subjectsCSS.PointMain>
                                <p><span>Английский — это ключ к будущему.</span> Мы обучаем детей, подростков и взрослых с любым уровнем подготовки — от начального до продвинутого.</p>

                                <p>
                                    <span>Программы:</span><br />
                                    • Общий английский (разговор, грамматика, письмо, аудирование)<br />
                                    • Подготовка к экзаменам (ОГЭ, ЕГЭ, IELTS, TOEFL)<br />
                                    • Английский для школьников<br />
                                    • Разговорные клубы и интенсивы
                                </p>

                                <p>
                                    <span>Преимущества:</span><br />
                                    • Современные методики<br />
                                    • Опытные преподаватели<br />
                                    • Аутентичные материалы<br />
                                    • Возможность занятий в мини-группах или индивидуально
                                </p>
                            </subjectsCSS.PointMain>
                        </subjectsCSS.Point>
                        <subjectsCSS.Point $active={isActive[3]} onClick={() => { ChangeOpenedPoints(3) }}>
                            <subjectsCSS.PointTop>
                                <span>Дошкольная подготовка</span>
                                <Cross $active={isActive} />
                            </subjectsCSS.PointTop>
                            <subjectsCSS.PointMain>
                                <p><span>Курс создан для детей 4–6 лет</span> и помогает малышу мягко и грамотно подготовиться к школе.</p>

                                <p>
                                    <span>Включает:</span><br />
                                    • Развитие речи, логики и внимания<br />
                                    • Обучение чтению, письму и счёту<br />
                                    • Творческие задания и игры<br />
                                    • Социальная адаптация и навыки общения
                                </p>

                                <p><span>Подача материала:</span> в игровой форме, с учетом возраста и индивидуальных особенностей ребёнка.</p>

                                <p><span>Цель:</span> сформировать у ребенка любовь к учёбе и уверенность перед школой.</p>
                            </subjectsCSS.PointMain>
                        </subjectsCSS.Point>
                        <subjectsCSS.Point $active={isActive[4]} onClick={() => { ChangeOpenedPoints(4) }}>
                            <subjectsCSS.PointTop>
                                <span>Скорочтение и каллиграфия</span>
                                <Cross $active={isActive} />
                            </subjectsCSS.PointTop>
                            <subjectsCSS.PointMain>
                                <p><span>Этот курс развивает важные учебные навыки</span> — быстрое чтение и красивое письмо — у детей младшего и среднего школьного возраста.</p>

                                <p>
                                    <span>Скорочтение помогает:</span><br />
                                    • Увеличить скорость чтения в 2–3 раза<br />
                                    • Улучшить понимание и запоминание текста<br />
                                    • Развить внимание и концентрацию
                                </p>

                                <p>
                                    <span>Каллиграфия помогает:</span><br />
                                    • Сделать почерк аккуратным и разборчивым<br />
                                    • Улучшить мелкую моторику<br />
                                    • Повысить грамотность через осознанное письмо
                                </p>

                                <p><span>Результат:</span> ребёнок читает быстрее, пишет чище и увереннее выполняет учебные задания.</p>
                            </subjectsCSS.PointMain>
                        </subjectsCSS.Point>
                    </subjectsCSS.PointsWrapper>
                </subjectsCSS.SubjectsContainer>
            </subjectsCSS.Subjects>
        </>
    );
});

export default Subjects