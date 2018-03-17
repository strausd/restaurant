import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <div className="header__link">
                <Link to="/">Lunch Tyme</Link>
            </div>
            <div className="header__map">
                <Link to="/map">
                    <img src="/dist/icons/icon_map@2x.png" alt="Map" />
                </Link>
            </div>
        </div>
    );
};

export default Header;