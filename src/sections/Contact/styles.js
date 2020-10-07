import styled from 'styled-components';

export const Contact = styled.section`
    width: 80%;
    margin: 0 auto;
    padding: 4.5% 0;
    color: white;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgb(0, 179, 118);

    .div-left{width: 50%;}
    
    .div-right{
        width: 40%;
        position: relative;

        img{
            width: 100%;
            position: absolute;
            top: 45%;
            transform: translateY(-50%);
            filter: grayscale(1);
            opacity: .6;
            box-shadow: 8px 8px 15px rgba(0,0,0,0.4);
            transition: all .2s;
            border-top: 1px solid transparent;
            border-bottom: 1px solid transparent;

            :hover{
                opacity: 1;
                filter: grayscale(0);
                border-top: 1px solid rgb(0, 179, 118);
                border-bottom: 1px solid rgb(0, 179, 118);
            }
        }
    }
`