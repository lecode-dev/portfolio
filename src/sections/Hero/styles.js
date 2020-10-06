import styled from 'styled-components';

export const Hero = styled.section`
    height: 85vh;
    width: 80%;
    margin: 0 auto;
    padding: 3.5% 0;
    border-bottom: 1px solid rgb(0, 179, 118);

    p:first-of-type{
        color: rgb(0, 179, 118);
        margin-bottom: 20px;
        font-size: 18px;
    }

    p:last-of-type{
        margin-bottom: 40px;
        width: 75%;
        font-size: 18px;
    }

    h2, h3{font-weight: 300;}

    h2{
        color: #fff;
        font-size: 60px;
    }

    h3{
        color: rgb(0, 179, 118);
        font-size: 50px;
        margin-bottom: 20px;
        line-height: 60px;
        width: 66%;
        font-family: 'Roboto Mono', monospace;
        letter-spacing: 0;
    }
`