import React from 'react';
import { CustomSmallButton } from '../Button';
import { Project } from './styles';
import Img from '../../assets/images/proj1.jpg';

// import { Container } from './styles';

function ProjectTest({
  websiteName,
  websiteDesc,
  websiteImg,
  techArray,
  side,
}) {
  return (
    <>
      <Project side={side}>
        <img
          // onMouseOver={descIn}
          // onMouseOut={descOut}
          src={Img}
          alt="Project 1"
        />
        <div>
          <span>Featured Project</span>
          <h3>Title</h3>
          <p>Desc</p>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
          <CustomSmallButton title="Check Website" />
        </div>
      </Project>

      {}
    </>
  );
}

export default ProjectTest;
