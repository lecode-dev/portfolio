import styled from 'styled-components';

export const Team = styled.section`
    width: 80%;
    margin: 0 auto;
    padding: 4.5% 0;
    border-top: 1px solid rgb(0, 179, 118);

    div{
        display: flex;
        position: relative;
    }


    // Media Queries
    @media (max-width: 1024px){
        h2{font-size: 1.8rem;}
    }

    @media(max-width: 768px){
        h2{margin-top: 30px;} 

        div{
            flex-direction: column;
            margin-bottom: 10px;
        }
    }

    @media(max-width: 480px){
        div{
            flex-direction: column;
            width: 90%;
            margin: 0 auto;
        }
    }
`

export const Members = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    text-align: center;
    padding: 2%;
    color: #fff;
    margin-top: 20px;

    :hover .memberImg{
        opacity: 1;
        filter: grayscale(0);
        border: 1px solid rgb(0, 179, 118);
    }

    span{color: rgb(231, 76, 60);}

    .memberImg{
        width: 90%;
        border-radius: 5px;
        height: 180px;
        margin: 0 auto 20px auto;
        filter: grayscale(1);
        opacity: .8;
        transition: all .2s;
        border: 1px solid transparent;
    }

    .info{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .title{
            display: flex;
            flex-direction: column;
            height: 10%;
    
            h4{
                color: rgb(0, 179, 118);
                font-weight: 400;
                font-size: 1.125rem;
                font-family: 'Roboto Mono', monospace;
                margin-bottom: 7px;
            }
    
            span{
                font-size: 0.938rem;
                transition: all .2s;
            }
        }
    
        p{margin: 25px 0; height: 200px;}
    
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
    }

    
    // Media Queries
    @media(max-width: 768px){
        width: 100%;
        display: flex;

        .memberImg{width: 50%;}

        div{
            .logos{
                flex-direction: row;
                margin-bottom: 30px;
            }
        }
    }
    
    @media(max-width: 480px){
        p{margin: 10px 0;}

        .memberImg{width: 100%;}

        div{
            width: 100%;
            margin-bottom: 30px;
        }
    }
`