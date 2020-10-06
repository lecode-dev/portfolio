import React from 'react';
import { Projects } from './styles';
import ProjRight from '../../components/ProjectInfo';
import { ProjLeft } from '../../components/ProjectInfo';
import { SessionTitle } from '../ReusableStyling/styles';
import Proj1 from '../../assets/images/proj1.jpg';
import Proj2 from '../../assets/images/proj5.jpg';
import Proj3 from '../../assets/images/proj3.jpg';
import Proj4 from '../../assets/images/proj4.jpg';

function ProjectsSession() {
    return (
        <Projects>
            <SessionTitle><span>0010.</span>Some Of Our Projects</SessionTitle>

            <ProjRight websiteName="Sport FIT Gym" websiteDesc="With Sport FIT you can schedule sessions of sports, such as Pilates, Yoga, Spinning and many more." websiteImg={Proj1} techArray={['HTML', 'CSS', 'React', 'Node.js']} websiteNumber="website1"/>

            <ProjLeft websiteName="Fables Consulting Service" websiteDesc="Access the Fables website to get access to great quality consulting service for any kind of bussiness." websiteImg={Proj2} techArray={['React', 'PostgreSQL', 'SCSS']}/> 

            <ProjRight websiteName="Fab Fashion" websiteDesc="In Fab Fashion you can find a lot of different clothes collections, including the latest fashion trends." websiteImg={Proj3} techArray={['HTML', 'CSS', 'AWS', 'SCSS']} websiteNumber="website3"/>

            <ProjLeft websiteName="My Home" websiteDesc="Here you have a large variaty of places to rent while you're traveling, including big houses, apartments, among others." websiteImg={Proj4} techArray={['React', 'Firebase', 'CSS']}/>                        
        </Projects>
    )
}

export default ProjectsSession;