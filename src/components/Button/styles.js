import styled from 'styled-components';

export const Button = styled.button`
    padding: 18px 30px;
    font-size: 15px;
    border: 1px solid rgb(0, 179, 118);
    color: rgb(0, 179, 118);
    background-color: rgba(0, 179, 118, 0.1);
    transition: all .2s;

    &:hover{
        background-color: rgba(0, 179, 118, 0.6);
        color: #fff;
    }
`