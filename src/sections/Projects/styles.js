import styled from "styled-components";

export const Projects = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 4.5% 0;
  color: white;
  cursor: default;
  border-top: 1px solid rgb(0, 179, 118);

  // Media Queries
  @media (max-width: 1024px) {
    h2 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 769px) {
    margin-bottom: 30px;

    h2 {
      margin-top: 30px;
    }
  }

  @media (max-width: 400px) {
    width: 90%;
  }
`;
