import React, { useState } from 'react';
import DataContext from 'src/controller/DataContext';
import CurrentDataContext from 'src/controller/CurrentDataContext';

import Data from 'src/data/data.json';

import Header from 'components/Header/Header';
import Paggination from 'components/Paggination/Paggination';

let App = () => {
   
   let   [appData, setAppData] = useState(Data),
         [currentData, setCurrentData] = useState();

   let appDataContext = {
      appData,
      setAppData
   }

   let appCurrentDataContext = {
      currentData,
      setCurrentData
   }

   return(
      <>
         <Header/>
         <DataContext.Provider value={appDataContext}>
            <CurrentDataContext.Provider value={appCurrentDataContext}>
               <Paggination steps={50}/>
            </CurrentDataContext.Provider>
         </DataContext.Provider> 
      </>  
   )
}

export default App