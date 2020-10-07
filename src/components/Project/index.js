import React from 'react';
import { CustomSmallButton } from '../Button';
import { Project } from './styles';
import ArrowIcon from '../../assets/images/arrow-right.svg';

function ProjectTest({websiteName, websiteDesc, websiteImg, techArray, side, firstElement}) {
  const createList = () => {
    let rows = [];

    for(let i = 0; i < techArray.length; i++){
        rows.push(<li key={i}><img src={ArrowIcon} alt="Arrow icon"/>{techArray[i]}</li>)
    }; 

    return rows;
  }

  return (
      <Project side={side} firstElement={firstElement}>
        <img src={websiteImg} alt="Project 1"/>

        <div>
          <span>Featured Project</span>
          <h3>{websiteName}</h3>
          <p>{websiteDesc}</p>
          <ul>
            {createList()}
          </ul>
          <CustomSmallButton title="Check Website" />
        </div>
      </Project>
  );
};

export default ProjectTest;