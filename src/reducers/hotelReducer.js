import {
    GET_HOTEL_DETAIL,
    GET_HOTEL_LIST,
    DELETE_HOTEL
} from "../actions/hotelAction";

let initialState = {
    getKulinerListResult: false,
    getKulinerLoading: false,
    getKulinerError: false,
    getKulinerDetailResult: false,
    getKulinerDetailError: false,
    getKulinerDetailLoading: false,
    deleteHotelResult: false,
    deleteHotelLoading: false,
    deleteHotelError: false,
}

const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOTEL_LIST:
            return {
                ...state,
                getHotelListResult: action.payload.data,
                getHotelLoading: action.payload.loading,
                getHotelError: action.payload.errorMessage
            }
        case GET_HOTEL_DETAIL:
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

export default hotelReducer;