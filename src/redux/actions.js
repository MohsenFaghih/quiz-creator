import actionTypes from "./actionTypes";

export const handleChangeCategory = payload => ({
    type: actionTypes.CHANGE_CATEGORY,
    payload
})

export const handleChangeDifficaulty = payload => ({
    type: actionTypes.CHANGE_DIFFICAULTY,
    payload
})

export const handleChangeType = payload => ({
    type: actionTypes.CHANGE_TYPE,
    payload
})

export const handleChangeAmount = payload => ({
    type: actionTypes.CHANGE_AMOUNT,
    payload
})

export const handleChangeScore = payload => ({
    type: actionTypes.CHANGE_SCORE,
    payload
})