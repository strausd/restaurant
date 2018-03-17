import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';


const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/map" component={HomePage} />
                    <Route path="/:id" component={HomePage} />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;