import styled from 'styled-components';

export const Button = styled.button`
    padding: 18px 30px;
    font-size: 1rem;
    border: 1px solid rgb(0, 179, 118);
    color: rgb(0, 179, 118);
    background-color: rgba(0, 179, 118, 0.1);
    transition: all .2s;

    &:hover{
        background-color: rgba(0, 179, 118, 0.6);
        color: #fff;
        margin-left: 5px;
        box-shadow: 8px 8px 15px rgba(0,0,0,0.4);
    }
`

export const SmallButton = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    border: 1px solid rgb(0, 179, 118);
    color: rgb(0, 179, 118);
    background-color: rgba(0, 179, 118, 0.1);
    transition: all .2s;
    box-shadow: 4px 4px 8px rgba(0,0,0,0.4);

    &:hover{
        background-color: rgba(0, 179, 118, 0.6);
        color: #fff;
        margin-top: -4px;
        box-shadow: 8px 8px 15px rgba(0,0,0,0.4);
    }
`