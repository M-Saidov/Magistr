import React, { useEffect, useRef } from "react"
import { useDispatch} from "react-redux";
import { setActiveButton } from "../../redux-state/reduces/header";
import mainCSS from "../styles/main.css";
import Hero from "../blocks/Hero";
import BestTeachers from "../blocks/BestTeachers";
import Advantages from "../blocks/Advantages";
import Subjects from "../blocks/Subjects";
import Reviews from "../blocks/Reviews";
import FreeLesson from "../blocks/FreeLesson";
import Chat from '../../img/Body/Chat.svg';

const Body = () => {
    const dispatch = useDispatch();
    const sectionsRef = useRef([]);

    useEffect(() => {
        if (typeof window.IntersectionObserver !== 'undefined') {
            const scrollObserver = new IntersectionObserver(
                (entries) => {
                    let observedEntries = [];
                    entries.forEach((entry) => {
                        // Проверяем, что элемент пересекает верхнюю половину экрана
                        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                            let curIndex;
                            sectionsRef.current.forEach((sec, index) => {
                                if (entry.target === sec) curIndex = index;
                            });
                            if (curIndex !== undefined) {
                                observedEntries.push([entry, curIndex]);
                            }
                        }
                    });

                    // Выбираем первую секцию, которая находится в верхней половине экрана
                    if (observedEntries.length > 0) {
                        dispatch(setActiveButton(observedEntries[0][1]));
                    }
                },
                {
                    root: null,
                    rootMargin: '0px 0px -80%', // Отслеживаем только верхние 20%
                    threshold: 0.5,
                }
            );

            sectionsRef.current.forEach(section => {
                scrollObserver.observe(section);
            })
            return () => {
                scrollObserver.disconnect();
            };
        }

    }, [sectionsRef.current]);

    const addToRefs = (el, index) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current[index] = el;
        }
    }

    return (
        <>
            <mainCSS.Body>
                <Hero ref={el => addToRefs(el, 0)}/>
                <BestTeachers />
                <Advantages ref={el => addToRefs(el, 1)}/>
                <Subjects ref={el => addToRefs(el, 2)}/>
                <Reviews ref={el => addToRefs(el, 3)}/>
                <FreeLesson ref={el => addToRefs(el, 4)} />
                {true && <mainCSS.Chat href="https://wa.me/79289785785?text=Здравствуйте!%20Хочу%20записаться%20к%20вам%20на%20пробное%20занятие." target="_blank" rel="noopener noreferrer">
                    <img src={Chat} alt="" />
                </mainCSS.Chat>}
            </mainCSS.Body>
        </>
    );
}

export default Body