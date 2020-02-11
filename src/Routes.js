import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import App from './App'
import Contact from './components/Contact'
class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <App/>
                </Route>
                <Route path="/contact">
                   <Contact/>
                </Route>
            </Switch>
        );
    }
}

export default Routes;