import React from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import RestaurantsList from './RestaurantsList';
import MapPage from './MapPage';
import DetailPage from './DetailPage';
import { scrollTo } from '../actions/baseActions';


const isInViewport = y => {
    // console.log(document.documentElement.clientHeight);
    if (y < document.documentElement.clientHeight) {
        return true;
    }
    return false;
};

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.handleBodyNoScroll();
        this.props.scrollTo(this.props.location.pathname.slice(1));
    }

    componentDidUpdate() {
        this.handleBodyNoScroll();
        if (this.props.id && this.props.location.pathname === '/') {
            console.log('Here');
            const x = window.scrollX;
            const y = document.getElementById(this.props.id.toString()).getBoundingClientRect().y;
            if (!isInViewport(y)) {
                window.scrollTo(x, y - 70);
            }
        }
        this.props.scrollTo(this.props.location.pathname.slice(1));
    }

    handleBodyNoScroll = () => {
        if (this.props.location.pathname === '/') {
            document.querySelector('body').classList.remove('noscroll');
        } else {
            setTimeout(() => {
                document.querySelector('body').classList.add('noscroll');
            }, 250);
        }
    };
    
    render() {
        return (
            <div className="page-content">
                <RestaurantsList />

                <TransitionGroup>
                    <CSSTransition key={this.props.location.pathname} classNames="slide" timeout={250} mountOnEnter unmountOnExit>
                        <div className={this.props.location.pathname === '/' ? '' : 'slide'}>
                            <Switch location={this.props.location}>
                                <Route exact path="/map" component={MapPage} />
                                <Route exact path="/:id" component={DetailPage} />
                            </Switch>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

const mapStateToProps = ({ id }) => {
    return {
        id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        scrollTo: id => dispatch(scrollTo(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);