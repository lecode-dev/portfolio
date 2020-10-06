import React from 'react';
import { LogoEffect } from './styles';
import Logo from '../../assets/images/logo-clean.png';

function AboutImg() {
    const effectAppear = () => {
        document.querySelector('.outer-box3').style.backgroundColor = 'rgb(0, 179, 118, 0.2)';
        document.querySelector('.outer-box3').style.border = '2px solid rgb(0, 179, 118, 0.2)';
        document.querySelector('.outer-box3').style.transition = 'all .3s';
        document.querySelector('.outer-box2').style.backgroundColor = 'rgb(0, 179, 118, 0.2)';
        document.querySelector('.outer-box2').style.border = '2px solid rgb(0, 179, 118, 0.2)';
        document.querySelector('.outer-box2').style.transition = 'all .5s';
        document.querySelector('.outer-box1').style.backgroundColor = 'rgb(0, 179, 118, 0.2)';
        document.querySelector('.outer-box1').style.border = '2px solid rgb(0, 179, 118, 0.2)';
        document.querySelector('.outer-box1').style.transition = 'all .7s';
    }

    const effectDisapear = () => {
        document.querySelector('.outer-box3').style.backgroundColor = 'rgb(231, 76, 60, 0.2)';
        document.querySelector('.outer-box3').style.border = '2px solid rgb(231, 76, 60, 0.2)';
        document.querySelector('.outer-box2').style.backgroundColor = 'rgb(231, 76, 60, 0.2)';
        document.querySelector('.outer-box2').style.border = '2px solid rgb(231, 76, 60, 0.2)';
        document.querySelector('.outer-box1').style.backgroundColor = 'rgb(231, 76, 60, 0.2)';
        document.querySelector('.outer-box1').style.border = '2px solid rgb(231, 76, 60, 0.2)';
    }

    return(
        <LogoEffect>
            <div className="outer-box1">
                <div className="outer-box2">
                    <div className="outer-box3">
                        <img src={Logo} alt="Logo" onMouseOver={effectAppear} onMouseOut={effectDisapear}/>
                    </div>
                </div>
            </div>
        </LogoEffect>
    )
}

export default AboutImg;