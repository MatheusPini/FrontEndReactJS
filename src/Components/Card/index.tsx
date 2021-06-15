import React from 'react'
import {CardComponent} from './style'
import { CardInterface } from './interface'

const Card: React.FC<CardInterface> = ({children, getAltura, getLargura, typeAltura, typeLargura}) => {
    
    return (
        <CardComponent getAltura={getAltura} getLargura={getLargura} typeAltura={typeAltura} typeLargura={typeLargura}>
            {children}
        </CardComponent>
    )
}
export default Card