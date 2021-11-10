import * as acttionTypes from '../types'

export const setUpdateAction = (data)=> {
    return {
        type: acttionTypes.SET_UPDATE,
        payload: data
    }
}