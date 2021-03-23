import React, { useContext, useState } from 'react';

import DataContext from 'src/controller/DataContext';
import CurrentDataContext from 'src/controller/CurrentDataContext';
import PagginationContext from 'src/controller/PagginationContext';

let Search = () => {
    let [value, setValue] = useState(''),
        {appData} = useContext(DataContext),
        {setCurrentData} = useContext(CurrentDataContext),
        {setCurrentPage} = useContext(PagginationContext)



    let search = (data, searchValue) => {
        let FILTERING = [];

        if(!searchValue.length){
            setCurrentData(FILTERING)
        }
        
        FILTERING = data.filter(el => {
                return  el.name.toLowerCase().includes(searchValue)  ||
                        el.email.toLowerCase().includes(searchValue) ||
                        el.job.toLowerCase().includes(searchValue)
            })
            
            setCurrentData(FILTERING)
            setCurrentPage(0)
    }    
    
    let hundleChange = ({currentTarget}) => {

        let {value} = currentTarget

        setValue(value)
        search(appData, value)

    }

    return(
        <div className="section-table__search-container">
            <label className="section-table__search-label">
                <svg className="section-table__search-icon"  viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.82751 13.437C5.86194 13.4416 5.89618 13.4438 5.9295 13.4438C6.29846 13.4438 6.62054 13.1708 6.67163 12.795C6.72748 12.3843 6.44019 12.0064 6.02966 11.9509C3.44696 11.5999 1.5 9.36383 1.5 6.75C1.5 3.85492 3.85492 1.5 6.75 1.5C9.64508 1.5 12 3.85492 12 6.75C12 8.88446 10.7276 10.788 8.75922 11.5992C8.37634 11.757 8.19379 12.1954 8.35126 12.5782C8.50909 12.9611 8.94781 13.1433 9.33032 12.9858C9.92853 12.7396 10.4745 12.4122 10.9631 12.0236L16.7194 17.7803C16.8664 17.9269 17.0579 18 17.25 18C17.4421 18 17.6336 17.9269 17.7803 17.7803C18.0731 17.4873 18.0731 17.0127 17.7803 16.7197L12.0258 10.9651C12.9608 9.79578 13.5 8.32233 13.5 6.75C13.5 3.0282 10.4718 0 6.75 0C3.0282 0 0 3.0282 0 6.75C0 10.1107 2.50543 12.9855 5.82751 13.437Z" fill="#454750" fillOpacity="0.5"/></svg>
                <input onChange={hundleChange.bind(this)} className="section-table__search-input" type="search" placeholder="Найти"/>
            </label>
        </div>
    )
}

export default Search;