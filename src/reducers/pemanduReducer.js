import {
    GET_PEMANDU_DETAIL,
    GET_PEMANDU_LIST,

} from "../actions/pemanduAction";

let initialState = {
    getPemanduListResult: false,
    getPemanduLoading: false,
    getPemanduError: false,
    getPemanduDetailResult: false,
    getPemanduDetailError: false,
    getPemanduDetailLoading: false,
    deletePemanduResult: false,
    deletePemanduLoading: false,
    deletePemanduError: false,
}

const pemanduReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PEMANDU_LIST:
            return {
                ...state,
                getPemanduListResult: action.payload.data,
                getPemanduLoading: action.payload.loading,
                getPemanduError: action.payload.errorMessage
            }
        case GET_PEMANDU_DETAIL:
            return {
                ...state,
                getPemanduListResult: action.payload.data,
                getPemanduLoading: action.payload.loading,
                getPemanduError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default pemanduReducer;