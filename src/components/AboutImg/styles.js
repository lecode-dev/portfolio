import styled from 'styled-components';

export const LogoEffect = styled.div`
    .outer-box1, .outer-box2, .outer-box3{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(231, 76, 60, 0.2);
        border: 2px solid rgb(231, 76, 60, 0.2);
    }

    .outer-box1{
        width: 100%;
        height: 76%;
        transition: all .7s;

        :hover{
            background-color: rgb(0, 179, 118, 0.2);
            border: 2px solid rgb(0, 179, 118, 0.2);

            .outer-box2, .outer-box3{
                background-color: rgb(0, 179, 118, 0.2);
                border: 2px solid rgb(0, 179, 118, 0.2);
            }

            img{filter: grayscale(0);}
        }
    }

    .outer-box2{
        width: 80%;
        height: 83%;
        transition: all .5s;
    }

    .outer-box3{
        width: 80%;
        height: 80%;
        transition: all .3s;
    }

    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        filter: grayscale(1);
        transition: all .2s;
        background-color: rgb(26, 27, 28, 0.9);
    }   
`