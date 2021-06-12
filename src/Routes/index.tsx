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
const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/" exact component={Dashboard}></Route>
                <Route path="/Configs" exact component={Configs}></Route>
            </Switch>
        </Router>
    )
}
export default Routes