import {
    GET_KULINER_DETAIL,
    GET_KULINER_LIST
} from "../actions/kulinerAction";

let initialState = {
    getKulinerListResult: false,
    getKulinerLoading: false,
    getKulinerError: false,
    getKulinerDetailResult: false,
    getKulinerDetailError: false,
    getKulinerDetailLoading: false,
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
                getKulinerListResult: action.payload.data,
                getKulinerLoading: action.payload.loading,
                getKulinerError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default kulinerReducer;