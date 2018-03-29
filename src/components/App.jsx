import React from 'react';
import { connect } from 'react-redux';

import AppRouter from '../routers/AppRouter';
import { fetchRestaurants } from '../actions/baseActions'


export class App extends React.Component {
    constructor(props) {
        super(props);
        props.fetchRestaurants();
    }

    render() {
        return (
            <div>
                <AppRouter />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurants())
    };
};

export default connect(undefined, mapDispatchToProps)(App);