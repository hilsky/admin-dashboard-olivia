import {
    GET_PEMANDU_DETAIL,
    GET_PEMANDU_LIST,
    DELETE_PEMANDU,
    PUT_PEMANDU_EDIT
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
    getResponDataPemandu: false,
    errorResponDataPemandu: false,
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
                getPemanduDetailResult: action.payload.data,
                getPemanduDetailError: action.payload.loading,
                getPemanduDetailLoading: action.payload.errorMessage
            }
        case PUT_PEMANDU_EDIT:
            return {
                ...state,
                getResponDataPemandu: action.payload.data,
                errorResponDataPemandu: action.payload.data
            }
        default:
            return state;
    }
}

export default pemanduReducer;