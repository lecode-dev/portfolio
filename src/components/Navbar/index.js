import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/images/LeCode.png';

function Navbar() {
  return (
    <Container color={'red'}>
      <img src={Logo} alt="Logo" />
      <nav>
        <button>About</button>
        <button>Projects</button>
        <button>Team</button>
        <button>Contact</button>
      </nav>
    </Container>
  );
}

export default Navbar;
