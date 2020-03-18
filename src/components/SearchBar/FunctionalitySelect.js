import React from 'react'
import { constants } from '../../dataManger/data'
const functionalityArray = constants.functionalityArray

function FunctionalitySelect({ value, onChange }) {
    return (
        <>
            <label className="my-1 mr-2" for="functionalitySelect">Functionality</label>
            <select className="custom-select my-1 mr-sm-2" id="functionalitySelect"
                onChange={(e) => onChange('functionality', e.target.value)}
                value={value}>
                <option value="">Choose...</option>
                {functionalityArray.map(functionality =>
                    <option value={functionality.label} >{functionality.label}</option>
                )}
            </select>
        </>
    );
}
export default FunctionalitySelect






// import React from 'react'
// import {connect} from 'react-redux'
// import { updateSearchDetails } from '../../store/actions/index';

// import {constants} from '../../dataManger/data'
// const functionalityArray = constants.functionalityArray

// function FunctionalitySelect({ functionalityState, searchDetailsChange}){
//     return(
//         <>
//         <label className="my-1 mr-2" for="functionalitySelect">Functionality</label>
//         <select className="custom-select my-1 mr-sm-2" id="functionalitySelect" onChange={(e)=>{
//                 searchDetailsChange('functionality',e.target.value);
//             }} value={functionalityState}>
//             <option value="">Choose...</option>
//                 {functionalityArray.map(functionality=>
//                 <option value={functionality.label} >{functionality.label}</option>
//                 )}
//         </select>
//         </>
//     );
// }

// const mapStateToProps = (state) => {
//     return {
//         functionalityState: state.searchReducer.functionality
//     };
// };
// const mapDispathchToProps = dispatch => {
//     return {
//         searchDetailsChange: (key, value) => dispatch(updateSearchDetails(key, value)),
//     };
// };
// export default connect(mapStateToProps, mapDispathchToProps)(FunctionalitySelect)
