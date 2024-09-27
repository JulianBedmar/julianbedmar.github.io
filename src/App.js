import React from 'react';
import Header from './structure/header/Header';
import About from './structure/about/About';
import Footer from './structure/footer/Footer';
import './App.scss';
import './App.responsive.scss';
import FloatingCallButton from './component/FloatingCallButton/FloatingCallButton';

export default () => {
    return (
        <div>
            <Header/>
            <About/>
            <Footer/>
            <FloatingCallButton/>
        </div>
    )
};