import React from "react";

const NavButtonHOC = (ButtonComponent) => {
    
    return (props) => {
        const {children} = props;
        const name = props.name;
        const isActive = props.isActive;
        const href = props.href;

        const smoothScroll = (event) => {
            event.preventDefault(); // Отменяем стандартное поведение ссылки
            const targetId = event.currentTarget.getAttribute('href');

            if (targetId) {
                const anchor = document.querySelector(targetId);
                if (anchor) {
                    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                    const targetPosition = anchor.getBoundingClientRect().top + currentScrollPosition;
                    const scrollDistance = targetPosition - currentScrollPosition - 90;
                    window.scrollBy({
                        top: scrollDistance, 
                        behavior: 'smooth',
                    });
                }
            }
        }
        return (
            <ButtonComponent $focus={isActive} onClick={smoothScroll} href={href}>
                    {children}
            </ButtonComponent>
        )
        

    }
}

export default NavButtonHOC