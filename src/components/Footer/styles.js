import styled from 'styled-components';

export const Footer = styled.footer`
    margin-top: 20px;

    :hover p{color: rgba(255, 255, 255, 0.8);}

    p{
        text-align: center;
        margin-bottom: 10px;
        font-family: 'Roboto Mono', monospace;
        display: block;
        color: rgba(255, 255, 255, 0.5);
        transition: all .2s;
        font-size: 0.875rem;
    }

    ul{
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        
        img{
            width: 20px;
            margin: 0 10px;
            opacity: .4;
            transition: all .2s;

            :hover{opacity: 1;}
        }
    }
`