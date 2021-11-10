import * as acttionTypes from '../types'

const initial = {
    currBranch: ''
}

export const branchReducer = (state = initial, {type,payload})=> {
    switch(type) {
        case acttionTypes.SET_BRANCH:
            return {...state,currBranch: payload}
        default: 
            return state
    }
}