import React from 'react';
import './About.scss';
import './About.responsive.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faGuitar, faLightbulb, faMusic, faPencilRuler, faPhone } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
        <section id="about-me" className="min-height">
            <div className="background">
                <div className="left-bg"></div>
                <div className="right-bg"></div>
            </div>
            <div className="content wrapper">
                <div className="left">
                    <h4>
                        Soy un Guitarrista Flamenco malagueño <span className="title">Sobre mí</span>
                    </h4>
                    <div className="section-body">
                        <p>
                            Suelo trabajar por Málaga y alrededores. En mi trabajo diario me encargo de impartir clases
                            de guitarra flamenca, desarrollo de espectáculos flamencos, acompañamientos musicales y
                            todo tipo de eventos relacionados con el mundo del espectáculo y la música.
                        </p>
                        <p>
                            Mi trayectoria como guitarrista me enseña que todo nuevo reto significa una 
                            oportunidad para aprender y crecer como profesional y como persona. Esto me hace 
                            ofrecer la máxima calidad y poner todo el cariño a cada uno de mis proyectos.
                        </p>
                        <p>Siempre estoy experimentando, innovando y nunca me canso de aprender.</p>
                    </div>
                    <ul className="rrss">
                        <li>
                            <a href="https://www.instagram.com/bedmarpariente/" title="Julian Bedmar" target="_blank">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/julian.bedmarpariente/" title="Julian Bedmar" target="_blank">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+34600568615" title="Julian Bedmar" target="_blank">
                                <FontAwesomeIcon icon={faPhone}/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <ul className="skills">
                        <li>
                            <FontAwesomeIcon icon={faGuitar}/>
                            <span className="title">Guitarra Flamenca</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCalendar}/>
                            <span className="title">Eventos & Celebraciones</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMusic}/>
                            <span className="title">Acompañamiento musical</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLightbulb}/>
                            <span className="title">Espectáculos & Shows</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPencilRuler}/>
                            <span className="title">Clases particulares</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
};