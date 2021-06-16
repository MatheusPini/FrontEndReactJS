import styled from 'styled-components'
import { CardInterface } from './interface'
export const CardComponent = styled.div<CardInterface>`
    font-family: 'Roboto';
    width: 
    ${
        ({getLargura, typeLargura, }) => ((typeLargura === "%") ? getLargura+"%" || 150+"%" : getLargura+"px" || 150+"px")
    };
    height: 
    ${
        (({getAltura, typeAltura}) => (typeAltura === "auto") ? "auto" : ((typeAltura === "%") ? getAltura+"%" || 150+"%" : getAltura+"px" || 150+"px"))
        
    };
    margin: 15px;
    background-color: #ffffff;
    box-shadow: 0px 0px 41px -8px #00000029;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    div{
        width: 100%;
        height: 100%;
    }
    div div{
        width: 100%;
        height: 100%;
    }
    div div canvas{
        width: 100%;
        height: 100%;
    }

`