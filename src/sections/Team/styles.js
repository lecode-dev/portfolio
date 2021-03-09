import styled from "styled-components";

export const Team = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 4.5% 0;
  border-top: 1px solid rgb(0, 179, 118);

  div {
    display: flex;
    position: relative;
    margin: 0 auto;
  }

  // Media Queries
  @media (max-width: 1024px) {
    h2 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    h2 {
      margin-top: 30px;
    }

    div {
      flex-direction: column;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 480px) {
    div {
      flex-direction: column;
      width: 92%;
      margin: 0 auto;
    }
  }
`;
