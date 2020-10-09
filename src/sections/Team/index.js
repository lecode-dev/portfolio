import React from 'react';
import { Team } from './styles';
import { Members } from './styles';
import { SessionTitle } from '../Shared/styles';
import Member1 from '../../assets/images/member1.jpg';
import Member2 from '../../assets/images/member2.jpg';
import Member3 from '../../assets/images/member3.jpg';
import Member4 from '../../assets/images/member5.jpg';
import InstagramLogo from '../../assets/images/instagram-logo.svg';
import TwitterLogo from '../../assets/images/twitter-logo.svg';
import LinkedinLogo from '../../assets/images/linkedin-logo.svg';
import GithubLogo from '../../assets/images/github-logo.svg';

function TeamSession() {
    const member = (memberImg ,memberName, job, txt, instagramLink, twitterLink, linkedinLink, githubLink) => (
        <Members>
            <img className="memberImg" src={memberImg} alt="Member"/>

            <div className="info">
                <div className="title">
                    <h4>{memberName}</h4>
                    <span>{job}</span>
                </div>

                <p>{txt}</p>

                <div className="logos">
                    <a href={instagramLink} target="_blank" rel="noopener noreferrer"><img src={InstagramLogo} alt="Instagram Logo"/></a>
                    <a href={twitterLink} target="_blank" rel="noopener noreferrer"><img src={TwitterLogo} alt="Twitter Logo"/></a>
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer"><img src={LinkedinLogo} alt="Linkedin Logo"/></a>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer"><img src={GithubLogo} alt="Github Logo"/></a>
                </div>
            </div>
        </Members>
    )

    return(
        <Team id="team">
            <SessionTitle><span>0011.</span>Get to Know Us</SessionTitle>

            <div>
                {member(Member1 ,'Emerson Lopes', 'Full-stack Developer', `I am a software developer based in Montes Claros, MG, Brazil specializing in building (and occasionally designing) exceptional, high-quality websites and applications. I'm currently studying Information Systems at the State University of Montes Claros.`, 'https://www.instagram.com/emersonlopxs', 'https://twitter.com/emersonlopxs', 'https://br.linkedin.com/emersonlopxs', 'https://github.com/emersonlopxs')}
                {member(Member2 ,'Erick William', 'Back-end Developer', 'I am a developer who has the determination and competence to deliver high quality projects. I enjoy working as a team because it gives me the opportunity to get different perspectives on my work and learn about new things.', 'https://www.instagram.com/', 'https://twitter.com/', 'https://www.linkedin.com/in/erick-willian-8553a2133/', 'https://github.com/')}
                {member(Member3 ,'Lucas Filipe', 'Front-end Developer', 'I am Computer Science student with experience in front-end programming, with the objective of growing professionally and productively, valuing high standards of morality and interpersonal coexistence.', 'https://www.instagram.com/', 'https://twitter.com/', 'https://br.linkedin.com/', 'https://github.com/')}
                {member(Member4 ,'Marianne Matos', 'Front-end Developer', 'I’m a web developer, who speaks English, Portuguese and a little bit of French and is studying Information Systems at the State University of Montes Claros. Basically, I’m just someone who really loves technology and learning new things :)', 'https://www.instagram.com/', 'https://twitter.com/', 'https://br.linkedin.com/', 'https://github.com/')}
            </div>
        </Team>
    )
}

export default TeamSession;