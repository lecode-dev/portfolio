import React from 'react';
import { LogoEffect } from './styles';
import Logo from '../../assets/images/logo-clean.png';

function AboutImg() {
    return(
        <LogoEffect>
            <div className="outer-box1">
                <div className="outer-box2">
                    <div className="outer-box3">
                        <img src={Logo} alt="LeCode Logo"/>
                    </div>
                </div>
            </div>
        </LogoEffect>
    )
}

export default AboutImg;