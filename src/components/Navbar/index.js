import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/images/logo-clean.png';

function Navbar() {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <nav>
        <button>
          <span>0001.</span>About
        </button>

        <button>
          <span>0010.</span>Projects
        </button>

        <button>
          <span>0011.</span>Team
        </button>

        <button>
          <span>0100.</span>Contact
        </button>
      </nav>
    </Container>
  );
};

export default Navbar;
