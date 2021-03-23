import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import PagginationContext from 'src/controller/PagginationContext';
import DataContext from 'src/controller/DataContext';
import CurrentDataContext from 'src/controller/CurrentDataContext';

import Table from 'components/Table/Table';
import PageButtons from 'components/PageButtons/PageButtons';

let types = {
    steps: PropTypes.number
}


let Paggination = ({steps = 25}) => {

    let [currentPage, setCurrentPage] = useState(0);

    let pagginationContext = {
        currentPage,
        setCurrentPage
    }

    let { appData } = useContext(DataContext),
        { currentData} = useContext(CurrentDataContext)

    let Data = currentData ?? appData;

    let amountData      = Data.length,
        amountPages     = Math.ceil(amountData / steps),
        actualData      = Data.slice(currentPage * steps, currentPage * steps + steps);

    return(
        <PagginationContext.Provider value={pagginationContext}>
            <Table data={actualData}/>
            <PageButtons count={amountPages} currentPage={currentPage}/>
        </PagginationContext.Provider>     
    )
}

Paggination.propTypes = types;

export default Paggination;