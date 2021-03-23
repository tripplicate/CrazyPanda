import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import PagginationContext from 'src/controller/PagginationContext';

let types = {
    position: PropTypes.number.isRequired,
    landmark: PropTypes.bool
}


let Button = ({position, landmark}) => {
    
    
    let {currentPage, setCurrentPage} = useContext(PagginationContext)
    
    const CLASSES = {
        default: "page-navigation__button",
        selected: currentPage === position ? "page-navigation__button_primary" : "",
        landmark: landmark ? "page-navigation__button_last" : ""
    };

    let hundleClick = (pos) => {
        setCurrentPage(pos);
        window.scrollTo(pageYOffset, 0)
    };

    return(
        <button 
            className={`${CLASSES.default} ${CLASSES.landmark}${CLASSES.selected}`}
            onClick={hundleClick.bind(this, position)}>{position + 1}
        </button>
    )
}

Button.propTypes = types;

export default Button;