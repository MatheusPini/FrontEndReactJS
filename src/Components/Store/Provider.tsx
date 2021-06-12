import React from 'react'
import Context from './Context'
import useStorage from '../../Utils/useStorage'
const StoreProvider: React.FC = ({children}) => {
    const [token, setToken] = useStorage('token')
    return (
        <Context.Provider value={{
            token,
            setToken,
        }}>
            {children}
        </Context.Provider>
    )
}

export default StoreProvider