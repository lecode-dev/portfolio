import React from 'react';
import { Project } from './styles';
import { CustomSmallButton } from '../Button';
import ArrowIcon from '../../assets/images/arrow-right.svg';

function ProjRight({websiteName, websiteDesc, websiteImg, techArray}) {
    const descIn = () => {
        let siteDesc = document.querySelector('.desc');

        siteDesc.style.marginLeft = '-80px';
        siteDesc.style.transition = 'all .2s';
        siteDesc.style.borderTop = '0.6px solid rgb(0, 179, 118)';
    }

    const descOut = () => {
        let siteDesc = document.querySelector('.desc');

        siteDesc.style.marginLeft = '-150px';
        siteDesc.style.borderTop = '0.6px solid transparent';
    }

    const createList = () => {
        let rows = [];

        for(let i = 0; i < techArray.length; i++){
            rows.push(<li key={i}><img src={ArrowIcon} alt="Arrow icon"/>{techArray[i]}</li>)
        }; 

        return rows;
    }

    return (
        <Project>
            <img onMouseOver={descIn} onMouseOut={descOut} className="website-print" src={websiteImg} alt="Project 1"/>

            <div>
                <span>Featured Project</span>
                <h3>{websiteName}</h3>
                <p className='desc'>{websiteDesc}</p>
                <ul> 
                    {createList()}
                </ul>
                <CustomSmallButton title="Check Website"/>
            </div>
        </Project>
    )
}


export function ProjLeft({websiteName, websiteDesc, websiteImg, techArray}) {
    const descIn = () => {
        let siteDesc = document.querySelector('.desc-right');

        siteDesc.style.marginLeft = '0px';
        siteDesc.style.transition = 'all .2s';
        siteDesc.style.borderTop = '0.6px solid rgb(0, 179, 118)';
    }

    const descOut = () => {
        let siteDesc = document.querySelector('.desc-right');

        siteDesc.style.marginLeft = '70px';
        siteDesc.style.borderTop = '0.6px solid transparent';
    }

    const createList = () => {
        let rows = [];

        for(let i = 0; i < techArray.length; i++){
            rows.push(<li key={i}><img src={ArrowIcon} alt="Arrow icon"/>{techArray[i]}</li>)
        }; 

        return rows;
    }

    return (
        <Project>
            <div className="left-proj">
                <span>Featured Project</span>
                <h3>{websiteName}</h3>
                <p className='desc-right'>{websiteDesc}</p>
                <ul> 
                    {createList()}
                </ul>
                <CustomSmallButton title="Check Website"/>
            </div>

            <img onMouseOver={descIn} onMouseOut={descOut} className="website-print" src={websiteImg} alt="Project 1"/>
        </Project>
    )
}

export default ProjRight;