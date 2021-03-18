import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import PagginationContext from 'src/controller/PagginationContext';
import Data from 'src/data/data.json';

import PageButtons from 'components/PageButtons/PageButtons';

let types = {
    steps: PropTypes.number
}


let Paggination = ({steps = 50}) => {

    let {page, data} = useContext(PagginationContext),
        {currentPage, setCurrentPage} = page,
        {setCurrentData} = data;


    let amountData      = Data.length,
        amountPages     = Math.ceil(amountData / steps),
        actualData      = Data.slice(currentPage * steps, currentPage * steps + steps);
    
    useEffect(() => {
        setCurrentData(actualData)
    }, [currentPage])

    return(
        <div className="page-navigation">
            <div className="container">
                {<PageButtons count={amountPages} currentPage={currentPage} changePage={setCurrentPage}/> }
            </div>
        </div>        
    )
}

Paggination.propTypes = types;

export default Paggination;