import styled from 'styled-components';

export const Img = styled.div`
    position: absolute;
    width: 33%;
    right: 0;
    color: rgba(0, 0, 0, 0.3);

    span{
        transition: all .2s;
        cursor: default;
    }
    
    span: hover{color: rgba(0, 179, 118, 0.5);} 
`