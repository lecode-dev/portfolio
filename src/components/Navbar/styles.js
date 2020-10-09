import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 90px;
  width: 100%;
  background-color: rgb(26, 27, 28);
  justify-content: space-between;
  padding: 10px 3%;
  position: fixed;
  z-index: 2;
  top: 0;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, .2);

  img {
    width: 70px;
    height: 70px; 
    cursor: pointer;
  }

  .menu-icon{
    display: none;
    width: 57px;
  }

  nav{
    margin-top: 24px;

    .close-icon{
      display: none;
    }
  }

  .nav-link {
    padding: 0 10px;
    font-size: 0.875rem;
    color: #fff;
    transition: all .2s;
    margin-left: 20px;
    background-color: transparent;
    cursor: pointer;

    :hover{
      color: rgb(231, 76, 60);
    }

    span{
      color: rgb(231, 76, 60);
      margin-right: 10px;
    }
  }

  @media(max-width: 768px){
    .menu-icon{
      display: block;
    }

    img{
      width: 50px;
      height: 50px;
      margin-top: 10px;
      margin-left: 10px;
    }

    nav{
      display: none;
      flex-direction: column;
      position: fixed;
      justify-content: space-around;
      top: -24px;
      right: 0;
      background-color: rgb(26, 27, 28);
      width: 45%;
      height: ${window.innerHeight + 25}px;
      box-shadow: -4px -4px 6px rgba(0, 0, 0, .2);
      margin-top: 0px;

      .close-icon{
        display: inline-block;
        margin: 0 auto;
      }

      .nav-link{
        display: flex;
        flex-direction: column;
        // margin-bottom: 100px;
        margin-right: 20px;
        text-align: center;
        font-size: 18px;

        span{
          margin-right: 0;
          margin-bottom: 10px;
        }
      }
    }
  }
`;
