import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Route, Switch } from 'react-router-dom'

const Auth = (props) => {

    return (
        <div>

            <Login updateToken={props.updateToken} />



        </div>
    )
}

export default Auth;