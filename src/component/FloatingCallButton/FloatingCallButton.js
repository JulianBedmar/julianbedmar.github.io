import React from 'react';
import './FloatingCallButton.scss';
import './FloatingCallButton.responsive.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
        <div id="floatingCallButton">
            <a href="tel:+34600568615" title="Julian Bedmar" target="_blank">
                <FontAwesomeIcon icon={faPhone}/>
            </a>
        </div>
    )
}