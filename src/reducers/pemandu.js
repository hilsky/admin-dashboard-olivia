import {
    CREATE_PEMANDU,
    GET_PEMANDU,
    UPDATE_PEMANDU,
    DELETE_PEMANDU
} from "../actions/types";

const initialState = [];

function pemandu(pemandu = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_PEMANDU:
            return [...pemandu, payload]

        case GET_PEMANDU:
            return payload;

        case UPDATE_PEMANDU:
            return pemandu.map((pemandu) => {
                if (pemandu.id = payload.id) {
                    return {
                        ...pemandu,
                        ...payload
                    }
                } else {
                    return pemandu
                }
            })

        case DELETE_PEMANDU:
            return pemandu.filter(({ id }) => id !== payload.id);

        default:
            return pemandu;


    }
}

export default pemandu;