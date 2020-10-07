import styled from 'styled-components';

export const Hero = styled.section`
    width: 80%;
    margin: 0 auto;
    padding: 4.5% 0;

    p:first-of-type{
        color: rgb(231, 76, 60);
        margin-bottom: 20px;
        font-size: 1.125rem;
    }

    p:last-of-type{
        margin-bottom: 40px;
        width: 75%;
        font-size: 1.125rem;
    }

    h2, h3{font-weight: 300;}

    h2{
        color: #fff;
        font-size: 3.75rem;
    }

    h3{
        color: rgb(0, 179, 118);
        font-size: 3.125rem;
        margin-bottom: 20px;
        line-height: 60px;
        width: 66%;
        font-family: 'Roboto Mono', monospace;
        letter-spacing: 0;
    }
`