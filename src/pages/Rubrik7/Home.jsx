import "./home.css";
// import React from 'react';
import { useEffect, React } from 'react';

const Home =()=> {
    useEffect(() => {
        const menu01 = document.querySelector('.menu01');
        const menu01_hover = document.querySelector('.menu01_hover');
        const menu02 = document.querySelector('.menu02');
        const menu02_hover = document.querySelector('.menu02_hover');
        const menu03 = document.querySelector('.menu03');
        const menu03_hover = document.querySelector('.menu03_hover');
        const menu04 = document.querySelector('.menu04');
        const menu04_hover = document.querySelector('.menu04_hover');
        const menu05 = document.querySelector('.menu05');
        const menu05_hover = document.querySelector('.menu05_hover');
        const menu06 = document.querySelector('.menu06');
        const menu06_hover = document.querySelector('.menu06_hover');

        const mulaiButton = document.querySelector('.mulaiButton');
        mulaiButton.addEventListener('click', () => {
            bgHome.scrollIntoView({ behavior: 'smooth' });
        });
        mulaiButton.addEventListener('mouseover', () => {
            mulaiButton.style.cursor="pointer";
        });


        const bgHome = document.querySelector('.bgHome');
        const bgHomeCover = document.querySelector('.bgHomeCover');
        menu01.addEventListener('mouseover', () => {
            const rect = menu01.getBoundingClientRect();
            const menuWidth =window.getComputedStyle(menu01).width;
            window.screen.orientation.lock('landscape-primary')
            .then(() => {})
            .catch((error) => {
                console.error('An error occurred: ', error);
            });
            const xPosition = rect.x;
            const yPosition = rect.y;

            menu01_hover.style.left = xPosition *0.68 + 'px';
            menu01_hover.style.top = "11%";
            menu01_hover.style.width = menuWidth;
            menu01_hover.style.display = 'block';

            
            menu01.style.filter="brightness(120%)";
            menu01.style.transform="scale(1.1)";
            bgHome.classList.add('hover');
            bgHomeCover.classList.add('hover');
        });
        menu01.addEventListener('click', () => {
            window.location.href = '/rubrik1';
        });
        menu01.addEventListener('mouseout', () => {
            menu01.style.filter="brightness(100%)";
            menu01.style.transform="scale(1)";
            bgHome.classList.remove('hover');
            menu01_hover.style.display = 'none';
            bgHomeCover.classList.remove('hover');
        });
        menu02.addEventListener('mouseover', () => {
            const rect = menu02.getBoundingClientRect();
            const menuWidth =window.getComputedStyle(menu02).width;

            // Access the x and y properties
            const xPosition = rect.x;
            const yPosition = rect.y;

            menu02_hover.style.left = xPosition *0.43 + 'px';
            menu02_hover.style.top = "26%";
            menu02_hover.style.width = menuWidth;
            menu02_hover.style.display = 'block';

            menu02.style.filter="brightness(120%)";
            menu02.style.transform="scale(1.1)";
            bgHome.classList.add('hover');
            bgHomeCover.classList.add('hover');
        });
        menu02.addEventListener('mouseout', () => {
            menu02.style.filter="brightness(100%)";
            menu02.style.transform="scale(1)";
            bgHome.classList.remove('hover');
            menu02_hover.style.display = 'none';
            bgHomeCover.classList.remove('hover');
        });

        menu03.addEventListener('mouseover', () => {
            const rect = menu03.getBoundingClientRect();
            const menuWidth =window.getComputedStyle(menu06).width;

            // Access the x and y properties
            const xPosition = rect.x;
            const yPosition = rect.y;

            menu03_hover.style.left = xPosition - xPosition *1.3 + 'px';
            menu03_hover.style.top = "12%";
            menu03_hover.style.width = "22%";
            menu03_hover.style.display = 'block';

            
            menu03.style.filter="brightness(120%)";
            menu03.style.transform="scale(1.1)";
            bgHome.classList.add('hover');
            bgHomeCover.classList.add('hover');
        });
        menu03.addEventListener('mouseout', () => {
            menu03.style.filter="brightness(100%)";
            menu03.style.transform="scale(1)";
            bgHome.classList.remove('hover');
            menu03_hover.style.display = 'none';
            bgHomeCover.classList.remove('hover');
        });

        menu04.addEventListener('mouseover', () => {
            const rect = menu04.getBoundingClientRect();

            // Access the x and y properties
            const xPosition = rect.x;
            const yPosition = rect.y;

            menu04_hover.style.left = xPosition *0.7 + 'px';
            menu04_hover.style.top = "40%";
            menu04_hover.style.width = "30%";
            menu04_hover.style.display = 'block';

            
            menu04.style.filter="brightness(120%)";
            menu04.style.transform="scale(1.1)";
            bgHome.classList.add('hover');
            bgHomeCover.classList.add('hover');
        });
        menu04.addEventListener('mouseout', () => {
            menu04.style.filter="brightness(100%)";
            menu04.style.transform="scale(1)";
            bgHome.classList.remove('hover');
            menu04_hover.style.display = 'none';
            bgHomeCover.classList.remove('hover');
        });

        menu05.addEventListener('mouseover', () => {
            const rect = menu05.getBoundingClientRect();
            const menuWidth =window.getComputedStyle(menu05).width;

            // Access the x and y properties
            const xPosition = rect.x;
            const yPosition = rect.y;

            menu05_hover.style.left = xPosition * 0.75 + 'px';
            menu05_hover.style.top = "-7.5%";
            menu05_hover.style.width = "30%";
            menu05_hover.style.display = 'block';

            
            menu05.style.filter="brightness(120%)";
            menu05.style.transform="scale(1.1)";
            bgHome.classList.add('hover');
            bgHomeCover.classList.add('hover');
        });
        menu05.addEventListener('mouseout', () => {
            menu05.style.filter="brightness(100%)";
            menu05.style.transform="scale(1)";
            bgHome.classList.remove('hover');
            menu05_hover.style.display = 'none';
            bgHomeCover.classList.remove('hover');
        });

        menu06.addEventListener('mouseover', () => {
            const rect = menu06.getBoundingClientRect();

            // Access the x and y properties
            const xPosition = rect.x;
            const yPosition = rect.y;

            menu06_hover.style.left = xPosition * 0.78 + 'px';
            menu06_hover.style.top = "29%";
            menu06_hover.style.width = "30%";
            menu06_hover.style.display = 'block';

            
            menu06.style.filter="brightness(120%)";
            menu06.style.transform="scale(1.1)";
            bgHome.classList.add('hover');
            bgHomeCover.classList.add('hover');
        });
        menu06.addEventListener('mouseout', () => {
            menu06.style.filter="brightness(100%)";
            menu06.style.transform="scale(1)";
            bgHome.classList.remove('hover');
            menu06_hover.style.display = 'none';
            bgHomeCover.classList.remove('hover');
        });

    },);

    return (
        <div className="homeSection">
            <div alt="" className="bgHomeCover">
                <img src="./images/home/budaya_budaya_indonesia.png" alt="" />
                <button className="mulaiButton">Mulai dari sini</button>
            </div>
            <div alt="" className="bgHome" id="bgHome">
                <div className="bgHomeContent">
                    <div className="menuAtas">
                        <img src="./images/home/menu03.png" alt="" className="menu03"/>   
                        <img src="./images/home/menu01.png" alt="" className="menu01"/>
                        <img src="./images/home/menu05.png" alt="" className="menu05"/>

                        <img src="./images/home/Menu03_1_hover.png" alt="" className="menu03_hover"/>   
                        <img src="./images/home/Menu01_1_hover.png" alt="" className="menu01_hover"/>
                        <img src="./images/home/Menu05_1_hover.png" alt="" className="menu05_hover"/>

                    </div>
                    <div className="menuBawah"> 
                        <img src="./images/home/menu02.png" alt="" className="menu02"/>
                        <img src="./images/home/menu04.png" alt="" className="menu04"/>
                        <img src="./images/home/menu06.png" alt="" className="menu06"/>

                        <img src="./images/home/Menu02_1_hover.png" alt="" className="menu02_hover"/>   
                        <img src="./images/home/Menu04_1_hover.png" alt="" className="menu04_hover"/>
                        <img src="./images/home/Menu06_1_hover.png" alt="" className="menu06_hover"/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;