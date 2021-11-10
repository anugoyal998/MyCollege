import * as acttionTypes from '../types'

export const setBranchAction = (branch) => {
    return{
        type: acttionTypes.SET_BRANCH,
        payload: branch
    }
}