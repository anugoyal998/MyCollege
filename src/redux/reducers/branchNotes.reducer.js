import * as actionTypes from '../types'
const initial = {
    branchNotes: [],
    allNotes: [],
    searchNotes: [],
}

export const branchNotesReducer = (state = initial, {type,payload}) => {
    switch (type) {
        case actionTypes.SET_NOTES_BRANCH:
            return {...state,branchNotes: payload}
        case actionTypes.SET_ALL_NOTES:
            return {...state,allNotes: payload}
        case actionTypes.SET_SEARCH_NOTES:
            return {...state,searchNotes: payload}
        default:
            return state
    }
}