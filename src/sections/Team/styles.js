import styled from 'styled-components';

export const Team = styled.section`
    height: 100vh;
    width: 80%;
    margin: 4% auto 0 auto;
    padding: 4.5% 0;
    border-bottom: 1px solid rgb(0, 179, 118);

    div{
        height: 90%;
        display: flex;
        position: relative;
    }
`

export const Members = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    padding: 2%;
    color: #fff;
    margin-top: 20px;

    :hover .memberImg{
        opacity: 1;
        filter: grayscale(0);
        border: 1px solid rgb(0, 179, 118);
        width: 91%;
        height: 41%;
    }

    .memberImg{
        width: 90%;
        height: 40%;
        margin: 0 auto;
        filter: grayscale(1);
        opacity: .8;
        transition: all .2s;
        border: 1px solid transparent;
    }

    .title{
        display: flex;
        flex-direction: column;
        height: 10%;

        h4{
            color: rgb(0, 179, 118);
            font-weight: 400;
            font-size: 18px;
            font-family: 'Roboto Mono', monospace;
            margin-bottom: 7px;
        }

        span{font-size: 15px;}
    }

    .logos{
        display: flex;
        justify-content: space-around;
        height: 10%;
        width: 80%;
        margin: 0 auto;

        a{
            margin-top: 5px;
            transition: all .2s;

            :hover{margin-top: 0;}

            img{
                width: 20px;
                opacity: .5;
    
                :hover{opacity: 1;}
            }
        }
    }
`