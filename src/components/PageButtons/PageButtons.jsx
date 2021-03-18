import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';


let types = {
    count: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired
}

let PageButtons = ({count, currentPage, changePage}) => {

    const   MAX_ORDER_BUTTONS           = 15,
            PAGE_AFTER_PORTALS_ENABLE   = 11,
            PAGE_PORTAL_VALUE           = Math.floor(PAGE_AFTER_PORTALS_ENABLE / 2);    
       
    let renderButtons = (count) => {

        const RESULT = [];

        if(currentPage >= PAGE_AFTER_PORTALS_ENABLE){

           for (let i = currentPage - PAGE_PORTAL_VALUE ; i < currentPage + PAGE_PORTAL_VALUE; i++) { 
            
                // If we are on the last page, we don`t add it
                if(i === count){
                    RESULT.pop()
                    break
                }          
                    RESULT.push(
                        <Button key={i + 1} position={i} changePage={changePage} />
                    ) 
            }

                // Added the first page
                RESULT.unshift(
                    <Button key={0} position={0} landmark changePage={changePage} />
                )

                // Added the last page
                RESULT.push(
                    <Button key={(count)} landmark position={count - 1} changePage={changePage} />
                )  
        }

        // Render buttons if the number is biggest than the maximum
        else if(count >= MAX_ORDER_BUTTONS){
            for (let i = 0 ; i < MAX_ORDER_BUTTONS; i++) {            
                RESULT.push(
                    <Button key={i} position={i} changePage={changePage} />
                )
            }  
            RESULT.push(
                <Button key={count} landmark position={count - 1} changePage={changePage} />
            )  
        }

        // Render buttons if the number is less than the maximum
        else{
            for (let i = 0 ; i < count; i++) {            
                RESULT.push(
                    <Button key={i} position={i} neutral={true} changePage={changePage} />
                )
            }
        }
        return RESULT;
    }

    return renderButtons(count)
}

PageButtons.propTypes = types;

export default PageButtons;