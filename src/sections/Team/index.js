import React from "react";
import { Team } from "./styles";
import { SessionTitle } from "../Shared/styles";
import Member from "../../components/Member";
import Member1 from "../../assets/images/member1.jpg";
import Member2 from "../../assets/images/member2.jpg";
import Member3 from "../../assets/images/member3.jpg";

function TeamSession() {
  const memberInfo = [
    {
      img: Member1,
      name: "Emerson Lopes",
      job: "Full-stack Developer",
      desc:
        "I am a software developer based in Montes Claros, MG, Brazil specializing in building (and occasionally designing) exceptional, high-quality websites and applications. I'm currently studying Information Systems at the State University of Montes Claros",
      instagram: "https://www.instagram.com/emersonlopxs",
      twitter: "https://twitter.com/emersonlopxs",
      linkedin: "https://br.linkedin.com/emersonlopxs",
      github: "https://github.com/emersonlopxs"
    },
    {
      img: Member2,
      name: "Erick William",
      job: "Back-end Developer",
      desc:
        "I am a developer who has the determination and competence to deliver high quality projects. I enjoy working as a team because it gives me the opportunity to get different perspectives on my work and learn about new things.",
      instagram: "https://www.instagram.com/erick_willian_/",
      twitter: "https://twitter.com/Erickinhou1",
      linkedin: "https://www.linkedin.com/in/erick-willian-8553a2133/",
      github: "https://github.com/Erickinhou"
    },
    {
      img: Member3,
      name: "Lucas Filipe",
      job: "Front-end Developer",
      desc:
        "I am Computer Science student with experience in front-end programming, with the objective of growing professionally and productively, valuing high standards of morality and interpersonal coexistence.",
      instagram: "https://www.instagram.com/lucasfilipess/",
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/in/lucas-souza-95b867174/",
      github: "https://github.com/lucasfilipess"
    }
  ];

  return (
    <Team id="team">
      <SessionTitle>
        <span>0011.</span>Get to Know Us
      </SessionTitle>

      <div>
        {memberInfo.map((member) => (
          <Member
            img={member.img}
            name={member.name}
            job={member.job}
            txt={member.desc}
            instagramLink={member.instagram}
            twitterLink={member.twitter}
            linkedinLink={member.linkedin}
            githubLink={member.github}
          />
        ))}
      </div>
    </Team>
  );
}

export default TeamSession;
