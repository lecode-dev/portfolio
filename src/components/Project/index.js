import React from 'react';
import { CustomSmallButton } from '../Button';
import { Project } from './styles';
import ArrowIcon from '../../assets/images/arrow-right.svg';

function ProjectTest({websiteName, websiteDesc, websiteImg, techArray, side, firstElement, websiteLink}) {
  const createList = () => {
    let rows = [];

    for(let i = 0; i < techArray.length; i++){
        rows.push(<li style={{ height: 20}} key={i}><img src={ArrowIcon} alt="Arrow icon"/>{techArray[i]}</li>)
    }; 

    return rows;
  }

  return (
      <Project side={side} firstElement={firstElement}>
        <img src={websiteImg} alt="Project 1"/>

        <div>
          <span>Featured Project</span>
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            <h3>{websiteName}</h3>
          </a>
          <p>{websiteDesc}</p>
          <ul>
            {createList()}
          </ul>

          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            <CustomSmallButton title="Check Website" className='small-button'/>
          </a>
        </div>
      </Project>
  );
};

export default ProjectTest;