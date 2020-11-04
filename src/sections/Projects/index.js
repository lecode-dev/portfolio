import React from 'react';
import { Projects } from './styles';
import Project from '../../components/Project';
import { SessionTitle } from '../Shared/styles';
import Proj1 from '../../assets/images/proj1.png';
// import Proj2 from '../../assets/images/proj2.png';

function ProjectsSession() {
    const siteProps = [
        {
            name: 'Camalẽao LAB',
            desc: 'The Streetwear style was never just about clothes. It’s about identity, culture and freedom of expression. The future is already here. It’s time to adapt.',
            img: Proj1,
            technologies: ['PostgreSQL', 'Node.js', 'React'],
            side: 'right',
            firstElement: true,
            link: 'https://camaleaolab.com/'
        }
        // {
        //     name: 'SwiftSku',
        //     desc: 'SwiftSku helps independent c-store owners onboard their c-store with the latest technology to leverage promotional discounts and increase revenue with SABI.',
        //     img: Proj2,
        //     technologies: ['React', 'Next.js'],
        //     side: 'left',
        //     firstElement: false,
        //     link: 'https://swiftsku-website-v3-git-development.swiftsku.vercel.app/'
        // }
    ]

    return (
        <Projects id="projects">
            <SessionTitle><span>0010.</span>Some of our projects</SessionTitle>

            {siteProps.map(site => (
                <Project websiteName={site.name} websiteDesc={site.desc} websiteImg={site.img} techArray={site.technologies} side={site.side} firstElement={site.firstElement} websiteLink={site.link}/>
            ))}
        </Projects>
    )
}

export default ProjectsSession;