import {
    GET_HOTEL_DETAIL,
    GET_HOTEL_LIST,
    DELETE_HOTEL,
    PUT_HOTEL_EDIT
} from "../actions/hotelAction";

let initialState = {
    getHotelListResult: false,
    getHotelLoading: false,
    getHotelError: false,
    getHotelDetailResult: false,
    getHotelDetailError: false,
    getHotelDetailLoading: false,
    deleteHotelResult: false,
    deleteHotelLoading: false,
    deleteHotelError: false,
    getResponDataHotel: false,
    getErrorDataHotel: false
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
                getHotelDetailResult: action.payload.data,
                getKulinerDetailLoading: action.payload.loading,
                getKulinerDetailError: action.payload.errorMessage
            }

        case PUT_HOTEL_EDIT:
            return {
                ...state,
                getResponDataHotel: action.payload.data,
                getErrorDataHotel: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default hotelReducer;