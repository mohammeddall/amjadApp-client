import React from 'react'
import { constants } from '../../dataManger/data'
const isabilityArray = constants.isabilityArray

function IsabilitySelect({ value, onChange }) {
    return (
        <>
            <label className="my-1 mr-2" for="isabilitySelect">Isability</label>
            <select className="custom-select my-1 mr-sm-2" id="isabilitySelect"
                onChange={(e) =>  onChange('isability', e.target.value)   }
                value={value} >
                <option value="" selected >Choose...</option>
                {isabilityArray.map(isability =>
                    <option value={isability.label}>{isability.label}</option>
                )}
            </select>
        </>
    );
}
export default IsabilitySelect
