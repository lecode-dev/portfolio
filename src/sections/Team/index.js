import React from 'react';
import { Team } from './styles';
import { Members } from './styles';
import { SessionTitle } from '../ReusableStyling/styles';
import Member1 from '../../assets/images/member1.jpg';
import Member2 from '../../assets/images/member2.jpg';
import Member3 from '../../assets/images/member3.jpg';
import Member4 from '../../assets/images/member4.jpg';
import InstagramLogo from '../../assets/images/instagram-logo.svg';
import TwitterLogo from '../../assets/images/twitter-logo.svg';
import LinkedinLogo from '../../assets/images/linkedin-logo.svg';
import GithubLogo from '../../assets/images/github-logo.svg';

function TeamSession() {
    const member = (memberImg ,memberName, job, txt, instagramLink, twitterLink, linkedinLink, githubLink) => (
        <Members>
            <img className="memberImg" src={memberImg}/>

            <div className="title">
                <h4>{memberName}</h4>
                <span>{job}</span>
            </div>

            <p>{txt}</p>

            <div className="logos">
                <a href={instagramLink} target="_blank"><img src={InstagramLogo} alt="Instagram Logo"/></a>
                <a href={twitterLink} target="_blank"><img src={TwitterLogo} alt="Twitter Logo"/></a>
                <a href={linkedinLink} target="_blank"><img src={LinkedinLogo} alt="Linkedin Logo"/></a>
                <a href={githubLink} target="_blank"><img src={GithubLogo} alt="Github Logo"/></a>
            </div>
        </Members>
    )

    return(
        <Team>
            <SessionTitle><span>0011.</span> Get to Know Us</SessionTitle>

            <div>
                {member(Member1 ,'Emerson Lopes', 'Front End Developer', 'You can relay on our amazing features list and also our customer services will be great experience.', 'https://www.instagram.com/', 'https://twitter.com/', 'https://br.linkedin.com/', 'https://github.com/')}
                {member(Member2 ,'Erick William', 'Back End Developer', 'You can relay on our amazing features list and also our customer services will be great experience.', 'https://www.instagram.com/', 'https://twitter.com/', 'https://br.linkedin.com/', 'https://github.com/')}
                {member(Member3 ,'Lucas Lucas', 'Front End Developer', 'You can relay on our amazing features list and also our customer services will be great experience.', 'https://www.instagram.com/', 'https://twitter.com/', 'https://br.linkedin.com/', 'https://github.com/')}
                {member(Member4 ,'Marianne Matos', 'Front End Developer', 'You can relay on our amazing features list and also our customer services will be great experience.', 'https://www.instagram.com/', 'https://twitter.com/', 'https://br.linkedin.com/', 'https://github.com/')}
            </div>
        </Team>
    )
}

export default TeamSession;