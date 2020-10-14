import React from 'react';
import { Members } from './styles';
import InstagramLogo from '../../assets/images/instagram-logo.svg';
import TwitterLogo from '../../assets/images/twitter-logo.svg';
import LinkedinLogo from '../../assets/images/linkedin-logo.svg';
import GithubLogo from '../../assets/images/github-logo.svg';

function Member({img ,name, job, txt, instagramLink, twitterLink, linkedinLink, githubLink}) {
    return(
        <Members>
            <img className="memberImg" src={img} alt="LeCode Member"/>

            <div className="info">
                <div className="title">
                    <h4>{name}</h4>
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
}

export default Member;