import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import DetailPage from '../components/DetailPage';
import MapPage from '../components/MapPage';
import { fetchRestaurants } from '../actions/baseActions';


export class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        props.fetchRestaurants();
    }

    render() {
        return (
            <Router>
                <div className="full-page">
                    <Header />
                    <Route path="/" component={HomePage} />
                    <Switch>
                        <Route path="/map" component={MapPage} />
                        <Route path="/:id" component={DetailPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurants())
    };
};

export default connect(undefined, mapDispatchToProps)(AppRouter);