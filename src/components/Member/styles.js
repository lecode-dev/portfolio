import styled from "styled-components";

export const Members = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2%;
  color: #fff;
  margin-top: 20px;

  :hover .memberImg {
    opacity: 1;
    filter: grayscale(0);
    border: 1px solid rgb(0, 179, 118);
  }

  span {
    color: rgb(231, 76, 60);
  }

  .memberImg {
    width: 90%;
    border-radius: 5px;
    height: 180px;
    margin: 0 auto 20px auto;
    filter: grayscale(1);
    opacity: 0.8;
    transition: all 0.2s;
    border: 1px solid transparent;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .title {
      display: flex;
      flex-direction: column;
      height: 10%;

      h4 {
        color: rgb(0, 179, 118);
        font-weight: 400;
        font-size: 1.125rem;
        font-family: "Roboto Mono", monospace;
        margin-bottom: 7px;
      }

      span {
        font-size: 0.938rem;
        transition: all 0.2s;
      }
    }

    p {
      margin: 25px 0;
      height: 200px;
    }

    .logos {
      display: flex;
      justify-content: space-around;
      height: 10%;
      width: 80%;
      margin: 0 auto;

      a {
        margin-top: 5px;
        transition: all 0.2s;

        :hover {
          margin-top: 0;
        }

        img {
          width: 20px;
          opacity: 0.5;
          ￼￼ 0001. :hover {
            opacity: 1;
          }
        }
      }
    }
  }

  // Media Queries
  @media (min-width: 1600px) {
    .memberImg {
      width: 70%;
    }
  }

  @media (max-width: 1024px) {
    .memberImg {
      width: 100%;
    }

    .info {
      p {
        height: 270px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;

    .memberImg {
      width: 40%;
    }

    .info {
      p {
        height: 100px;
      }
    }

    div {
      .logos {
        flex-direction: row;
        margin-bottom: 30px;
      }
    }
  }

  @media (max-width: 760px) {
    .info {
      p {
        height: 200px;
      }
    }
  }

  @media (max-width: 480px) {
    .info {
      p {
        margin: -10px 0 10px 0;
      }
    }

    .memberImg {
      width: 70%;
    }

    div {
      width: 100%;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 400px) {
    width: 90%;

    .memberImg {
      width: 80%;
    }
  }
`;
