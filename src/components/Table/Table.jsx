import React, {useContext} from 'react';
import PagginationContext from 'src/controller/PagginationContext';


let Table = () => {

    let {data} = useContext(PagginationContext),
        {currentData} = data;


    let renderRows = (currentData) => {
        if(currentData?.length){

            return currentData?.map((element ,i) => {

                let {id, name, email, job} = element
                
                return <tr key={id} className="table__body-tr">
                            <td className="table__body-td">{name}</td>
                            <td className="table__body-td">{email}</td>
                            <td className="table__body-td">{job}</td>
                        </tr>
            })
        }
        return  <tr className="table__body-tr">
                    <td className="table__body-td">Data is empty</td>
                </tr>
    }    
        

    return(
        <section className="section-table section-table_mt_60">
            <div className="container section-table__container">
                <header className="section-table__header">
                    <h1 className="section-table__title">Сотрудники</h1>
                    <div className="section-table__search-container">
                        <label className="section-table__search-label">
                            <svg className="section-table__search-icon"  viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.82751 13.437C5.86194 13.4416 5.89618 13.4438 5.9295 13.4438C6.29846 13.4438 6.62054 13.1708 6.67163 12.795C6.72748 12.3843 6.44019 12.0064 6.02966 11.9509C3.44696 11.5999 1.5 9.36383 1.5 6.75C1.5 3.85492 3.85492 1.5 6.75 1.5C9.64508 1.5 12 3.85492 12 6.75C12 8.88446 10.7276 10.788 8.75922 11.5992C8.37634 11.757 8.19379 12.1954 8.35126 12.5782C8.50909 12.9611 8.94781 13.1433 9.33032 12.9858C9.92853 12.7396 10.4745 12.4122 10.9631 12.0236L16.7194 17.7803C16.8664 17.9269 17.0579 18 17.25 18C17.4421 18 17.6336 17.9269 17.7803 17.7803C18.0731 17.4873 18.0731 17.0127 17.7803 16.7197L12.0258 10.9651C12.9608 9.79578 13.5 8.32233 13.5 6.75C13.5 3.0282 10.4718 0 6.75 0C3.0282 0 0 3.0282 0 6.75C0 10.1107 2.50543 12.9855 5.82751 13.437Z" fill="#454750" fillOpacity="0.5"/></svg>
                            <input className="section-table__search-input" type="search" placeholder="Найти"/>
                        </label>
                    </div>
                </header>
                <div className="table-wrapper">
                    <table cellSpacing="0" className="table table_mt_20">
                        <thead className="table__header">
                            <tr className="table__header-tr">
                                <th className="table__column">Ф.И.О</th>
                                <th className="table__column">Почта</th>
                                <th className="table__column">Должность</th>
                            </tr>
                        </thead>
                        <tbody className="table__body">{renderRows(currentData)}</tbody>
                    </table>
                </div>
                
            </div>
        </section>
    )
}

export default Table;