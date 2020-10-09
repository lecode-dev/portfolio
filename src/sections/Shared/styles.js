import styled from 'styled-components';

export const SessionTitle = styled.h2`
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 30px;
    font-family: 'Roboto Mono', monospace;
    letter-spacing: 0;
    cursor: default;
    position: relative;
    display: inline-block;
    color: #fff;

    :hover:before{
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }

    :before{
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -5px;
        left: 0;
        background-color: rgb(231, 76, 60);
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
    }

    span{
        color: rgb(231, 76, 60);
        font-family: 'Roboto Mono', monospace;
        font-size: 1.25rem;
        font-weight: 300;
    }
`

export const Paragraph = styled.p`
    line-height: 30px;
    margin-bottom: 20px;
    font-size: 1rem;
    color: #fff;

    button, a, Link{
        color: rgb(0, 179, 118);
        transition: all .2s;
        position: relative;
        font-family: 'Roboto Mono', monospace;
        background-color: transparent;
        font-size: 1rem;
        cursor: pointer;

        :hover:before{
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }

        :before{
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            bottom: -5px;
            left: 0;
            background-color: rgb(0, 179, 118);
            visibility: hidden;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
        }
    }

    span{
        font-size: 1.125rem;
        margin: 0;
        font-weight: normal;
        color: rgb(0, 179, 118);
        position: relative;
        cursor: default;
        font-family: 'Roboto Mono', monospace;

        :hover:before{
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }

        :before{
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            bottom: -5px;
            left: 0;
            background-color: rgb(0, 179, 118);
            visibility: hidden;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
        }
    }
`