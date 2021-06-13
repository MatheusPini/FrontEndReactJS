import React from 'react'
import {ContainerComponent} from './style'
const Container: React.FC = ({children}) => {
    return (
        <ContainerComponent>
            {children}
        </ContainerComponent>
    )
}
export default Container