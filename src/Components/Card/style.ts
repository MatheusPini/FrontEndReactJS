import styled from 'styled-components'
import { CardInterface } from './interface'
export const CardComponent = styled.div<CardInterface>`
    font-family: 'Roboto';
    width: ${({getLargura}) => getLargura || 150}px;
    height: ${({getAltura})=> getAltura || 150}px;
    margin: 15px;
    background-color: #ffffff;
    box-shadow: 1px 1px 29px -3px #00000029;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`