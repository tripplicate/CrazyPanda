import React, { useState } from 'react';
import PagginationContext from 'src/controller/PagginationContext';

import Header from 'components/Header/Header';
import Table from 'components/Table/Table';
import Paggination from 'components/Paggination/Paggination';


let App = () => {

   let   [currentPage, setCurrentPage] = useState(0),
         [currentData, setCurrentData] = useState();


   let   pagginationContext = {
            page: {
               currentPage,
               setCurrentPage
            },
            data: {
               currentData,
               setCurrentData
            }
         }      
   
   return(
      <PagginationContext.Provider value={pagginationContext}>
         <Header/>
         <Table />
         <Paggination steps={25}/>
      </PagginationContext.Provider>
   )
}

export default App