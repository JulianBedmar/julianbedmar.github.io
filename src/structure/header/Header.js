import React from 'react';
import './Header.scss';
import './Header.responsive.scss';

export default () => {
    return (
        <section id="header" className="wrapper">
            <div className="left">
                <div className="content">
                    <h4>Hola, soy</h4>
                    <h1>Julian Bedmar</h1>
                    <div className="Typewriter">Guitarrista Flamenco</div>
                </div>
                <img src="assets/images/header/1.png" alt="figura" className="float-image"/>
                <img src="assets/images/header/10.png" alt="figura" className="float-image"/>
                <img src="assets/images/header/2.png" alt="figura" className="float-image"/>
                <img src="assets/images/header/3.png" alt="figura" className="float-image"/>
                <img src="assets/images/header/4.png" alt="figura" className="float-image"/>
                <img src="assets/images/header/5.png" alt="figura" className="float-image"/>
                <img src="assets/images/header/6.png" alt="figura" className="float-image"/>
                <img src="assets/images/header/7.png" alt="figura" className="float-image"/>
                <img src="assets/images/header/8.png" alt="figura" className="float-image"/>
                <img src="assets/images/header/9.png" alt="figura" className="float-image"/>
            </div>
            <div className="right">
                <div className="figure"></div>
            </div>
        </section>
    )
};