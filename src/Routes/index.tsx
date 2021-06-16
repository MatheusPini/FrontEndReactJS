import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    Link,
    useParams
} from "react-router-dom"
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import Configs from '../Pages/Configs'
import Usuarios from '../Pages/Usuarios'
import RoutesPrivate from '../Components/Routes/Private/Private'
const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" exact component={Login} />
                <RoutesPrivate path="/" exact component={Dashboard} />
                <RoutesPrivate path="/Configs" exact component={Configs} />
                <RoutesPrivate path="/Usuarios" exact component={Usuarios} />
            </Switch>
        </Router>
    )
}
export default Routes