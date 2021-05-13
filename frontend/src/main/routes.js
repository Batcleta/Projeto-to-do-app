import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Todo from '../pages/Todo';
import About from '../pages/About';


const Routes = props => {

    return (
        <Switch>
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            <Route path='*' component={Todo} />
        </Switch>
    )
}
export default Routes;