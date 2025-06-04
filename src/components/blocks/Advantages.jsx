import React, { forwardRef } from "react";
import { useSelector } from "react-redux"
import advantagesCSS from "../styles/advantages.css";
import First from "../../img/BlockAdvantages/1.png"
import Man from "../../img/BlockAdvantages/man.png"
import Cub from "../../img/BlockAdvantages/cub.png"
import Sto from "../../img/BlockAdvantages/100.png"

const Advantages = forwardRef((props, ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));

    return (
        <>
            <advantagesCSS.Advantages $pad={sectionPadding}>
                <advantagesCSS.Title ref={ref} id="advantages">Почему выбирают нас?</advantagesCSS.Title>
                <advantagesCSS.AdvantagesContainer>
                    <advantagesCSS.Block $back={First}>
                        <advantagesCSS.BlockImg src={Man} alt="" />
                        <advantagesCSS.BlockTitle>
                            Преподаватели — эксперты
                        </advantagesCSS.BlockTitle>
                        <advantagesCSS.BlockDesk>
                            <span>Опытные педагоги</span> с профильным образованием и стажем от 5 до 20 лет
                        </advantagesCSS.BlockDesk>
                        <advantagesCSS.BlockDesk>
                            <span>Эксперты ЕГЭ и ОГЭ</span>, которые знают все нюансы экзаменов
                        </advantagesCSS.BlockDesk>
                        <advantagesCSS.BlockDesk>
                            <span>Методисты</span>, разрабатывающие собственные авторские программы
                        </advantagesCSS.BlockDesk>
                        <advantagesCSS.BlockDesk>
                            <span>Наставники</span>, которые находят подход к каждому ученику — от первоклассника до выпускника
                        </advantagesCSS.BlockDesk>
                    </advantagesCSS.Block>
                    <advantagesCSS.Block>
                        <advantagesCSS.BlockImg src={Cub} alt="" />
                        <advantagesCSS.BlockTitle>
                            Индивидуальный подход к каждому ученику
                        </advantagesCSS.BlockTitle>
                        <advantagesCSS.BlockDesk>
                            <span>Психологическая поддержка</span> — умеем снять страх перед экзаменом, повысить мотивацию и уверенность
                        </advantagesCSS.BlockDesk>
                        <advantagesCSS.BlockDesk>
                            <span>Современные методики</span> — используем интерактивные задания, цифровые ресурсы, игровые и визуальные техники
                        </advantagesCSS.BlockDesk>
                        <advantagesCSS.BlockDesk>
                            <span>Живой интерес к обучению</span> — мы учим думать, понимать и применять знания
                        </advantagesCSS.BlockDesk>
                    </advantagesCSS.Block>
                    <advantagesCSS.Block>
                        <advantagesCSS.BlockImg src={Sto} alt="" />
                        <advantagesCSS.BlockTitle>
                            Почему нам доверяют?
                        </advantagesCSS.BlockTitle>
                        <advantagesCSS.BlockDesk>
                            <span>Результаты говорят сами за себя</span>: наши ученики сдают ЕГЭ и ОГЭ на высокие баллы, поступают в вузы, выигрывают олимпиады
                        </advantagesCSS.BlockDesk>
                    </advantagesCSS.Block>
                </advantagesCSS.AdvantagesContainer>
            </advantagesCSS.Advantages>
        </>
    );
});

export default Advantages