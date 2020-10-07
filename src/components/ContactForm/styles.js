import styled from 'styled-components';

export const ContactForm = styled.form`
    display: none;
    flex-direction: column;
    width: 80%;
    height: 80%;
    margin: 5% auto 0 auto;
    justify-content: space-between;

    h3{
        color: rgb(0, 179, 118);
        font-family: 'Roboto Mono', monospace;
        font-weight: 400;
        font-size: 1.563rem;
        text-align: center;
    }

    input, textarea{
        padding: 4%;
        color: #555;
        border: 1.5px solid transparent;
        transition: all .2s;
        cursor: default;

        :focus{
            outline: none;
            border: 1.5px solid rgb(0, 179, 118);
        }
    }

    label{
        display: inline-block;
        margin: 0 30%;
        position: relative;
        width: 50%;

        :hover input ~ .checkmark{background-color: #ccc;}

        input{
            margin-right: 10px;
            position: absolute;
            opacity: 0;

            :checked ~ .checkmark {background-color: rgb(0, 179, 118);}

            :checked ~ .checkmark:after {display: block;}
        }

        .checkmark {
            position: absolute;
            top: -20%;
            left: -25%;
            height: 25px;
            width: 25px;
            background-color: #eee;

            :after{
                content: "";
                position: absolute;
                display: none;
                left: 9px;
                top: 5px;
                width: 5px;
                height: 10px;
                border: solid white;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }
        }
    }

    input[type=submit]{
        width: 70%;
        margin: 0 auto;
        padding: 10px 20px;
        font-size: 1rem;
        border: 1px solid rgb(0, 179, 118);
        color: rgb(0, 179, 118);
        background-color: rgba(0, 179, 118, 0.1);
        transition: all .2s;
        box-shadow: 4px 4px 8px rgba(0,0,0,0.4);
        cursor: pointer;

        &:hover{
            background-color: rgba(0, 179, 118, 0.6);
            color: #fff;
        }
    }
`