import React from 'react'

import { constants } from '../data'
const isabilityArray = constants.isabilityArray

function IsabilitySelect({ isabilitySelectonClick }) {
    return (
        <>
            <label className="my-1 mr-2" for="isabilitySelect">Isability</label>
            <select className="custom-select my-1 mr-sm-2"
                id="isabilitySelect"
                onClick={(e) => {
                    isabilitySelectonClick(e.target.value);
                }}>
                <option value="0" selected disabled>Choose...</option>
                {isabilityArray.map(isability =>
                    <option value={isability.id}>{isability.label}</option>
                )}
            </select>
        </>
    );
}
export default IsabilitySelect