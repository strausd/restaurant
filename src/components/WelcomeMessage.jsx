import React from 'react';
import { TransitionGroup, CSSTransition, Transition } from "react-transition-group";


export class WelcomeMessage extends React.Component {
    message = () => (
        <div className="starter hidden-mobile">
            <h1>Welcome to Lunch Tyme</h1>
            <h3>🍕🍔🌮</h3>
            <h3>Step 1 - Browse</h3>
            <h3>Step 2 - Go</h3>
            <h3>Step 3 - Eat</h3>
        </div>
    );

    render() {
        return (
            <CSSTransition in={this.props.show} classNames="fade" timeout={250} mountOnEnter unmountOnExit>
                {this.message()}
            </CSSTransition>
        );
    }
}

export default WelcomeMessage;