import {
    CREATE_WISATA,
    GET_WISATA,
    UPDATE_WISATA,
    DELETE_WISATA
} from "../actions/types";

const initialState = [];

function wisataReducer(wisata = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_WISATA:
            return [...wisata, payload]

        case GET_WISATA:
            return payload;

        case UPDATE_WISATA:
            return wisata.map((wisata) => {
                if (wisata.id = payload.id) {
                    return {
                        ...wisata,
                        ...payload
                    }
                } else {
                    return wisata
                }
            })

        case DELETE_WISATA:
            return wisata.filter(({ id }) => id !== payload.id);

        default:
            return wisata;


    }
}

export default wisataReducer;