import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/images/logo-clean.png';
import { Link } from 'react-scroll';

function Navbar() {
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
    document.getElementById("menu").style.transition = "all .3s";
    } else {
    document.getElementById("menu").style.transition = "all .3s";
    document.getElementById("menu").style.top = "-100px";
    }

  prevScrollpos = currentScrollPos;
  }

  return (
    <Container id="menu">
      <Link to="hero" duration={1000} offset={-60} smooth>
        <img src={Logo} alt="Logo"/>
      </Link>

      <nav>
        <Link className="nav-link" to="about" duration={1000} offset={-60} smooth>
          <span>0001.</span>About
        </Link>

        <Link className="nav-link" to="projects" duration={1000} offset={-60} smooth>
          <span>0010.</span>Projects
        </Link>

        <Link className="nav-link" to="team" duration={1000} offset={-60} smooth>
          <span>0011.</span>Team
        </Link>

        <Link className="nav-link" to="contact" duration={1000} offset={-60} smooth>
          <span>0100.</span>Contact
        </Link>
      </nav>
    </Container>
  );
};

export default Navbar;
