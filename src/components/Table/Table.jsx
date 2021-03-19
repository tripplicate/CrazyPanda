import React, {useContext} from 'react';
import PagginationContext from 'src/controller/PagginationContext';

import Search from 'components/Search/Search';

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
                    <Search/>
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