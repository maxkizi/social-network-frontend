import {me} from "./auth-reducer";

const FINISH_INITIALIZATION = 'FINISH_INITIALIZATION'

const initialState = {
    isInitFinished: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FINISH_INITIALIZATION:
            return {
                ...state, isInitFinished: true
            }
        default:
            return state
    }

}

const finishInitialization = () => {
    return {type: FINISH_INITIALIZATION}

}

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(me())
        promise.then(() => {
            dispatch(finishInitialization())
        }).catch(() => {
            dispatch(finishInitialization())
        })
    }
}

export default appReducer