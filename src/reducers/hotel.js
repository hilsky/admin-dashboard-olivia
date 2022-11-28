import {
    CREATE_HOTEL,
    GET_HOTEL,
    UPDATE_HOTEL,
    DELETE_HOTEL
} from "../actions/types";

const initialState = [];

function userReducer(hotel = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_HOTEL:
            return [...hotel, payload]

        case GET_HOTEL:
            return payload;

        case UPDATE_HOTEL:
            return hotel.map((hotels) => {
                if (hotels.id = payload.id) {
                    return {
                        ...hotels,
                        ...payload
                    }
                } else {
                    return hotels
                }
            })

        case DELETE_USER:
            return hotel.filter(({ id }) => id !== payload.id);

        default:
            return hotel;


    }
}

export default hotel;