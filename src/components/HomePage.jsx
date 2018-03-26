import React from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import RestaurantsList from './RestaurantsList';
import MapPage from './MapPage';
import DetailPage from './DetailPage';


export class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.handleBodyNoScroll();
    }

    componentDidUpdate() {
        this.handleBodyNoScroll();
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

// export const HomePage = ({ location }) => {
//     return (
//         <div className="page-content">
//             <RestaurantsList />

//             <TransitionGroup>
//                 <CSSTransition key={location.pathname} classNames="slide" timeout={250} mountOnEnter unmountOnExit>
//                     <div className={location.pathname === '/' ? '' : 'slide'}>
//                         <Switch location={location}>
//                             <Route exact path="/map" component={MapPage} />
//                             <Route exact path="/:id" component={DetailPage} />
//                         </Switch>
//                     </div>
//                 </CSSTransition>
//             </TransitionGroup>
//         </div>
//     );
// };

export default HomePage;