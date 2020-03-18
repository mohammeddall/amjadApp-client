
//Action Creators

export const updateSearchDetails = (key, value) => ({
    type: 'SEARCH_DETAILS_CHANGE',
    key,
    value
})
export const resetSearchDetails = () => ({
    type: 'RESET'
})