import {createContext} from 'react'
import Axios from 'axios'
const StoreContext = createContext({
    token: null,
    setToken: (token)=> {     
    }
})
export default StoreContext