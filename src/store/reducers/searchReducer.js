import { 
    SEARCH_DETAILS_CHANGE,
    RESET
} from '../actions/actions'

const initialSearchDetails = {
    age: '',
    functionality: '',
    isability: '',
    clickedButton:'Age'
}
const UpdateSearchDetails=(state,key,value)=>({
    ...state,
    [key]:value
})
const searchReducer = (state = initialSearchDetails, action) => {
    switch (action.type) {
        case SEARCH_DETAILS_CHANGE:
            return UpdateSearchDetails(state, action.key, action.value)
        case RESET:
            return initialSearchDetails
        default:
            return state;
    }
};

export default searchReducer