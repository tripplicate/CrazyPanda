import React from 'react';
import logo from 'images/logo.png';

let Header = () => {
    return(
        <header className="header">
            <div className="container header__container">
                <a href="#" className="link">
                    <picture className="logo header__logo">
                        <img src={logo} alt="crazy panda logo"/>
                    </picture>
                </a>
            </div>
        </header>
    )
}

export default Header;