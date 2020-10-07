import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 100px;
  width: 100%;
  background-color: rgb(26, 27, 28);
  justify-content: space-between;
  padding: 15px 3%;

  & > img {
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  nav{margin-top: 14px;}

  button {
    padding: 12px 10px;
    font-size: 0.875rem;
    color: #fff;
    transition: all .2s;
    margin-left: 20px;
    background-color: transparent;
  }

  button > span{
    color: rgb(231, 76, 60);
    margin-right: 10px;
  }

  button:hover{color: rgb(231, 76, 60);}
`;
