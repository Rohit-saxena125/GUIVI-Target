import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Signup from '../Component/Signup'
import Login from '../Component/Login';
const homepage = () => {
    return (
        <>
        <Router>
        <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        </Switch>
        </Router>
        </>
    );
}
export default homepage;