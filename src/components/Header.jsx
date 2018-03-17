import React from 'react';
import { Link } from 'react-router-dom';


const Header = props => {
    const back_button = window.location.pathname !== '/';
    return (
        <div className="header">
            {back_button ? (
                <div className="header__icon header__back">
                    <Link to="/">
                        <img src="/dist/icons/ic_webBack@2x.png" alt="Map" />
                    </Link>
                </div>
            ) : null}
            <div className="header__link">
                <Link to="/">
                    <h1>Lunch Tyme</h1>
                </Link>
            </div>
            <div className="header__icon header__map">
                <Link to="/map">
                    <img src="/dist/icons/icon_map@2x.png" alt="Map" />
                </Link>
            </div>
        </div>
    );
};

export default Header;