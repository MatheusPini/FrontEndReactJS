import React from 'react'
import {CardComponent} from './style'
import { CardInterface } from './interface'

const Card: React.FC<CardInterface> = ({children, getAltura, getLargura}) => {
    
    return (
        <CardComponent getAltura={getAltura} getLargura={getLargura}>
            {children}
        </CardComponent>
    )
}
export default Card