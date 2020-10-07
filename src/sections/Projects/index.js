import React from 'react';
import { Projects } from './styles';
import Project from '../../components/Project';
import { SessionTitle } from '../Shared/styles';
import Proj1 from '../../assets/images/proj1.png';
import Proj2 from '../../assets/images/proj2.png';
import Proj3 from '../../assets/images/proj3.jpg';
import Proj4 from '../../assets/images/proj4.jpg';

function ProjectsSession() {
    return (
        <Projects id="projects">
            <SessionTitle><span>0010.</span> Some Of Our Projects</SessionTitle>

            <Project websiteName="Sport FIT Gym" websiteDesc="With Sport FIT you can schedule sessions of sports, such as Pilates, Yoga, Spinning and many more." websiteImg={Proj1} techArray={['HTML', 'CSS', 'React', 'Node.js']} side="right" firstElement/>

            <Project websiteName="Fables Consulting Service" websiteDesc="Access the Fables website to get access to great quality consulting service for any kind of bussiness." websiteImg={Proj2} techArray={['React', 'PostgreSQL', 'SCSS']} side="left"/> 

            <Project websiteName="Fab Fashion" websiteDesc="In Fab Fashion you can find a lot of different clothes collections, including the latest fashion trends." websiteImg={Proj3} techArray={['HTML', 'CSS', 'AWS', 'SCSS']} side="right"/>

            <Project websiteName="My Home" websiteDesc="Here you have a large variaty of places to rent while you're traveling, including big houses, apartments, among others." websiteImg={Proj4} techArray={['React', 'Firebase', 'CSS']} side="left"/>                        
        </Projects>
    )
}

export default ProjectsSession;