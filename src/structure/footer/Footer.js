import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default () => {
    const year = new Date().getFullYear();

    return (
        <section id="footer" className="wrapper">
            <div className="content">
                <small> © {year} Julian Bedmar - Todos los derechos reservados. Sígueme en: 
                    <a href="https://www.instagram.com/bedmarpariente/" title="Julian Bedmar" target="_blank">
                        <FontAwesomeIcon icon={faInstagram}/>
                        <span>bedmarpariente</span>
                    </a>
                    <a href="https://www.facebook.com/julian.bedmarpariente/" title="Julian Bedmar" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF}/>
                        <span>Julian Bedmar Pariente</span>
                    </a>
                    <a href="tel:+34600568615" title="Julian Bedmar" target="_blank">
                        <FontAwesomeIcon icon={faPhone}/>
                        <span>+34 600 568 615</span>
                    </a>
                </small>
            </div>
        </section>
    )
};