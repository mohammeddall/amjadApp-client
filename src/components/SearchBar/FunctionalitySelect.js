import React from 'react'

import {constants} from '../data'
const functionalityArray = constants.functionalityArray

function FunctionalitySelect({ functionalityonClick}){
    return(
        <>
        <label className="my-1 mr-2" for="functionalitySelect">Functionality</label>
        <select className="custom-select my-1 mr-sm-2" id="functionalitySelect" onClick={(e)=>{
                functionalityonClick(e.target.value);
        }}>
            <option value="0" selected disabled>Choose...</option>
                {functionalityArray.map(functionality=>
                <option value={functionality.id}>{functionality.label}</option>
                )}
        </select>
        </>
    );
}
export default FunctionalitySelect