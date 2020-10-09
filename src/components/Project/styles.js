import styled from 'styled-components';

export const Project = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.side === 'left' ? 'row-reverse' : 'row')};
  height: 22%;
  display: flex;
  margin-top: ${(props) => (props.firstElement ? '10px' : '70px')};

  & > img:first-child {
    width: 58%;
    filter: grayscale(1);
    height: 390px;
    transition: all 0.2s;
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.4);
    border-top: 0.6px solid transparent;
    :hover {
      filter: grayscale(0);
      border-top: 0.6px solid rgb(0, 179, 118);
    }
  }

  & > img:hover ~ div {
    p {
      margin: ${(props) =>
        props.side === 'left' ? '0' : '0 0 0 -80px'};
        border-top: 0.6px solid rgb(0, 179, 118);
    }
  }

  div {
    text-align: ${(props) => props.side === 'left' ? 'left' : 'right'};
    padding: 3% 2% 0 0;
    z-index: 1;
    height: 390px;

    h3 {
      font-weight: 400;
      font-size: 1.375rem;
      margin-bottom: 30px;
      margin-top: 10px;
      display: inline-block;
      position: relative;
      transition: all 0.2s;
      color: rgb(0, 179, 118);
      letter-spacing: 1.5px;

      :hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }

      :before {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -8px;
        left: 0;
        background-color: rgb(0, 179, 118);
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
      }
    }

    span {
      color: rgb(231, 76, 60);
      font-size: 1rem;
      display: block;
      font-family: 'Roboto Mono', monospace;
    }

    p {
      padding: 20px 25px;
      margin-left: ${(props) => props.side === 'left' ? '50px' : '-150px'};
      width: 120%;
      background-color: rgb(26, 27, 28);
      box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.4);
      line-height: 25px;
      border: 0.6px solid transparent;
      transition: all 0.2s;
    }

    ul {
      display: flex;
      justify-content: ${(props) => props.side === 'left' ? 'flex-start' : 'flex-end'};
      margin-top: 30px;
      margin-bottom: 30px;

      li {
        margin-left: 30px;
        display: flex;

        :first-of-type{
          margin-left: 0;
        }

        :hover img {opacity: 1;}

        img {
          width: 15px;
          margin-right: 8px;
          opacity: 0.5;
          transition: all 0.1s;
        }
      }
    }
  }


  // Media Queries
  @media (max-width: 950px){
    & > img: first-child{
      width: 50%;
      height: 300px;
      margin-top: 60px;
    }
  }

  @media (max-width: 768px){
    flex-direction: column-reverse;

    & > img: first-child{
        width: 80%;
        height: 300px;
        margin: 0 auto;
    }

    // div:first-of-type{
    //   margin-top: 0;
    // }

    div{
      text-align: left;
      height: 300px;
      margin-top: -30px;

      h3{
        margin-bottom: 20px;
      }

      p{
        margin-left: 0;
        width: 100%;
        text-align: justify;
      }

      ul{
        justify-content: flex-start;

        li:first-of-type{
          margin: 0;
        }
      }
    }

    & > img:hover ~ div {
      p {
          margin: 0;
          border-top: 0.6px solid rgb(0, 179, 118);
      }
    }

    button{
      display: none;
    }
  }


  @media (max-width: 480px){
    & > img: first-child{
      width: 100%;
      height: 230px;
      margin-top: 40px;
    }
  }

  @media (max-width: 350px){
    div{
      ul{
        li{
          margin-left: 15px;
        }
      }
    }
  }
`;
