import actionTypes from "./actionTypes";

const INITIAL_STATE = {
    questionCategory: '', 
    questionDifficaulty: '',
    questionType: '',
    amountOfQuestion: '',
    score: 10
}

const reducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.CHANGE_CATEGORY:
            return {
                ...state, 
                questionCategory: action.payload
            }
        case actionTypes.CHANGE_DIFFICAULTY:
            return {
                ...state,
                questionDifficaulty: action.payload
            }
        case actionTypes.CHANGE_TYPE:
            return {
                ...state,
                questionType: action.payload
            }
        case actionTypes.CHANGE_AMOUNT:
            return {
                ...state,
                amountOfQuestion: action.payload
            }
        case actionTypes.CHANGE_SCORE:
            return {
                ...state,
                score: action.payload
            }
        default: 
            return state;
    }
}

export default reducer;