import styled from 'styled-components';

export const Hero = styled.section`
    height: 70vh;
    width: 80%;
    margin: 0 auto;
    padding: 4.5% 0;

    p:first-child{
        color: rgb(0, 179, 118);
        margin-bottom: 20px;
    }

    h2, h3{font-weight: 300;}

    h2{
        color: #fff;
        font-size: 70px;
    }

    h3{
        color: rgb(0, 179, 118);
        font-size: 58px;
        margin-bottom: 20px;
        line-height: 60px;
        width: 66%;
    }

    p{
        font-size: 20px;
        color: #fff;
        width: 68%;
        margin-bottom: 20px;
    }
`