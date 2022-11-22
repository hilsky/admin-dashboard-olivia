import {
    GET_WISATA_DETAIL,
    GET_WISATA_LIST
} from "../actions/wisataAction";

let initialState = {
    getWisataListResult: false,
    getWisataLoading: false,
    getWisataError: false,
    getWisataDetailResult: false,
    getWisataDetailError: false,
    getWisataDetailLoading: false,
}

const Wisata = (state = initialState, action) => {
    switch (action.type) {
        case GET_WISATA_LIST:
            return {
                ...state,
                getWisataListResult: action.payload.data,
                getWisataLoading: action.payload.loading,
                getWisataError: action.payload.errorMessage
            }
        case GET_WISATA_DETAIL:
            return {
                ...state,
                getWisataDetailResult: action.payload.data,
                getWisataDetailError: action.payload.error,
                getWisataDetailLoading: action.payload.loading
            }
        default:
            return state;
    }
}

export default Wisata;