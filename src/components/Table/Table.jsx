import React, { useRef, useState } from 'react';
import PropTypes, { object } from 'prop-types';

import qSort from 'src/tools/qSort';

import Search from 'components/Search/Search';

let types = {
    data: PropTypes.arrayOf(object)
}

let Table = ({data}) => {

    let [filter, setFilter] = useState('default',
        title               = useRef();

    let renderRows = (data) => {
        if(data?.length){

            switch(filter){
                case "ASC": 
                    data = qSort(data); break;
                case "DESC":
                    data = qSort(data).reverse(); break;
                default: data;      
            }

            return data?.map((element) => {

                let {id, name, email, job} = element
                
                return <tr data-user-id={id} key={id} className="table__body-tr">
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
    
    let useFilter = () => {
        switch(filter){
            case "default": 
                setFilter("ASC")
                title.current.setAttribute('data-title', "По возрастанию");break;
            case "ASC":
                 setFilter("DESC")
                 title.current.setAttribute('data-title', "По убыванию");break;
            case "DESC":
                 setFilter("default")
                 title.current.removeAttribute('data-title');break;
            default: setFilter('default')
        }
    }

    return(
        <section className="section-table section-table_mt_60">
            <div className="container section-table__container">
                <header className="section-table__header">
                    <h1 ref={title} className="section-table__title">Сотрудники</h1>
                    <Search/>
                </header>
                <div className="table-wrapper">
                    <table cellSpacing="0" className="table table_mt_20">
                        <thead className="table__header">
                            <tr onClick={useFilter} className="table__header-tr">
                                <th className="table__column">Ф.И.О</th>
                                <th className="table__column">Почта</th>
                                <th className="table__column">Должность</th>
                            </tr>
                        </thead>
                        <tbody className="table__body">{renderRows(data)}</tbody>
                    </table>
                </div>  
            </div>
        </section>
    )
}

Table.propTypes = types;

export default Table;
