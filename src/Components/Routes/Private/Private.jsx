import React, { useContext, useEffect, useState } from 'react'
import {Route, Redirect} from 'react-router-dom'
import StoreContext from '../../Store/Context'
import Axios from 'axios'
const RoutesPrivate = ({component: Component, ...rest}) => {
    const {token} = useContext(StoreContext)
    
    return (
        <Route
            {...rest}
            render={
                ()=>(token && token != "")?(
                    <Component {...rest} />
                )
                :
                <Redirect to="/login" />
            }
        />
    )
}
export default RoutesPrivate