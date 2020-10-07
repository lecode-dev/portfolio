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

  nav{margin-top: 24px;}

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
`;
