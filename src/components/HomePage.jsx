import React from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import RestaurantsList from './RestaurantsList';
import MapPage from './MapPage';
import DetailPage from './DetailPage';


export const HomePage = ({ location }) => {
    return (
        <div className="page-content">
            <RestaurantsList />

            <TransitionGroup>
                <CSSTransition key={location.pathname} classNames="slide" timeout={250} mountOnEnter unmountOnExit>
                    <div className={location.pathname === '/' ? '' : 'slide'}>
                        <Switch location={location}>
                            <Route exact path="/map" component={MapPage} />
                            <Route exact path="/:id" component={DetailPage} />
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default HomePage;