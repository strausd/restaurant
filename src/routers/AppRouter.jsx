import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import DetailPage from '../components/DetailPage';
import MapPage from '../components/MapPage';


export class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="full-page">
                    <Header />
                    <Route path="/" component={HomePage} />
                </div>
            </Router>
        );
    }
};

export default AppRouter;