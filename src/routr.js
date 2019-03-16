

// 路由模块

import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    NavLink
} from 'react-router-dom'
import { Switch } from 'antd-mobile'
const Login = ()=>{
    return <div>Login</div>
}
const Home = ()=>{
    return <div>Home</div>
}
class RouterCom extends React.Compoment {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render () {
        return <Router> 
            <Switch>
               <Route exact path="/login" component={Login} />
               <Route path="/" component={Home} /> 
            </Switch>
        </Router>
    }
}
export default RouterCom

