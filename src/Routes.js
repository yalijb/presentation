import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import App from './App'
import Contact from './components/Contact'
class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="https://yalijb.github.io/presentation/">
                    <App/>
                </Route>
                <Route path="https://yalijb.github.io/presentation/contact/">
                   <Contact/>
                </Route>
            </Switch>
        );
    }
}

export default Routes;