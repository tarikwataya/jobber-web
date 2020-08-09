import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import userIcon from '../../assets/images/icons/user.svg';
import serviceIcon from '../../assets/images/icons/service.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de prestação de serviços.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de Estudos" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={userIcon} alt="Estudar"/>
                        Cliente
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={serviceIcon} alt="Estudar"/>
                        Prestador
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;