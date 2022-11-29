import {
    GET_KULINER_DETAIL,
    GET_KULINER_LIST,
    PUT_KULINER_EDIT
} from "../actions/kulinerAction";

let initialState = {
    getKulinerListResult: false,
    getKulinerLoading: false,
    getKulinerError: false,
    getKulinerDetailResult: false,
    getKulinerDetailError: false,
    getKulinerDetailLoading: false,
    getResponDataKuliner: false,
    getResponErrorKuliner: false
}

const kulinerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_KULINER_LIST:
            return {
                ...state,
                getKulinerListResult: action.payload.data,
                getKulinerLoading: action.payload.loading,
                getKulinerError: action.payload.errorMessage
            }
        case GET_KULINER_DETAIL:
            return {
                ...state,
                getKulinerDetailResult: action.payload.data,
                getKulinerDetailLoading: action.payload.loading,
                getKulinerDetailError: action.payload.errorMessage
            }

        case PUT_KULINER_EDIT:
            return {
                ...state,
                getResponDataKuliner: action.payload.data,

                getResponErrorKuliner: action.payload.errorMessage
            }

        default:
            return state;
    }
}

export default kulinerReducer;