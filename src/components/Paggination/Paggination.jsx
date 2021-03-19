import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PagginationContext from 'src/controller/PagginationContext';
import Data from 'src/data/data.json'; // Static Data

import PageButtons from 'components/PageButtons/PageButtons';

let types = {
    steps: PropTypes.number
}


let Paggination = ({steps = 50}) => {

    let [startData, setStartData] = useState(Data);

    console.log(startData);

    let {page, data} = useContext(PagginationContext),
        {currentPage, setCurrentPage} = page,
        {setCurrentData} = data;

    let amountData      = startData?.length,
        amountPages     = Math.ceil(amountData / steps),
        actualData      = startData?.slice(currentPage * steps, currentPage * steps + steps);
    

    // Get data from Server

    /* useEffect(async () => {
        let users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
                    await setStartData(users)
    }, []) */

    useEffect(() => {
        setCurrentData(actualData)
    }, [startData, currentPage])


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