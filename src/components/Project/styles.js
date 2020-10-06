import styled from 'styled-components';

// export const Project = styled.div`
//   height: 22%;
//   display: flex;
//   margin-top: 70px;

//   .website-print {
//     width: 58%;
//     filter: grayscale(1);
//     height: 390px;
//     transition: all 0.2s;
//     box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.4);
//     border-top: 0.6px solid transparent;

//     :hover {
//       filter: grayscale(0);
//       border-top: 0.6px solid rgb(0, 179, 118);
//     }
//   }

// div {
//   text-align: right;
//   padding: 3% 2% 0 0;
//   z-index: 1;
//   height: 390px;

//   h3 {
//     font-weight: 400;
//     font-size: 22px;
//     margin-bottom: 30px;
//     margin-top: 10px;
//     display: inline-block;
//     position: relative;
//     transition: all 0.2s;
//     color: rgb(0, 179, 118);
//     letter-spacing: 1.5px;

//     :hover:before {
//       visibility: visible;
//       -webkit-transform: scaleX(1);
//       transform: scaleX(1);
//     }

//     :before {
//       content: '';
//       position: absolute;
//       width: 100%;
//       height: 3px;
//       bottom: -8px;
//       left: 0;
//       background-color: rgb(0, 179, 118);
//       visibility: hidden;
//       -webkit-transform: scaleX(0);
//       transform: scaleX(0);
//       -webkit-transition: all 0.3s ease-in-out 0s;
//       transition: all 0.3s ease-in-out 0s;
//     }
//   }

//   span {
//     color: rgb(231, 76, 60);
//     font-size: 16px;
//     display: block;
//     font-family: 'Roboto Mono', monospace;
//   }

//   p {
//     padding: 20px 25px;
//     margin-left: -150px;
//     width: 120%;
//     background-color: rgb(26, 27, 28);
//     box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.4);
//     line-height: 25px;
//     border: 0.6px solid transparent;
//   }

//   ul {
//     display: flex;
//     justify-content: flex-end;
//     margin-top: 30px;
//     margin-bottom: 30px;

//     li {
//       margin-left: 30px;
//       display: flex;

//       :hover img {
//         opacity: 1;
//       }

//       img {
//         width: 15px;
//         margin-right: 8px;
//         opacity: 0.5;
//         transition: all 0.1s;
//       }
//     }
//   }
// }

//   .left-proj {
//     text-align: left;

//     p {
//       margin-left: 70px;
//     }

//     ul {
//       justify-content: flex-start;

//       li:first-of-type {
//         margin-left: 0;
//       }
//     }
//   }
// `;

export const Project = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.side === 'left' ? 'row-reverse' : 'row')};
  /* flex-direction: row; */
  height: 22%;
  display: flex;
  margin-top: 70px;

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
      background-color: red;
      margin: ${(props) =>
        props.side === 'left' ? ' 0 0 0 -50px' : '0 0 0 50px'};
    }
  }

  div {
    /* display: flex; */

    text-align: right;
    padding: 3% 2% 0 0;
    z-index: 1;
    height: 390px;

    h3 {
      font-weight: 400;
      font-size: 22px;
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
      font-size: 16px;
      display: block;
      font-family: 'Roboto Mono', monospace;
    }

    p {
      padding: 20px 25px;
      /* margin-left: -150px; */
      width: 120%;
      background-color: rgb(26, 27, 28);
      box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.4);
      line-height: 25px;
      border: 0.6px solid transparent;
      transition: all 0.2s;
    }

    ul {
      display: flex;
      justify-content: flex-end;
      margin-top: 30px;
      margin-bottom: 30px;

      li {
        margin-left: 30px;
        display: flex;

        :hover img {
          opacity: 1;
        }

        img {
          width: 15px;
          margin-right: 8px;
          opacity: 0.5;
          transition: all 0.1s;
        }
      }
    }
  }
`;
