import styled from "styled-components";

export const About = styled.section`
    height: 100vh;
    width: 80%;
    margin: 4% auto 0 auto;
    padding: 4.5% 0;
    color: white;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(0, 179, 118);

    .div-left{width: 50%;}

    .div-right{
        width: 40%;
        position: relative;
    }

    .tech-list{
        display: flex;
        width: 70%;
        justify-content: space-between;

        li{
            margin-bottom: 5px;
            cursor: default;
            
            :hover .tech-icon, 
            :hover .list-icon{opacity: 1;}
        }

        .list-icon{
            width: 15px;
            margin-right: 10px;
            margin-bottom: -2px;
            opacity: .5;
            transition: all .2s;
        }

        .tech-icon{
            width: 20px;
            margin-left: 10px;
            margin-bottom: -5px;
            opacity: 0;
            transition: all .2s;
        }
    }
`