import styled from 'styled-components';

export const LogoEffect = styled.div`
    .outer-box3{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 80%;
        width: 80%;
        background-color: rgb(231, 76, 60, 0.2);
        border: 2px solid rgb(231, 76, 60, 0.2);
    }

    .outer-box2{
        width: 80%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 83%;
        background-color: rgb(231, 76, 60, 0.2);
        border: 2px solid rgb(231, 76, 60, 0.2);
    }

    .outer-box1{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 76%;
        background-color: rgb(231, 76, 60, 0.2);
        border: 2px solid rgb(231, 76, 60, 0.2);
    }

    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        filter: grayscale(1);
        transition: all .2s;
        background-color: rgb(26, 27, 28, 0.9);

        :hover {
            filter: grayscale(0);
        }
    }   
`

