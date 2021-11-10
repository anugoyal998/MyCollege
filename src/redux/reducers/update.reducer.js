import * as acttionTypes from '../types'

const initial = {
    updates: []
}

export const updateReducer = (state=initial,{type,payload}) => {
    switch(type) {
        case acttionTypes.SET_UPDATE:
            return {...state,updates: payload}
        default:
            return state
    }
}