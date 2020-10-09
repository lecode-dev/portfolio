import React from 'react';
import { Projects } from './styles';
import Project from '../../components/Project';
import { SessionTitle } from '../Shared/styles';
import Proj1 from '../../assets/images/proj1.png';
import Proj2 from '../../assets/images/proj2.png';
// import Proj3 from '../../assets/images/proj3.jpg';
// import Proj4 from '../../assets/images/proj4.jpg';

function ProjectsSession() {
    return (
        <Projects id="projects">
            <SessionTitle><span>0010.</span>Some of our projects</SessionTitle>

            <Project websiteName="Camalẽao LAB" websiteDesc="The Streetwear style was never just about clothes. It’s about identity, culture and freedom of expression. The future is already here. It’s time to adapt." websiteImg={Proj1} techArray={['PostgreSQL', 'Node.js', 'React']} side="right" firstElement websiteLink="https://camaleaolab.com/"/>

            <Project websiteName="SwiftSku" websiteDesc="SwiftSku helps independent c-store owners onboard their c-store with the latest technology to leverage promotional discounts and increase revenue with SABI." websiteImg={Proj2} techArray={['React', 'Next.js']} side="left" websiteLink="https://swiftsku-website-v3-git-development.swiftsku.vercel.app/"/> 

            {/* <Project websiteName="Fab Fashion" websiteDesc="In Fab Fashion you can find a lot of different clothes collections, including the latest fashion trends." websiteImg={Proj3} techArray={['HTML', 'CSS', 'SCSS']} side="right"/>

            <Project websiteName="My Home" websiteDesc="Here you have a large variaty of places to rent while you're traveling, including big houses, apartments, among others." websiteImg={Proj4} techArray={['React', 'CSS']} side="left"/>                         */}
        </Projects>
    )
}

export default ProjectsSession;